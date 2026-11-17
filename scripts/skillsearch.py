import os, re, sys, json
root = sys.argv[1]
idx = []
for dp, dn, fn in os.walk(root):
    dn[:] = [d for d in dn if d not in ('.git', 'node_modules')]
    if 'SKILL.md' in fn:
        p = os.path.join(dp, 'SKILL.md')
        try:
            t = open(p, encoding='utf-8', errors='replace').read()
        except Exception:
            continue
        m = re.match(r'---\s*\n(.*?)\n---', t, re.S)
        fm = m.group(1) if m else ''
        nm = re.search(r'^name:\s*(.+)$', fm, re.M)
        ds = re.search(r'^description:\s*(.*(?:\n[ \t]+.*)*)', fm, re.M)
        name = (nm.group(1).strip().strip('"\'') if nm else os.path.basename(dp))
        desc = re.sub(r'\s+', ' ', ds.group(1)).strip().strip('"\'>|- ') if ds else ''
        rel = os.path.relpath(dp, root)
        idx.append(dict(repo=rel.split(os.sep)[0], path=rel, name=name, desc=desc, lines=t.count('\n')))
json.dump(idx, open(sys.argv[2], 'w'), ensure_ascii=False, indent=0)
print('indexed', len(idx))
kws = {
 'threejs': r'three\.?js|three-', 'react-three-fiber': r'react.three.fiber|r3f', 'webgl': r'webgl|webgpu',
 'shader': r'shader', 'glsl': r'glsl', 'procedural generation': r'procedural', 'noise': r'\bnoise\b',
 'physics': r'physics', 'rapier': r'rapier', 'game development': r'game', 'game design': r'game.design|game-design',
 'puzzle game': r'puzzle', 'particles': r'particle', 'vfx': r'vfx|visual effects', 'post-processing': r'post.?process',
 'animation': r'animation', 'gsap': r'gsap', 'audio': r'audio|sound', 'web audio': r'web audio|webaudio|howler',
 'performance optimization': r'performance', 'frontend design': r'frontend.design|frontend-design', 'ui ux': r'ui/ux|ui-ux|ux\b',
 'typescript': r'typescript', 'vite': r'\bvite\b', 'testing': r'testing|\btest\b', 'playwright': r'playwright', 'gltf': r'gltf|glb',
}
for k, rx in kws.items():
    hits = [s for s in idx if re.search(rx, s['name'] + ' ' + s['desc'][:400], re.I)]
    print(f'\n## {k} ({len(hits)})')
    for s in hits[:14]:
        print(f"  {s['path']} [{s['lines']}L]")
