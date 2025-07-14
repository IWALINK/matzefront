# Royella Docker Setup

This project includes Docker configurations for both development and production environments, optimized for the `lamatzeresto.ch` domain.

## Quick Start

### Development Environment
```bash
# Start development environment
make start-dev

# Or manually
docker-compose -f docker-compose.dev.yml up -d --build
```

Access at: http://localhost:8080

### Production Environment
```bash
# Start production environment
make start-prod

# Or manually
docker-compose -f docker-compose.prod.yml up -d --build
```

Access at: http://localhost:80

## Environment Overview

### Development Environment
- **Port**: 8080
- **Features**: Hot reload, source code mounting, Vite dev server
- **URLs**: localhost:8080, royella.localhost:8080
- **Configuration**: `docker-compose.dev.yml`, `nginx-proxy-dev.conf`

### Production Environment
- **Port**: 80 (and 443 for HTTPS)
- **Features**: Optimized build, caching, security headers
- **URLs**: lamatzeresto.ch, www.lamatzeresto.ch
- **Configuration**: `docker-compose.prod.yml`, `nginx-proxy.conf`

## Available Commands

### Development
```bash
make dev          # Start development environment
make dev-build    # Build and start development
make dev-down     # Stop development environment
make dev-logs     # Show development logs
make dev-shell    # Access development container shell
```

### Production
```bash
make prod         # Start production environment
make prod-build   # Build and start production
make prod-down    # Stop production environment
make prod-logs    # Show production logs
make prod-shell   # Access production container shell
```

### Utility
```bash
make clean        # Clean up all containers and volumes
make status       # Show status of all containers
make setup-ssl    # Create SSL directory structure
make help         # Show all available commands
```

## Domain Configuration

### For lamatzeresto.ch
1. Configure your DNS to point `lamatzeresto.ch` and `www.lamatzeresto.ch` to your server's IP
2. Ensure ports 80 and 443 are open on your server
3. For HTTPS, add SSL certificates to the `ssl/` directory:
   - `ssl/lamatzeresto.ch.crt` (certificate)
   - `ssl/lamatzeresto.ch.key` (private key)

### SSL Setup
```bash
# Create SSL directory
make setup-ssl

# Add your certificates to the ssl/ directory
# Then restart the production environment
make prod-down
make prod-build
```

## Architecture

### Development Stack
```
Client → nginx-proxy-dev:8080 → royella-app-dev:3000 (Vite dev server)
```

### Production Stack
```
Client → nginx-proxy-prod:80 → royella-app-prod:80 (Nginx static server)
```

## File Structure

```
├── docker-compose.dev.yml      # Development environment
├── docker-compose.prod.yml     # Production environment
├── docker-compose.yml          # Original configuration
├── Dockerfile                  # Production build
├── Dockerfile.dev              # Development build
├── nginx.conf                  # Production nginx config
├── nginx-proxy.conf           # Production proxy config
├── nginx-proxy-dev.conf       # Development proxy config
├── Makefile                   # Management commands
└── ssl/                       # SSL certificates (create manually)
```

## Features

### Development Features
- Hot module replacement (HMR)
- Source code mounting for live editing
- WebSocket support for Vite
- Development-specific logging
- Port 8080 to avoid conflicts

### Production Features
- Optimized static file serving
- Gzip compression
- Security headers
- Caching strategies
- Health checks
- SSL support (HTTPS)

## Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using the port
   lsof -i :80
   lsof -i :8080
   
   # Stop conflicting services
   sudo service apache2 stop  # if using Apache
   ```

2. **Permission issues**
   ```bash
   # Fix log directory permissions
   sudo mkdir -p logs/nginx-dev logs/nginx-prod
   sudo chown -R $USER:$USER logs/
   ```

3. **SSL certificate issues**
   ```bash
   # Check certificate validity
   openssl x509 -in ssl/lamatzeresto.ch.crt -text -noout
   ```

### Logs
```bash
# Development logs
make dev-logs

# Production logs
make prod-logs

# Specific container logs
docker-compose -f docker-compose.dev.yml logs royella-app-dev
docker-compose -f docker-compose.prod.yml logs nginx-proxy-prod
```

### Health Checks
```bash
# Development health check
curl http://localhost:8080/health

# Production health check
curl http://localhost/health
```

## Security Considerations

### Development
- Source code is mounted for hot reload
- WebSocket connections enabled
- Less strict security headers

### Production
- Static files only
- Security headers enabled
- SSL/TLS support
- Hidden file access denied
- Backup file access denied

## Performance Optimization

### Development
- Disabled buffering for real-time updates
- WebSocket support for HMR
- Source maps enabled

### Production
- Gzip compression
- Static file caching (1 year for assets)
- HTML caching (1 hour)
- Optimized nginx configuration

## Deployment Checklist

### For Production Deployment
1. ✅ Configure DNS for lamatzeresto.ch
2. ✅ Open ports 80 and 443 on server
3. ✅ Add SSL certificates to ssl/ directory
4. ✅ Run `make prod-build`
5. ✅ Test HTTPS access
6. ✅ Monitor logs with `make prod-logs`
7. ✅ Set up monitoring and alerts

### For Development
1. ✅ Install Docker and Docker Compose
2. ✅ Run `make start-dev`
3. ✅ Access at http://localhost:8080
4. ✅ Make changes and see live updates
5. ✅ Use `make dev-logs` for debugging 