#!/usr/bin/env bash
# Bring every Rayford-AI fork up to date with its source repository under rayford295.
# Usage: scripts/sync-forks.sh   (needs the GitHub CLI, logged in with access to Rayford-AI)
set -euo pipefail
FORKS=(
  CrossViewGate RAPID DamageArbiter Sat2Street-DisasterGen Bi-Temporal-StreetView
  GenAI4Dresilience drone-compression-hpc DisasterVLP GeoLocator vgi-spatial-bias
  ArcGIS-SAM-TreeSegmentation awesome-autonomous-geoai awesome-3dgs-geoai rayford-knowledge-atlas
)
for repo in "${FORKS[@]}"; do
  printf '%-30s ' "$repo"
  gh repo sync "Rayford-AI/$repo" --source "rayford295/$repo" >/dev/null 2>&1 && echo synced || echo "FAILED (diverged? run: gh repo sync Rayford-AI/$repo --force)"
done
