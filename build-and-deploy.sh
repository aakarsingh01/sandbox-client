#!/bin/bash

# ===============================================
# CodeSandbox Client - Local Build & Docker Deploy
# ===============================================
# This script builds the app locally then creates a lightweight Docker image

set -e  # Exit on any error

echo "🚀 Starting CodeSandbox Client build process..."

# Step 1: Build the application locally
echo "📦 Building application locally..."
yarn install
yarn build:deps
yarn build:sandpack  
yarn build:prod

# Check if build was successful
if [ ! -d "www" ]; then
    echo "❌ Build failed - www directory not found"
    exit 1
fi

echo "✅ Local build completed successfully!"

# Step 2: Create Docker image with pre-built files
echo "🐳 Creating Docker image..."
docker build -f Dockerfile.prebuild -t codesandbox-client .

echo "🎉 Docker image 'codesandbox-client' created successfully!"
echo ""
echo "To run the container:"
echo "  docker run -p 3000:80 codesandbox-client"
echo ""
echo "To access the app:"
echo "  http://localhost:3000"