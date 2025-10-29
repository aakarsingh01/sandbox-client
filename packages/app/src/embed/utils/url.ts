// Local utility for URL parsing - replaces @codesandbox/common/lib/url
export function getSandboxOptions(url: string) {
  const urlParams = new URLSearchParams(new URL(url).search);
  
  return {
    currentModule: urlParams.get('module') || undefined,
    initialPath: urlParams.get('initialpath') || '/',
    isInProjectView: urlParams.get('view') === 'project',
    isPreviewScreen: urlParams.get('view') === 'preview',
    isEditorScreen: urlParams.get('view') === 'editor',
    previewWindow: urlParams.get('previewwindow') || 'browser',
    isSplitScreen: !urlParams.get('view') || urlParams.get('view') === 'split',
    autoResize: urlParams.get('autoresize') === '1' || urlParams.get('autoresize') === 'true',
    hideNavigation: urlParams.get('hidenavigation') === '1' || urlParams.get('hidenavigation') === 'true',
    fontSize: parseInt(urlParams.get('fontsize') || '14', 10),
    enableEslint: urlParams.get('eslint') !== '0' && urlParams.get('eslint') !== 'false',
    useCodeMirror: urlParams.get('codemirror') === '1' || urlParams.get('codemirror') === 'true',
    editorSize: parseInt(urlParams.get('editorsize') || '50', 10),
    highlightedLines: urlParams.get('highlights')?.split(',').map(Number) || [],
    forceRefresh: urlParams.get('forcerefresh') === '1' || urlParams.get('forcerefresh') === 'true',
    expandDevTools: urlParams.get('expanddevtools') === '1' || urlParams.get('expanddevtools') === 'true',
    hideDevTools: urlParams.get('hidedevtools') === '1' || urlParams.get('hidedevtools') === 'true',
    runOnClick: urlParams.get('runonclick') === '1' || urlParams.get('runonclick') === 'true',
    verticalMode: urlParams.get('verticalmode') === '1' || urlParams.get('verticalmode') === 'true',
    tabs: urlParams.get('tabs')?.split(',').map(Number) || undefined,
    theme: urlParams.get('theme') || 'dark',
  };
}