/** 공방 씬. Phase 2에서는 빈 원반만 올리고, Phase 4에서 드롭·머지·반응·턴 진행을 붙인다. */
import * as THREE from 'three';
import type { SceneModule } from '../core/Engine';
import type { SceneId } from '../core/config';
import { Rng } from '../core/prng';
import { Disc } from './Disc';

export class WorkshopScene implements SceneModule {
  readonly id: SceneId = 'workshop';
  readonly root = new THREE.Group();
  readonly disc: Disc;

  constructor() {
    this.disc = new Disc(new Rng('planet-workshop/disc'));
    this.root.add(this.disc.group);
  }

  enter(): void {
    this.disc.mass = 0;
    this.disc.warn = 0;
  }

  exit(): void {
    // 판 상태 정리는 Phase 4에서 추가
  }

  update(dt: number, time: number): void {
    this.disc.update(dt, time);
  }

  onQuality(pixelRatio: number): void {
    this.disc.setScale(pixelRatio);
  }

  dispose(): void {
    this.disc.dispose();
  }
}
