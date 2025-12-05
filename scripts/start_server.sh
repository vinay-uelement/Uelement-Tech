#!/usr/bin/env bash
set -euo pipefail

log() {
    echo "[$(date +%Y-%m-%d-%H:%M:%S)] [Start] $1"
}

error() {
    echo "[$(date +%Y-%m-%d-%H:%M:%S)] [Start] ERROR: $1" >&2
    exit 1
}

APP_NAME="uelement"
LIVE_DIR="/var/www/${APP_NAME}"

# Verify deployment
log "Verifying deployment..."
if [ ! -f "${LIVE_DIR}/index.html" ]; then
    error "index.html not found in ${LIVE_DIR}"
fi

# Double check nginx config
log "Verifying Nginx configuration..."
sudo nginx -t || error "Invalid Nginx configuration"

# Start/restart Nginx
log "Enabling and restarting Nginx..."
sudo systemctl enable nginx
sudo systemctl restart nginx

# Verify Nginx is running
if ! sudo systemctl is-active --quiet nginx; then
    error "Nginx failed to start"
fi

# Verify site is accessible
log "Verifying site is accessible..."
sleep 2  # Give nginx a moment to start
if ! curl -s -I https://uelement.in | grep -q 'HTTP/2 200'; then
    error "Site is not accessible"
fi

log "Nginx is running and site is accessible"
