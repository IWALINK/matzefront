# # Build stage
# FROM node:18-alpine AS build

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install all dependencies (including dev dependencies for Vite)
# RUN npm ci

# # Copy source code
# COPY . .

# # Build the application
# RUN npm run build

# # Production stage
# FROM nginx:alpine

# # Copy built application from build stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Copy nginx configuration
# COPY nginx.conf /etc/nginx/nginx.conf

# # Expose port 80
# EXPOSE 80

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"] 


# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Production runner with static file server
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Install serve to serve static files
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json

# Create a simple startup script
RUN echo '#!/bin/sh' > start.sh && \
    echo 'echo "Starting static file server on port $PORT"' >> start.sh && \
    echo 'serve -s dist -l $PORT' >> start.sh && \
    chmod +x start.sh

# Add health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:$PORT/ || exit 1

EXPOSE 3000
CMD ["npm", "start"]
# CMD ["./start.sh"]