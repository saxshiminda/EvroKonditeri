#!/usr/bin/env sh
# Downloads bakery product and site images into client/public/images/.
# Run once after clone, or when refreshing assets.

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CAKES="$ROOT/client/public/images/cakes"
SITE="$ROOT/client/public/images/site"

mkdir -p "$CAKES" "$SITE"

download() {
  url="$1"
  out="$2"
  echo "→ $out"
  curl -fsSL "$url" -o "$out"
}

# Product images (800×600)
download "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/imeruli-khachapuri.jpg"
download "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/megruli-khachapuri.jpg"
download "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/lobiani.jpg"
download "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/chebureki.jpg"
download "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/honey-cake.jpg"
download "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/napoleon-slice.jpg"
download "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/chocolate-eclair.jpg"
download "https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/cream-horn.jpg"
download "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&h=600&q=80" "$CAKES/birthday-cake.jpg"

# Site hero bands (1600×900)
download "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&h=900&q=80" "$SITE/hero.jpg"
download "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1600&h=900&q=80" "$SITE/inspo.jpg"
download "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&h=800&q=80" "$SITE/about-baker.jpg"
download "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&h=400&q=80" "$SITE/gallery-pastries.jpg"

echo "Done. Images saved to client/public/images/"
