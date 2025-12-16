#!/usr/bin/env bash
set -euo pipefail

APP_NAME="uelement"
STAGING_DIR="/opt/codedeploy/${APP_NAME}/staging"
LIVE_DIR="/var/www/${APP_NAME}"
BUILD_DIR="${STAGING_DIR}/out"
NGINX_WEBROOT="/usr/share/nginx/html"
NGINX_CONF_SOURCE="${STAGING_DIR}/nginx/nginx.conf"
NGINX_CONF_TARGET="/etc/nginx/conf.d/uelement.conf"

log() { echo "[$(date +%Y-%m-%dT%H:%M:%S)] [AfterInstall] $*"; }

log "Starting AfterInstall"

if [ ! -d "${BUILD_DIR}" ]; then
  log "ERROR: Build directory not found at ${BUILD_DIR}"; exit 1
fi

if [ ! -d "${STAGING_DIR}" ]; then
  log "ERROR: Staging directory not found at ${STAGING_DIR}"; exit 1
fi

log "Placing Nginx site configuration"
if [ -f "${NGINX_CONF_SOURCE}" ]; then
  sudo cp -f "${NGINX_CONF_SOURCE}" "${NGINX_CONF_TARGET}"
  sudo chown root:root "${NGINX_CONF_TARGET}"
  sudo chmod 644 "${NGINX_CONF_TARGET}"
  # Remove default config to avoid conflicting server blocks
  sudo rm -f /etc/nginx/conf.d/default.conf || true
else
  log "WARNING: ${NGINX_CONF_SOURCE} missing; using existing Nginx config"
fi

log "Validating Nginx configuration"
if ! sudo nginx -t; then
  log "ERROR: Nginx configuration test failed"; exit 1
fi

log "Clearing nginx default webroot: ${NGINX_WEBROOT}"
sudo rm -rf "${NGINX_WEBROOT}"/* || log "No files to remove or permission denied"

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
