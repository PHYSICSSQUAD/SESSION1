#!/usr/bin/env python3
"""يبني نسخة ملف واحد standalone من الديك — الصور بتتضمن base64.
الاستخدام: python3 build.py   → الناتج: dist/IT-Society-Deck.html """
import base64, pathlib

root = pathlib.Path(__file__).parent
dist = root / "dist"
dist.mkdir(exist_ok=True)

html = (root / "index.html").read_text(encoding="utf-8")
css  = (root / "assets" / "style.css").read_text(encoding="utf-8")

names = ["config.js", "questions.js", "slides.js", "sims.js", "merge.js", "app.js"]
parts = {n: (root / "assets" / n).read_text(encoding="utf-8") for n in names}

# ضمّ الصور كـ data URIs داخل كود السلايدز
imgdir = root / "assets" / "img"
n = 0
for p in sorted(imgdir.glob("*")):
    if p.suffix.lower() not in (".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"):
        continue
    mime = "image/svg+xml" if p.suffix == ".svg" else "image/" + p.suffix.lstrip(".").replace("jpg", "jpeg")
    uri = f"data:{mime};base64,{base64.b64encode(p.read_bytes()).decode()}"
    token = f"assets/img/{p.name}"
    hit = False
    for key in ("slides.js", "merge.js", "config.js"):
        if token in parts[key]:
            parts[key] = parts[key].replace(token, uri)
            hit = True
    if hit:
        n += 1

out = html.replace('<link rel="stylesheet" href="assets/style.css">', f"<style>\n{css}\n</style>")
for name in names:
    out = out.replace(f'<script src="assets/{name}"></script>',
                      f'<script>\n/* ===== {name} ===== */\n{parts[name]}\n</script>')

dest = dist / "IT-Society-Deck.html"
dest.write_text(out, encoding="utf-8")
print(f"built {dest}  ({dest.stat().st_size/1e6:.1f} MB) — images inlined: {n}")
