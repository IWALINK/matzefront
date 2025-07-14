#!/bin/bash

# Infomaniak Deployment Script for lamatzeresto.ch
# This script automates the deployment process for Infomaniak hosting

set -e  # Exit on any error

echo "🚀 Infomaniak Deployment for lamatzeresto.ch"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Check if Docker is installed
check_docker() {
    print_step "Checking Docker installation..."
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_status "Docker and Docker Compose are installed"
}

# Check if we're in the right directory
check_project() {
    print_step "Checking project structure..."
    
    if [ ! -f "docker-compose.prod.yml" ]; then
        print_error "docker-compose.prod.yml not found. Please run this script from the project root."
        exit 1
    fi
    
    if [ ! -f "nginx-proxy.conf" ]; then
        print_error "nginx-proxy.conf not found. Please run this script from the project root."
        exit 1
    fi
    
    print_status "Project structure is correct"
}

# Setup SSL directory
setup_ssl() {
    print_step "Setting up SSL for Infomaniak..."
    print_status "Infomaniak gère SSL de manière centralisée !"
    
    echo ""
    print_warning "Configuration SSL Infomaniak:"
    echo "  ✅ Pas besoin de configurer SSL manuellement"
    echo "  ✅ Infomaniak gère automatiquement les certificats Let's Encrypt"
    echo "  ✅ Activez SSL dans le panneau de contrôle Infomaniak"
    echo ""
    print_status "SSL sera géré automatiquement par Infomaniak"
    echo ""
}

# Stop existing containers
stop_containers() {
    print_step "Stopping existing containers..."
    docker-compose -f docker-compose.prod.yml down 2>/dev/null || true
    print_status "Existing containers stopped"
}

# Build and start production environment
deploy_production() {
    print_step "Building and starting production environment..."
    
    # Build the images
    print_status "Building Docker images..."
    docker-compose -f docker-compose.prod.yml build
    
    # Start the containers
    print_status "Starting containers..."
    docker-compose -f docker-compose.prod.yml up -d
    
    print_status "Production environment deployed"
}

# Check deployment health
check_health() {
    print_step "Checking deployment health..."
    
    # Wait a moment for containers to start
    sleep 10
    
    # Check if containers are running
    if docker-compose -f docker-compose.prod.yml ps | grep -q "Up"; then
        print_status "Containers are running"
    else
        print_error "Containers failed to start"
        docker-compose -f docker-compose.prod.yml logs
        exit 1
    fi
    
    # Check health endpoint
    if curl -f http://localhost/health >/dev/null 2>&1; then
        print_status "Health check passed"
    else
        print_warning "Health check failed (this might be normal during startup)"
    fi
}

# Show deployment information
show_info() {
    echo ""
    print_step "Deployment Information:"
    echo "=========================="
    echo ""
    echo "🌐 Domain: lamatzeresto.ch"
    echo "🔗 Local URL: http://localhost"
    echo "🔒 SSL: Configure in Infomaniak control panel"
    echo ""
    echo "📊 Container Status:"
    docker-compose -f docker-compose.prod.yml ps
    echo ""
    echo "📝 Useful Commands:"
    echo "   View logs: make prod-logs"
    echo "   Stop: make prod-down"
    echo "   Restart: make prod-build"
    echo ""
    print_warning "Next Steps:"
    echo "1. Configure DNS in Infomaniak control panel"
    echo "2. Enable SSL certificate in Infomaniak"
    echo "3. Test the site at https://lamatzeresto.ch"
    echo ""
}

# Main deployment process
main() {
    echo ""
    print_step "Starting Infomaniak deployment for lamatzeresto.ch"
    echo ""
    
    # Run all checks and deployment steps
    check_docker
    check_project
    setup_ssl
    stop_containers
    deploy_production
    check_health
    show_info
    
    echo ""
    print_status "🎉 Deployment completed successfully!"
    echo ""
    print_warning "Remember to:"
    echo "- Configure your domain in Infomaniak control panel"
    echo "- Enable SSL certificate in Infomaniak"
    echo "- Test the site at https://lamatzeresto.ch"
    echo ""
}

# Run the main function
main "$@" 