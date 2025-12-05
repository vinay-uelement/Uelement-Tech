#!/usr/bin/env bash
set -euo pipefail

log() {
    echo "[$(date +%Y-%m-%d-%H:%M:%S)] [Validate] $1"
}

error() {
    echo "[$(date +%Y-%m-%d-%H:%M:%S)] [Validate] ERROR: $1" >&2
    exit 1
}

APP_NAME="uelement"
LIVE_DIR="/var/www/${APP_NAME}"
URL="http://127.0.0.1"

# Check if nginx is running
log "Checking Nginx status..."
if ! systemctl is-active --quiet nginx; then
    error "Nginx is not running"
fi

# Check for index.html
log "Checking for index.html..."
if [ ! -f "${LIVE_DIR}/index.html" ]; then
    error "index.html not found in ${LIVE_DIR}"
fi

# Check site accessibility
log "Checking site accessibility..."
RESPONSE=$(curl -s -I "$URL")
STATUS=$(echo "$RESPONSE" | grep "HTTP/" | awk '{print $2}')

log "HTTP status: $STATUS"
if [ "$STATUS" -ge 200 ] && [ "$STATUS" -lt 400 ]; then
    # Verify we're not getting the default nginx page
    CONTENT=$(curl -s "$URL")
    if echo "$CONTENT" | grep -q "Welcome to nginx"; then
        error "Default Nginx welcome page detected instead of the application"
    fi
    log "Application is properly served"
    exit 0
else
    error "Site returned non-200 status: $STATUS"
fi
