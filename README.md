# CodeSandbox Client - Deployment Ready

This is a minimal deployment package for the CodeSandbox Client application. It contains only the essential files needed to run the application in Docker.

## 🚀 Quick Start

```bash
# Deploy the application
./deploy.sh
```

The application will be available at: **http://localhost:3000**

## 📁 Structure

```
codesandbox-client/
├── www/                    # Pre-built application files (898MB)
├── docker/                 # Nginx configuration
├── Dockerfile.prebuild     # Lightweight Docker configuration
├── deploy.sh              # Deployment script
├── .dockerignore          # Docker build optimization
├── .env                   # Environment configuration
├── README.md              # This file
└── LICENSE                # License information
```

## 🐳 Docker Commands

```bash
# Build the image
docker build -f Dockerfile.prebuild -t codesandbox-client .

# Run the container
docker run -d -p 3000:80 --name codesandbox-client codesandbox-client

# Stop the container
docker stop codesandbox-client

# Start the container
docker start codesandbox-client

# View logs
docker logs codesandbox-client

# Remove the container
docker rm codesandbox-client
```

## 📋 Requirements

- **Docker** installed and running
- **898MB** of disk space for the pre-built files
- **Port 3000** available (or modify the port in deploy.sh)

## 🔧 Customization

### Change Port
Edit `deploy.sh` and change the port mapping:
```bash
docker run -d -p 8080:80 --name codesandbox-client codesandbox-client
```

### Nginx Configuration
Modify files in the `docker/nginx/` directory to customize server behavior.

## ✅ What's Included

- ✅ Pre-built CodeSandbox application
- ✅ Optimized Nginx configuration
- ✅ Health checks
- ✅ Proper file permissions
- ✅ Minimal Docker image (~50MB + app files)

## 🚀 Performance

- **Build Time**: ~30 seconds (copying pre-built files only)
- **Image Size**: ~950MB (898MB app + 50MB Nginx Alpine)
- **Memory Usage**: ~50MB (Nginx serving static files)
- **Startup Time**: ~2-3 seconds

## 📝 Notes

This deployment package assumes the application has already been built. The original source code and build tools have been removed to create a minimal deployment package.

For development or building from source, please use the full repository.