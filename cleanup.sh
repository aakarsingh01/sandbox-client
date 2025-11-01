#!/bin/bash

# ===============================================
# CodeSandbox Client - Repository Cleanup Script
# ===============================================
# This script removes all non-essential files for deployment

set -e

echo "🧹 Cleaning up repository for minimal deployment..."

# Create backup of current state
echo "📦 Creating backup..."
git add . 2>/dev/null || true
git commit -m "Backup before cleanup" 2>/dev/null || true

# Remove development and build files
echo "🗑️  Removing development files..."

# Remove source code directories
rm -rf packages/ 2>/dev/null || true
rm -rf standalone-packages/ 2>/dev/null || true
rm -rf integration-tests/ 2>/dev/null || true
rm -rf contributor-docs/ 2>/dev/null || true
rm -rf node_modules/ 2>/dev/null || true
rm -rf .husky/ 2>/dev/null || true
rm -rf .vscode/ 2>/dev/null || true
rm -rf .codesandbox/ 2>/dev/null || true
rm -rf .devcontainer/ 2>/dev/null || true

# Remove build configuration files
rm -f package.json 2>/dev/null || true
rm -f yarn.lock 2>/dev/null || true
rm -f lerna.json 2>/dev/null || true
rm -f babel.config.js 2>/dev/null || true
rm -f Gulpfile.js 2>/dev/null || true
rm -f .yarnrc 2>/dev/null || true
rm -f .yarnclean* 2>/dev/null || true
rm -f .nvmrc 2>/dev/null || true

# Remove linting and formatting files
rm -f .eslintrc 2>/dev/null || true
rm -f .eslintignore 2>/dev/null || true
rm -f .prettierrc.js 2>/dev/null || true
rm -f .prettierignore 2>/dev/null || true

# Remove other config files
rm -f .graphqlconfig.yml 2>/dev/null || true
rm -f .sentryclirc 2>/dev/null || true
rm -f .all-contributorsrc 2>/dev/null || true
rm -f .gitattributes 2>/dev/null || true
rm -f .editorconfig 2>/dev/null || true

# Remove unused Docker files
rm -f Dockerfile 2>/dev/null || true
rm -f Dockerfile.comprehensive 2>/dev/null || true
rm -f Dockerfile.optimized 2>/dev/null || true
rm -f Dockerfile.simple 2>/dev/null || true
rm -f Dockerfile.bundler 2>/dev/null || true
rm -f docker-compose*.yml 2>/dev/null || true
rm -f build-and-deploy.sh 2>/dev/null || true

# Remove documentation files
rm -f CLEANUP_SUMMARY.md 2>/dev/null || true
rm -f TRANSFORMATION_COMPLETE.md 2>/dev/null || true
rm -f UNUSED_FILES_ANALYSIS.md 2>/dev/null || true

# Update .dockerignore for minimal deployment
cp .dockerignore.minimal .dockerignore 2>/dev/null || true
rm -f .dockerignore.minimal 2>/dev/null || true

# Replace README with deployment README
mv README.deployment.md README.md 2>/dev/null || true

echo "✅ Cleanup completed!"
echo ""
echo "📋 Remaining files:"
ls -la
echo ""
echo "📁 Directory size:"
du -sh .
echo ""
echo "🎯 Essential files kept:"
echo "  - www/                (Pre-built application)"
echo "  - docker/             (Nginx configuration)"  
echo "  - Dockerfile.prebuild (Docker configuration)"
echo "  - deploy.sh           (Deployment script)"
echo "  - README.md           (Documentation)"
echo "  - LICENSE             (License)"
echo "  - .env                (Environment)"
echo "  - .gitignore          (Git configuration)"
echo "  - .dockerignore       (Docker configuration)"
echo ""
echo "🚀 Ready for deployment! Run: ./deploy.sh"