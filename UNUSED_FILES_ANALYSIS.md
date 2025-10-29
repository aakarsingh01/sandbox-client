# Unused Files Analysis for Open-Source Sandpack Bundler

## Files Safe to Remove

### CI/CD Configuration Files
- `.circleci/config.yml` - CircleCI configuration (not needed for self-hosting)
- `.github/workflows/build-bundler.yml` - GitHub Actions workflow
- `.github/PULL_REQUEST_TEMPLATE.md` - PR template
- `.github/ISSUE_TEMPLATE/` - Issue templates directory
- `.github/FUNDING.yml` - GitHub funding configuration
- `.github/ISSUE_TEMPLATE/config.yml` - Issue template config
- `.github/ISSUE_TEMPLATE/BUG.md` - Bug report template
- `.github/ISSUE_TEMPLATE/FEATURE.md` - Feature request template

### Documentation Files (Optional - Keep if Useful)
- `SECURITY.md` - Security policy (can remove if not applicable)
- `CODE_OF_CONDUCT.md` - Code of conduct
- `CONTRIBUTING.md` - Contributing guidelines
- `catalog-info.yaml` - Backstage catalog info

### Development Configuration Files
- `.flowconfig` - Flow type checker configuration
- `.imgbotconfig` - Image optimization bot configuration
- `.eslintignore` - ESLint ignore rules (may want to keep)
- `testpr-script.js` - Test PR script
- `sandbox-performance-benchmark.js` - Performance benchmarking

### Test Files and Examples (Large - Safe to Remove)
- `standalone-packages/monaco-editor/test/` - Monaco editor tests
- `standalone-packages/vscode-textmate/test-cases/` - VSCode TextMate test cases
- `standalone-packages/monaco-editor/website/` - Monaco editor website/examples

### Unused Standalone Packages (Analysis Needed)
- `standalone-packages/sse-loading-screen/` - SSE loading screen (may not be needed)
- `standalone-packages/browser-jsdom/` - Browser JSDOM (check if used)
- `standalone-packages/vscode/` - VSCode package (check dependencies)
- `standalone-packages/vscode-extensions/` - VSCode extensions (check dependencies)

### Chrome Extension (Likely Unused for Bundler)
- `packages/chrome-extension/` - Chrome extension package

### Template Icons (Check Usage)
- `packages/template-icons/` - Template icons (may not be needed for headless bundler)

## Commands to Remove Unused Files

```bash
# Remove CI/CD files
rm -rf .circleci/
rm -rf .github/

# Remove development config files
rm .flowconfig
rm .imgbotconfig
rm testpr-script.js
rm sandbox-performance-benchmark.js
rm catalog-info.yaml

# Remove documentation (optional)
rm SECURITY.md
rm CODE_OF_CONDUCT.md
rm CONTRIBUTING.md

# Remove test files and examples
rm -rf standalone-packages/monaco-editor/test/
rm -rf standalone-packages/monaco-editor/website/
rm -rf standalone-packages/vscode-textmate/test-cases/

# Remove Chrome extension
rm -rf packages/chrome-extension/

# Remove SSE loading screen (if not needed)
rm -rf standalone-packages/sse-loading-screen/
```

## Files to Keep (Essential for Bundler)
- `packages/app/` - Main application
- `packages/sandpack-core/` - Core Sandpack functionality
- `packages/common/` - Common utilities
- `packages/sandbox-hooks/` - Sandbox hooks
- `packages/codesandbox-api/` - CodeSandbox API
- `packages/deps/` - Dependencies package
- `packages/executors/` - Code executors
- `packages/node-services/` - Node services
- `packages/vue3-*` - Vue 3 support
- `standalone-packages/codesandbox-browserfs/` - Browser filesystem
- `standalone-packages/monaco-*` - Monaco editor packages
- `standalone-packages/resolver/` - Module resolver

## Space Savings Estimate
Removing the identified files could save approximately:
- Test files: ~50-100MB
- Monaco editor examples/website: ~20-30MB
- CI/CD and documentation: ~5-10MB
- Chrome extension: ~5-10MB

Total estimated savings: ~80-150MB