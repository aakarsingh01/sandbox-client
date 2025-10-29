#!/usr/bin/env node
/**
 * Simple test runner for Sandpack open-source features
 * Tests artifact export and anonymous mode functionality
 */

const http = require('http');
const path = require('path');
const fs = require('fs');

const TEST_PORT = 8081;
const BUNDLER_PORT = 8080;

// Simple static file server for tests
function createTestServer() {
  return http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ext = path.extname(filePath);
    const contentType = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.json': 'application/json'
    }[ext] || 'text/plain';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
}

async function runTests() {
  console.log('🧪 Starting Sandpack Open-Source Integration Tests');
  
  // Check if bundler is running
  try {
    const { default: fetch } = await import('node-fetch');
    await fetch(`http://localhost:${BUNDLER_PORT}`);
    console.log('✅ Bundler detected on port', BUNDLER_PORT);
  } catch (e) {
    console.log('⚠️  Bundler not detected on port', BUNDLER_PORT);
    console.log('   Make sure the Sandpack bundler is running:');
    console.log('   docker run -p 8080:80 ghcr.io/librechat-ai/codesandbox-client/bundler:latest');
    console.log('   or serve the www/ directory on port 8080');
    console.log('');
  }

  // Start test server
  const server = createTestServer();
  server.listen(TEST_PORT, () => {
    console.log(`🌐 Test server running at http://localhost:${TEST_PORT}`);
    console.log('');
    console.log('📋 Manual Test Steps:');
    console.log('1. Open the test page in your browser');
    console.log('2. Test Anonymous Mode - should work without tokens');
    console.log('3. Test Token Mode - configure a test token');
    console.log('4. Load Sandpack Test - should load iframe successfully');
    console.log('5. Check Artifact Export - should receive artifact-ready messages');
    console.log('');
    console.log('🔍 Expected Results:');
    console.log('- Anonymous mode: Sandpack loads and compiles using public npm');
    console.log('- Token mode: Tokens are stored and accessible');
    console.log('- Sandpack integration: Iframe loads without authentication errors');
    console.log('- Artifact export: Messages received with compiled module data');
    console.log('');
    console.log('Press Ctrl+C to stop the test server');
  });

  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('\\n🛑 Stopping test server...');
    server.close(() => {
      console.log('✅ Test server stopped');
      process.exit(0);
    });
  });
}

if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { createTestServer, runTests };