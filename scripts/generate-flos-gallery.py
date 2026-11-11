from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path("jesse-santos/public/projects/owner/flos")
flavors = [
    ("menta", "MENTA", "#CBEACF"),
    ("mirtilo", "MIRTILO", "#C8DDF0"),
    ("laranja", "LARANJA", "#F6D4AB"),
    ("morango", "MORANGO", "#F5CED4"),
    ("abacaxi", "ABACAXI", "#EADBD0"),
]

def font(size, bold=False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for file in candidates:
        if Path(file).exists():
            return ImageFont.truetype(file, size)
    return ImageFont.load_default()

def product_image(name, target_h):
    im = Image.open(root / (name + ".png")).convert("RGBA")
    # Original transparent mockups place the can away from the canvas center.
    # Crop the can, keeping its original art, proportions and quality intact.
    cx = 1052 if name == "menta" else 792
    left, top, right, bottom = cx - 185, 240, cx + 185, 1185
    piece = im.crop((left, top, right, bottom))
    w = round(piece.width * target_h / piece.height)
    return piece.resize((w, target_h), Image.Resampling.LANCZOS)

cover = Image.new("RGB", (1600, 900), "#F7F4EB")
draw = ImageDraw.Draw(cover)
for i, (name, label, color) in enumerate(flavors):
    x0 = i * 320
    draw.rectangle((x0, 0, x0 + 320, 900), fill=color)
    p = product_image(name, 615)
    cover.paste(p, (x0 + (320 - p.width)//2, 120), p)
    bbox=draw.textbbox((0,0),label,font=font(22,True))
    draw.text((x0+(320-(bbox[2]-bbox[0]))//2,795),label,font=font(22,True),fill="#24211F")
cover.save(root / "capa.jpg", quality=90, subsampling=0, optimize=True)

for name, label, color in flavors:
    card = Image.new("RGB", (840, 1040), color)
    d=ImageDraw.Draw(card)
    d.text((55,45), "FLOS",font=font(55,True),fill="#1F2420")
    p = product_image(name, 830)
    card.paste(p, ((840-p.width)//2, 110), p)
    d.text((55,970),label,font=font(35,True),fill="#1F2420")
    card.save(root / (name + "-card.jpg"), quality=90, subsampling=0, optimize=True)
print("Generated FLOS editorial cover and five full-resolution product cards.")
