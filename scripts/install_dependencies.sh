#!/usr/bin/env bash
set -euo pipefail

# Enhanced logging
log() {
    echo "[$(date +%Y-%m-%d-%H:%M:%S)] [Install] $1"
}

error() {
    echo "[$(date +%Y-%m-%d-%H:%M:%S)] [Install] ERROR: $1" >&2
    exit 1
}

APP_NAME="uelement"
LIVE_DIR="/var/www/${APP_NAME}"

log "Starting installation process..."
log "Checking system package manager..."

# Check for root/sudo access
if [[ $EUID -ne 0 ]] && ! command -v sudo &> /dev/null; then
    error "Neither root privileges nor sudo available"
fi

# Detect package manager
if command -v dnf &> /dev/null; then
    PKG="dnf"
elif command -v yum &> /dev/null; then
    PKG="yum"
else
    error "Neither dnf nor yum found. This script requires RHEL/CentOS/Amazon Linux"
fi

# Update package list
sudo $PKG -y update || log "Update failed but continuing..."

# Handle curl package conflicts
log "Removing conflicting curl packages..."
sudo $PKG remove -y curl curl-minimal || log "No curl packages to remove"

# Clean package cache
sudo $PKG clean all || log "Failed to clean package cache"

# Install packages with specific curl version
log "Installing required packages..."
sudo $PKG install -y nginx rsync || error "Failed to install nginx and rsync"

# Install curl separately with --allowerasing to handle conflicts
log "Installing curl..."
sudo $PKG install -y --allowerasing curl || error "Failed to install curl"

# Create live directory if missing
sudo mkdir -p "${LIVE_DIR}"
sudo chown -R nginx:nginx "${LIVE_DIR}" || true

# Configure SELinux if enabled
if command -v getenforce >/dev/null 2>&1; then
    SELINUX_STATUS=$(getenforce)
    log "SELinux status: ${SELINUX_STATUS}"
    if [[ "${SELINUX_STATUS}" != "Disabled" ]]; then
        log "Configuring SELinux policies..."
        sudo setsebool -P httpd_read_user_content 1 || log "Warning: SELinux policy setup failed"
        sudo setsebool -P httpd_enable_homedirs 1 || log "Warning: SELinux policy setup failed"
    fi
fi

log "Installation completed successfully"
