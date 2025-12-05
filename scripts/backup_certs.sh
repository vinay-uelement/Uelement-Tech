#!/usr/bin/env bash
set -euo pipefail

log(){ echo "[$(date +%Y-%m-%dT%H:%M:%S)] [BackupCerts] $*"; }

APP_NAME="uelement"
STAGING_DIR="/opt/codedeploy/${APP_NAME}/staging"
BACKUP_DIR="${STAGING_DIR}/cert_backup"

log "Creating cert backup dir: ${BACKUP_DIR}"
sudo mkdir -p "${BACKUP_DIR}"

if [ -d "/etc/letsencrypt" ]; then
  log "Backing up /etc/letsencrypt to ${BACKUP_DIR}"
  sudo rsync -a /etc/letsencrypt/ "${BACKUP_DIR}/letsencrypt/" || true
else
  log "No /etc/letsencrypt directory present; nothing to back up"
fi

if [ -d "/var/lib/letsencrypt" ]; then
  log "Backing up /var/lib/letsencrypt to ${BACKUP_DIR}"
  sudo rsync -a /var/lib/letsencrypt/ "${BACKUP_DIR}/var_lib_letsencrypt/" || true
fi

log "Backup completed"
exit 0
