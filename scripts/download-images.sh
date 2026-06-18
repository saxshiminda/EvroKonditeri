#!/usr/bin/env sh
# Company images live in client/public/images/ — organised by type.
# Product photos: client/public/images/cakes/{slug}.jpg
# Site assets:   client/public/images/site/
# Gallery extras: client/public/images/gallery/{category}/

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CAKES="$ROOT/client/public/images/cakes"
SITE="$ROOT/client/public/images/site"

mkdir -p "$CAKES" "$SITE"

echo "Images are bundled locally in client/public/images/."
echo "  Cakes:   $CAKES"
echo "  Site:    $SITE"
echo "  Gallery: $ROOT/client/public/images/gallery/"
echo ""
echo "After updating images, re-seed the database:"
echo "  npm run db:seed"
