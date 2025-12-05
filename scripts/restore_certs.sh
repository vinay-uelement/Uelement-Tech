#!/usr/bin/env bash
set -euo pipefail

log(){ echo "[$(date +%Y-%m-%dT%H:%M:%S)] [RestoreCerts] $*"; }

APP_NAME="uelement"
STAGING_DIR="/opt/codedeploy/${APP_NAME}/staging"
BACKUP_DIR="${STAGING_DIR}/cert_backup"

if [ -d "${BACKUP_DIR}/letsencrypt" ]; then
  log "Restoring letsencrypt certs to /etc/letsencrypt"
  sudo rsync -a "${BACKUP_DIR}/letsencrypt/" /etc/letsencrypt/ || true
fi

if [ -d "${BACKUP_DIR}/var_lib_letsencrypt" ]; then
  log "Restoring /var/lib/letsencrypt"
  sudo rsync -a "${BACKUP_DIR}/var_lib_letsencrypt/" /var/lib/letsencrypt/ || true
fi

log "Restore completed"
exit 0
