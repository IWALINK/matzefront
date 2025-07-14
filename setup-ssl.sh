#!/bin/bash

# SSL Setup Script for lamatzeresto.ch
# This script helps set up SSL certificates for the production environment

echo "🔐 SSL Setup for lamatzeresto.ch"
echo "=================================="

# Create SSL directory if it doesn't exist
mkdir -p ssl

echo ""
echo "📁 SSL directory created: ./ssl/"
echo ""

echo "📋 Please add your SSL certificates to the ssl/ directory:"
echo "   - ssl/lamatzeresto.ch.crt (certificate file)"
echo "   - ssl/lamatzeresto.ch.key (private key file)"
echo ""

echo "🔍 Checking for existing certificates..."

if [ -f "ssl/lamatzeresto.ch.crt" ] && [ -f "ssl/lamatzeresto.ch.key" ]; then
    echo "✅ SSL certificates found!"
    echo ""
    echo "📊 Certificate information:"
    openssl x509 -in ssl/lamatzeresto.ch.crt -text -noout | grep -E "(Subject:|Not Before|Not After|DNS:)"
    echo ""
    echo "🔒 Certificate permissions:"
    ls -la ssl/
    echo ""
    echo "🚀 Ready to deploy with SSL!"
    echo "   Run: make prod-build"
else
    echo "❌ SSL certificates not found."
    echo ""
    echo "📝 Pour Infomaniak:"
echo "   Infomaniak gère SSL de manière centralisée !"
echo "   Pas besoin de configurer SSL manuellement."
echo ""
echo "   Étapes dans Infomaniak:"
echo "   1. Allez dans le panneau de contrôle Infomaniak"
echo "   2. Naviguez vers 'Certificats SSL'"
echo "   3. Activez SSL pour lamatzeresto.ch"
echo "   4. Infomaniak fournit automatiquement les certificats Let's Encrypt"
echo ""
echo "   ✅ SSL sera géré automatiquement par Infomaniak"
    echo ""
    echo "⚠️  For now, the site will work without SSL (HTTP only)"
    echo "   Run: make prod-build"
fi

echo ""
echo "🌐 Domain Configuration:"
echo "   Make sure your DNS points lamatzeresto.ch and www.lamatzeresto.ch"
echo "   to your server's IP address"
echo ""
echo "📖 For more information, see DOCKER_README.md" 