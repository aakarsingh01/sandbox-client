// Local types - replaces @codesandbox/common/lib/types
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

export interface Sandbox {
  id: string;
  title?: string;
  description?: string;
  template: string;
  modules: Module[];
  directories: Directory[];
  entry?: string;
  npmDependencies?: { [key: string]: string };
  userLiked?: boolean;
  likeCount?: number;
}