#!/bin/sh

echo "Starting Vite development server on port 3000..."

# Force Vite to use port 3000
export VITE_PORT=3000

# Start Vite with explicit port configuration
exec npm run dev -- --host 0.0.0.0 --port 3000 --strictPort 