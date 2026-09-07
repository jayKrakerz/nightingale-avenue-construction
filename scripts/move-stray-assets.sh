#!/bin/bash
# move-stray-assets.sh — moves any stray assets landing outside nightingale-site/ into trash after usage
# Rule: whenever any asset finds itself at repo root, move it after copying to public/
set -e
ROOT="/Users/heatmap/Documents/projects/tech-bro/nightingaleavenuecontruction.com"
PUBLIC="$ROOT/nightingale-site/public"
TRASH_BASE="/tmp/nac-trash"
mkdir -p "$TRASH_BASE"
TRASH="$TRASH_BASE/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$TRASH"
moved=0
shopt -s nullglob 2>/dev/null || true
for f in "$ROOT"/*.png "$ROOT"/*.jpg "$ROOT"/*.jpeg "$ROOT"/*.webp "$ROOT"/*.svg "$ROOT"/*.pdf "$ROOT"/*.mp4 "$ROOT"/*.mov; do
  [ -e "$f" ] || continue
  base=$(basename "$f")
  # special: new-logo.png considered used if public/logo.png exists (renamed)
  if [ "$base" = "new-logo.png" ] && [ -f "$PUBLIC/logo.png" ]; then
    echo "Stray asset used (renamed): $base -> public/logo.png — moving to $TRASH"
    mv "$f" "$TRASH/"
    moved=$((moved+1))
    continue
  fi
  if [ -f "$PUBLIC/$base" ] || [ -f "$PUBLIC/images/$base" ]; then
    echo "Stray asset used: $base -> moving to $TRASH"
    mv "$f" "$TRASH/"
    moved=$((moved+1))
  else
    echo "Stray asset pending usage (not yet in public): $base — will auto-move after you copy to public/"
  fi
done
if [ -f "$ROOT/public" ]; then
  echo "Stray file 'public' at root -> $TRASH"
  mv "$ROOT/public" "$TRASH/"
  moved=$((moved+1))
fi
if [ $moved -eq 0 ]; then
  echo "No stray used assets to move."
  rmdir "$TRASH" 2>/dev/null || true
else
  du -sh "$TRASH" 2>/dev/null || true
  echo "Moved $moved file(s) to $TRASH"
fi
for f in "$PUBLIC/images/plumbing-pipes-test.jpg" "$PUBLIC/images/"*test*.jpg; do
  [ -e "$f" ] || continue
  echo "Inside test leftover: $f -> $TRASH"
  mkdir -p "$TRASH"
  mv "$f" "$TRASH/" 2>/dev/null || true
done
