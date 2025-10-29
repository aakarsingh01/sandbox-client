// Local utility for template definitions - replaces @codesandbox/common/lib/templates
export interface TemplateDefinition {
  name: string;
  color: string;
  backgroundColor?: string;
  popular?: boolean;
  showOnHomePage?: boolean;
  main?: boolean;
  staticDeployment?: boolean;
  isServer?: boolean;
  isNode?: boolean;
}

// Standard template definitions for common frameworks
const templateDefinitions: { [key: string]: TemplateDefinition } = {
  'create-react-app': {
    name: 'React',
    color: '#61DAFB',
    backgroundColor: '#21232A',
    popular: true,
    showOnHomePage: true,
    main: true,
  },
  'create-react-app-typescript': {
    name: 'React TypeScript',
    color: '#61DAFB',
    backgroundColor: '#21232A',
    popular: true,
    showOnHomePage: true,
  },
  vue: {
    name: 'Vue',
    color: '#4FC08D',
    backgroundColor: '#2F3B26',
    popular: true,
    showOnHomePage: true,
  },
  'vue-cli': {
    name: 'Vue CLI',
    color: '#4FC08D',
    backgroundColor: '#2F3B26',
    popular: true,
  },
  angular: {
    name: 'Angular',
    color: '#DD0031',
    backgroundColor: '#2B2D33',
    popular: true,
  },
  'vanilla-ts': {
    name: 'Vanilla TypeScript',
    color: '#3178C6',
    backgroundColor: '#FFFFFF',
  },
  vanilla: {
    name: 'Vanilla',
    color: '#F7DF1E',
    backgroundColor: '#2B2D33',
    main: true,
  },
  'static': {
    name: 'Static',
    color: '#696969',
    backgroundColor: '#FFFFFF',
    staticDeployment: true,
  },
  node: {
    name: 'Node.js',
    color: '#8CC84B',
    backgroundColor: '#2D3748',
    isServer: true,
    isNode: true,
  },
  // Default fallback
  default: {
    name: 'Unknown',
    color: '#6C6C6C',
    backgroundColor: '#2B2D33',
  },
};

export default function getTemplateDefinition(template: string): TemplateDefinition {
  return templateDefinitions[template] || templateDefinitions.default;
}