#!/usr/bin/env bash
set -euo pipefail

APP_NAME="uelement"
STAGING_DIR="/opt/codedeploy/${APP_NAME}/staging"
LIVE_DIR="/var/www/${APP_NAME}"
BUILD_DIR="${STAGING_DIR}/dist"
NGINX_WEBROOT="/usr/share/nginx/html"

log() { echo "[$(date +%Y-%m-%dT%H:%M:%S)] [AfterInstall] $*"; }

log "Starting AfterInstall"

if [ ! -d "${BUILD_DIR}" ]; then
  log "ERROR: Build directory not found at ${BUILD_DIR}"; exit 1
fi

log "Clearing nginx default webroot: ${NGINX_WEBROOT}"
sudo rm -rf "${NGINX_WEBROOT}/*" || log "No files to remove or permission denied"

log "Syncing built files to nginx webroot ${NGINX_WEBROOT}"
sudo rsync -a --delete "${BUILD_DIR}/" "${NGINX_WEBROOT}/"

# If /var/www used earlier, keep a mirrored copy
sudo mkdir -p "${LIVE_DIR}"
sudo rsync -a --delete "${NGINX_WEBROOT}/" "${LIVE_DIR}/"

log "Setting ownership and permissions"
sudo chown -R nginx:nginx "${NGINX_WEBROOT}" || log "Failed to chown"
sudo find "${NGINX_WEBROOT}" -type d -exec chmod 755 {} \; || true
sudo find "${NGINX_WEBROOT}" -type f -exec chmod 644 {} \; || true

log "Listing ${NGINX_WEBROOT} contents for debugging"
sudo ls -la "${NGINX_WEBROOT}" | sed -n '1,120p'

log "AfterInstall completed"
exit 0
