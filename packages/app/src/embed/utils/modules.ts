// Local utility for sandbox modules - replaces @codesandbox/common/lib/sandbox/modules
export interface Module {
  id: string;
  title: string;
  code: string;
  shortid: string;
  directoryShortid?: string;
  isEntry?: boolean;
  isBinary?: boolean;
}

export interface Directory {
  id: string;
  title: string;
  shortid: string;
  directoryShortid?: string;
}

export function findMainModule(sandbox: { modules: Module[] }): Module {
  const mainModule = sandbox.modules.find(m => m.isEntry);
  return mainModule || sandbox.modules[0];
}

export function findCurrentModule(
  modules: Module[],
  directories: Directory[],
  currentModulePath?: string,
  mainModule?: Module
): Module {
  if (!currentModulePath) {
    return mainModule || modules[0];
  }

  // Try to find by path
  const moduleByPath = modules.find(m => getModulePath(m, directories) === currentModulePath);
  if (moduleByPath) return moduleByPath;

  // Try to find by shortid
  const moduleByShortid = modules.find(m => m.shortid === currentModulePath);
  if (moduleByShortid) return moduleByShortid;

  // Fallback to main module
  return mainModule || modules[0];
}

export function getModulePath(module: Module, directories: Directory[]): string {
  const getPath = (dirShortid?: string, path = ''): string => {
    if (!dirShortid) return path;
    
    const directory = directories.find(d => d.shortid === dirShortid);
    if (!directory) return path;
    
    const newPath = directory.title + (path ? '/' + path : '');
    return getPath(directory.directoryShortid, newPath);
  };

  const dirPath = getPath(module.directoryShortid);
  return (dirPath ? '/' + dirPath : '') + '/' + module.title;
}