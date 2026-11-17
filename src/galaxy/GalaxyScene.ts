/** 내 은하: 만든 행성들이 중심 항성 주위를 궤도로 돈다. 클릭하면 줌인하고 탄생 기록을 보여 준다. */
import * as THREE from 'three';
import type { Engine, SceneModule } from '../core/Engine';
import { CONFIG, type SceneId } from '../core/config';
import { PLANET_BY_ID } from '../core/data';
import { bus } from '../core/events';
import { loadSave, type PlanetRecord } from '../core/save';
import { useGame } from '../core/store';
import { makeVariant } from '../gacha/judge';
import { PlanetView } from '../planet/Planet';
import { OUTPUT_GLSL } from '../vfx/glsl/noise';

const STAR_FRAG = /* glsl */ `
uniform float uTime;
varying vec3 vN;
varying vec3 vView;
void main() {
  float ndv = max(dot(normalize(vN), normalize(vView)), 0.0);
  vec3 core = vec3(1.0, 0.92, 0.7) * (1.6 + 0.2 * sin(uTime * 2.0));
  vec3 col = mix(vec3(1.0, 0.55, 0.2) * 2.0, core, pow(ndv, 0.6));
  gl_FragColor = vec4(col, 1.0);
  ${OUTPUT_GLSL}
}
`;
const STAR_VERT = /* glsl */ `
varying vec3 vN;
varying vec3 vView;
void main() {
  vN = normalMatrix * normal;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vView = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`;
const GLOW_FRAG = /* glsl */ `
varying vec2 vUv;
void main() {
  float d = length(vUv - 0.5) * 2.0;
  float a = pow(max(0.0, 1.0 - d), 3.0);
  gl_FragColor = vec4(vec3(1.0, 0.7, 0.35) * a * 1.5, a);
  ${OUTPUT_GLSL}
}
`;

interface Orbiter {
  rec: PlanetRecord;
  view: PlanetView;
  radius: number;
  speed: number;
  phase: number;
  incline: number;
}

export class GalaxyScene implements SceneModule {
  readonly id: SceneId = 'galaxy';
  readonly root = new THREE.Group();
  private orbiters: Orbiter[] = [];
  private star: THREE.Mesh<THREE.SphereGeometry, THREE.ShaderMaterial>;
  private glow: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  private orbitLines = new THREE.Group();
  private raycaster = new THREE.Raycaster();
  private dirty = true;
  private focus: Orbiter | null = null;
  private offs: Array<() => void> = [];
  private inputOffs: Array<() => void> = [];

  constructor(private engine: Engine) {
    this.star = new THREE.Mesh(
      new THREE.SphereGeometry(1.3, 48, 32),
      new THREE.ShaderMaterial({ vertexShader: STAR_VERT, fragmentShader: STAR_FRAG, uniforms: { uTime: { value: 0 } } }),
    );
    this.glow = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 9),
      new THREE.ShaderMaterial({
        vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
        fragmentShader: GLOW_FRAG,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    this.root.add(this.star, this.glow, this.orbitLines);
    this.offs.push(bus.on('galaxy:refresh', () => (this.dirty = true)));
  }

  private rebuild(): void {
    for (const o of this.orbiters) {
      this.root.remove(o.view.group);
      o.view.dispose();
    }
    this.orbiters = [];
    for (const l of [...this.orbitLines.children]) {
      (l as THREE.LineLoop).geometry.dispose();
      this.orbitLines.remove(l);
    }
    const save = loadSave();
    const lineMat = new THREE.LineBasicMaterial({ color: '#4a6aa8', transparent: true, opacity: 0.25 });
    save.collection.forEach((rec, i) => {
      const def = PLANET_BY_ID[rec.type];
      if (!def) return;
      const variant = makeVariant(def, rec.seed);
      const view = new PlanetView(def, variant, { radius: 0.5, detail: save.collection.length > 30 ? 'lo' : 'hi' });
      const radius = 3.4 + i * 1.15;
      const o: Orbiter = { rec, view, radius, speed: 1.6 / Math.pow(radius, 1.5), phase: i * 2.399, incline: Math.sin(i * 1.7) * 0.08 };
      this.orbiters.push(o);
      this.root.add(view.group);
      const pts = Array.from({ length: 129 }, (_, k) => {
        const a = (k / 128) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * o.incline, Math.sin(a) * radius);
      });
      this.orbitLines.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
    });
    this.dirty = false;
  }

  enter(): void {
    if (this.dirty) this.rebuild();
    this.overview();
    const c = this.engine.dom;
    const click = (e: PointerEvent) => this.pick(e);
    c.addEventListener('pointerup', click);
    this.inputOffs.push(() => c.removeEventListener('pointerup', click));
  }

  exit(): void {
    for (const off of this.inputOffs.splice(0)) off();
  }

  private pick(e: PointerEvent): void {
    this.engine.ray(e.clientX, e.clientY, this.raycaster);
    let best: Orbiter | null = null;
    let bestD = Infinity;
    for (const o of this.orbiters) {
      const p = o.view.group.position;
      const d = this.raycaster.ray.distanceToPoint(p);
      const dist = this.raycaster.ray.origin.distanceTo(p);
      if (d < o.view.radius * 2.2 && dist < bestD) {
        best = o;
        bestD = dist;
      }
    }
    this.focus = best;
    useGame.setState({ galaxySel: best?.rec ?? null });
    if (!best) this.overview();
  }

  private overview(): void {
    this.focus = null;
    useGame.setState({ galaxySel: null });
    const far = Math.max(1, (3.4 + this.orbiters.length * 1.15) / 9);
    const [x, y, z] = CONFIG.camera.galaxy as [number, number, number];
    this.engine.cameraTo([x, y * far, z * far], [0, 0, 0], 1.6);
  }

  update(dt: number, time: number): void {
    this.star.material.uniforms.uTime!.value = time;
    this.glow.quaternion.copy(this.engine.camera.quaternion);
    for (const o of this.orbiters) {
      const a = o.phase + time * o.speed;
      o.view.group.position.set(Math.cos(a) * o.radius, Math.sin(a) * o.radius * o.incline, Math.sin(a) * o.radius);
      o.view.setLight(_dir.copy(o.view.group.position).negate().normalize());
      o.view.update(dt, time);
    }
    if (this.focus) {
      const p = this.focus.view.group.position;
      const out = _dir.copy(p).normalize();
      this.engine.cameraTo([p.x + out.x * 2.6, p.y + 1.4, p.z + out.z * 2.6 + 0.01], [p.x, p.y, p.z], 0.25, 'none');
    }
  }

  dispose(): void {
    for (const off of [...this.offs, ...this.inputOffs]) off();
    for (const o of this.orbiters) o.view.dispose();
    this.star.geometry.dispose();
    this.star.material.dispose();
    this.glow.geometry.dispose();
    this.glow.material.dispose();
  }
}

const _dir = new THREE.Vector3();
