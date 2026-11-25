#!/usr/bin/env bash
# Bring every Rayford-AI fork up to date with its source repository under rayford295.
# Uses GitHub's merge-upstream, so commits made only in the organization fork are kept.
# Usage: scripts/sync-forks.sh   (needs the GitHub CLI, logged in with access to Rayford-AI)
set -uo pipefail
FORKS=(
  CrossViewGate RAPID DamageArbiter Sat2Street-DisasterGen Bi-Temporal-StreetView
  GenAI4Dresilience drone-compression-hpc DisasterVLP GeoLocator vgi-spatial-bias
  ArcGIS-SAM-TreeSegmentation awesome-autonomous-geoai awesome-3dgs-geoai rayford-knowledge-atlas
  PrepStreet disaster-crossview-datasets
)
for repo in "${FORKS[@]}"; do
  printf '%-30s ' "$repo"
  branch=$(gh api "repos/rayford295/$repo" --jq .default_branch 2>/dev/null) || { echo "source not found"; continue; }
  if out=$(gh api -X POST "repos/Rayford-AI/$repo/merge-upstream" -f branch="$branch" --jq '.merge_type // .message' 2>&1); then
    echo "ok ($out)"
  else
    echo "CONFLICT: merge rayford295/$repo into the fork by hand"
  fi
done
