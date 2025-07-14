# Infomaniak Deployment Guide for lamatzeresto.ch

This guide provides specific instructions for deploying the Royella application on Infomaniak hosting with the domain `lamatzeresto.ch`.

## 🏗️ Prerequisites

- Infomaniak hosting account
- Domain `lamatzeresto.ch` configured in Infomaniak
- SSH access to your Infomaniak server
- Docker and Docker Compose installed on the server

## 📋 Step-by-Step Deployment

### 1. Domain Configuration in Infomaniak

1. **Log into your Infomaniak control panel**
   - Go to https://manager.infomaniak.com
   - Navigate to your hosting service

2. **Configure DNS Records**
   - Go to "Domains" → "DNS Records"
   - Ensure `lamatzeresto.ch` and `www.lamatzeresto.ch` point to your server IP
   - Add A record if needed: `lamatzeresto.ch` → `YOUR_SERVER_IP`

3. **SSL Certificate Setup**
   - In Infomaniak control panel, go to "SSL Certificates"
   - Enable SSL for `lamatzeresto.ch`
   - Infomaniak provides free Let's Encrypt certificates

### 2. Server Preparation

```bash
# Connect to your Infomaniak server via SSH
ssh username@your-server-ip

# Install Docker (if not already installed)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Create project directory
mkdir -p /var/www/lamatzeresto
cd /var/www/lamatzeresto
```

### 3. Upload Project Files

```bash
# Upload your project files to the server
# You can use SCP, Git, or Infomaniak's file manager

# Example with SCP:
scp -r ./Royella/* username@your-server-ip:/var/www/lamatzeresto/

# Or clone from Git:
git clone https://github.com/your-repo/Royella.git
cd Royella
```

### 4. SSL Certificate Setup

**Infomaniak gère SSL de manière centralisée !**

```bash
# Pas besoin de configurer SSL manuellement
# Infomaniak gère automatiquement les certificats Let's Encrypt
```

**Dans le panneau de contrôle Infomaniak:**
1. Allez dans "Certificats SSL"
2. Activez SSL pour `lamatzeresto.ch`
3. Infomaniak fournit automatiquement les certificats Let's Encrypt
4. Aucune configuration supplémentaire nécessaire

### 5. Environment Configuration

Create a production environment file:

```bash
# Create .env file for production
cat > .env << EOF
NODE_ENV=production
DOMAIN=lamatzeresto.ch
INFOMANIAK_HOSTING=true
EOF
```

### 6. Deploy the Application

```bash
# Build and start the production environment
make prod-build

# Or manually:
docker-compose -f docker-compose.prod.yml up -d --build

# Check if containers are running
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

### 7. Configure Infomaniak Reverse Proxy (Optional)

If you want to use Infomaniak's built-in reverse proxy instead of Docker:

1. **In Infomaniak Control Panel:**
   - Go to "Web" → "Sites"
   - Create a new site for `lamatzeresto.ch`
   - Set the document root to your application directory

2. **Configure Reverse Proxy:**
   - Go to "Advanced" → "Reverse Proxy"
   - Add a reverse proxy rule:
     - Source: `/`
     - Destination: `http://localhost:80`

## 🔧 Infomaniak-Specific Configuration

### Port Configuration
Infomaniak typically uses specific ports. Update your `docker-compose.prod.yml`:

```yaml
services:
  nginx-proxy-prod:
    ports:
      - "8080:80"  # Use port 8080 instead of 80
      - "8443:443" # Use port 8443 instead of 443
```

### SSL Configuration
**Infomaniak gère SSL de manière centralisée - aucune configuration SSL nécessaire dans nginx !**

La configuration nginx actuelle est correcte pour Infomaniak :
- Pas de configuration SSL manuelle
- Infomaniak gère automatiquement HTTPS
- Les certificats Let's Encrypt sont fournis automatiquement

## 🚀 Deployment Commands

### Quick Deployment
```bash
# 1. Setup SSL
make setup-ssl

# 2. Deploy to production
make prod-build

# 3. Check status
make status

# 4. Monitor logs
make prod-logs
```

### Manual Deployment
```bash
# Stop existing containers
docker-compose -f docker-compose.prod.yml down

# Build and start
docker-compose -f docker-compose.prod.yml up -d --build

# Check health
curl https://lamatzeresto.ch/health
```

## 🔍 Troubleshooting

### Common Issues

1. **Port Conflicts**
   ```bash
   # Check what's using port 80/443
   sudo netstat -tlnp | grep :80
   sudo netstat -tlnp | grep :443
   
   # Stop conflicting services
   sudo service apache2 stop
   sudo service nginx stop
   ```

2. **SSL Certificate Issues**
   ```bash
   # Check certificate validity
   openssl x509 -in ssl/lamatzeresto.ch.crt -text -noout
   
   # Test SSL connection
   openssl s_client -connect lamatzeresto.ch:443 -servername lamatzeresto.ch
   ```

3. **DNS Issues**
   ```bash
   # Check DNS resolution
   nslookup lamatzeresto.ch
   dig lamatzeresto.ch
   
   # Test from different locations
   curl -I http://lamatzeresto.ch
   ```

### Logs and Monitoring

```bash
# Application logs
docker-compose -f docker-compose.prod.yml logs royella-app-prod

# Nginx logs
docker-compose -f docker-compose.prod.yml logs nginx-proxy-prod

# System logs
sudo journalctl -u docker
```

## 📊 Performance Optimization for Infomaniak

### 1. Enable Infomaniak's CDN
- In Infomaniak control panel, enable CDN for static assets
- Configure cache headers for images, CSS, and JS files

### 2. Database Optimization (if applicable)
- Use Infomaniak's managed database services
- Configure connection pooling
- Enable query caching

### 3. Monitoring
- Set up Infomaniak's monitoring tools
- Configure alerts for uptime and performance
- Monitor SSL certificate expiration

## 🔒 Security Considerations

### 1. Firewall Configuration
```bash
# Allow only necessary ports
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp  # SSH
sudo ufw enable
```

### 2. SSL Security
- Use HSTS headers (already configured)
- Enable OCSP stapling
- Regular certificate renewal

### 3. Application Security
- Keep Docker images updated
- Regular security patches
- Monitor for vulnerabilities

## 📞 Infomaniak Support

If you encounter issues:

1. **Check Infomaniak Status Page**: https://status.infomaniak.com
2. **Contact Infomaniak Support**: Available in your control panel
3. **Documentation**: https://www.infomaniak.com/en/support

## 🎯 Final Checklist

- [ ] Domain `lamatzeresto.ch` configured in Infomaniak
- [ ] SSL certificate enabled
- [ ] Docker and Docker Compose installed
- [ ] Project files uploaded to server
- [ ] Production environment deployed
- [ ] Health check passes: `curl https://lamatzeresto.ch/health`
- [ ] SSL certificate valid
- [ ] Performance monitoring configured
- [ ] Backup strategy in place

Your Royella application should now be accessible at `https://lamatzeresto.ch` with full SSL support provided by Infomaniak! 