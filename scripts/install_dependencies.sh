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
STAGING_DIR="/opt/codedeploy/${APP_NAME}/staging"
LIVE_DIR="/var/www/${APP_NAME}"
NGINX_SITE_CONF_SOURCE="${STAGING_DIR}/nginx/nginx.conf"
NGINX_SITE_CONF_TARGET="/etc/nginx/conf.d/uelement.conf"

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

# Configure Nginx
log "Configuring Nginx..."

# Remove default nginx config
sudo rm -f /etc/nginx/conf.d/default.conf || log "No default.conf to remove"
# Remove default welcome pages and index files
sudo rm -f /usr/share/nginx/html/index.html || log "No default index.html to remove"
sudo rm -rf /usr/share/nginx/html/* || log "No files in /usr/share/nginx/html to remove or permission denied"

# Install our site config
if [ -f "${NGINX_SITE_CONF_SOURCE}" ]; then
    log "Installing Nginx site config..."
    sudo cp -f "${NGINX_SITE_CONF_SOURCE}" "${NGINX_SITE_CONF_TARGET}"
    sudo chown root:root "${NGINX_SITE_CONF_TARGET}"
    sudo chmod 644 "${NGINX_SITE_CONF_TARGET}"
    
    # Validate nginx config
    log "Validating Nginx configuration..."
    sudo nginx -t || error "Invalid Nginx configuration"
else
    error "Nginx site configuration not found at ${NGINX_SITE_CONF_SOURCE}"
fi

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
