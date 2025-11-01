#!/bin/bash

# ===============================================
# CodeSandbox Client - Minimal Deployment Script
# ===============================================
# This script deploys the pre-built application using Docker

set -e  # Exit on any error

echo "🚀 Starting CodeSandbox Client deployment..."

# Check if pre-built files exist
if [ ! -d "www" ]; then
    echo "❌ Pre-built files not found!"
    echo "   The 'www' directory is missing."
    echo "   Please ensure you have the built application files."
    exit 1
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running!"
    echo "   Please start Docker and try again."
    exit 1
fi

echo "📦 Pre-built files found in 'www' directory"
echo "🐳 Building Docker image..."

# Build Docker image
docker build -f Dockerfile.prebuild -t codesandbox-client .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    
    # Stop existing container if running
    docker stop codesandbox-client 2>/dev/null || true
    docker rm codesandbox-client 2>/dev/null || true
    
    # Run the container
    echo "🚀 Starting container..."
    docker run -d -p 3000:80 --name codesandbox-client codesandbox-client
    
    echo "🎉 Deployment completed successfully!"
    echo ""
    echo "Access your application at: http://localhost:3000"
    echo ""
    echo "Container management:"
    echo "  Stop:    docker stop codesandbox-client"
    echo "  Start:   docker start codesandbox-client"
    echo "  Logs:    docker logs codesandbox-client"
else
    echo "❌ Docker build failed!"
    exit 1
fi