export interface Social {
  name: string;
  url: string;
}

export interface About {
  title: string;
  description: string;
}

export interface Workflow {
  title: string;
  description: string;
}

export interface TechStack {
  title: string;
  badges: string[];
}

export interface CurrentlyExploring {
  title: string;
  description: string;
}

export interface HomeData {
  name: string;
  title: string;
  socials: Social[];
  about: About;
  workflow: Workflow;
  techStack: TechStack;
  currentlyExploring: CurrentlyExploring;
  footer: string;
}

export interface ArchRiceImage {
  src: string;
  alt: string;
}

export interface ArchRiceDetails {
  title: string;
  description: string;
}

export interface ArchRiceData {
  image: ArchRiceImage;
  details: ArchRiceDetails;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  link: string;
}

export interface HonoCode {
  title: string;
  language: string;
  snippet: string;
}

export interface HonoSection {
  title: string;
  content?: string;
  list?: string[];
  code?: HonoCode[];
}

export interface HonoData {
  title: string;
  subtitle: string;
  sections: HonoSection[];
}

export interface JupyterSection {
  title: string;
  content?: string;
  list?: string[];
  footer?: string;
}

export interface JupyterData {
  title: string;
  sections: JupyterSection[];
  banner: string;
}

export interface NeovimCode {
  language: string;
  snippet: string;
}

export interface NeovimSection {
  title: string;
  content?: string;
  list?: string[];
  code?: NeovimCode;
}

export interface NeovimData {
  title: string;
  subtitle: string;
  sections: NeovimSection[];
}

export interface NvimImage {
  src: string;
  alt: string;
}

export interface NvimDetails {
  title: string;
  description: string;
}

export interface NvimData {
  image: NvimImage;
  details: NvimDetails;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  date: string;
  link: string;
}

export interface ProjectData {
  projects: Project[];
  footer: string;
}

export interface TerminalImage {
  src: string;
  alt: string;
}

export interface TerminalDetails {
  title: string;
  description: string;
}

export interface TerminalData {
  image: TerminalImage;
  details: TerminalDetails;
}

export interface TodoCliCode {
  language: string;
  snippet: string;
}

export interface TodoCliSection {
  title: string;
  content?: string;
  list?: string[];
  footer?: string;
  code?: TodoCliCode;
}

export interface TodoCliData {
  title: string;
  sections: TodoCliSection[];
  banner: string;
}

export interface WorkflowImage {
  src: string;
  alt: string;
  link: string;
}

export interface WorkflowSection {
  title: string;
  content?: string;
  list?: string[];
}

export interface WorkflowData {
  images: WorkflowImage[];
  sections: WorkflowSection[];
}

export interface SiteData {
  home: HomeData;
  "arch-rice": ArchRiceData;
  blog: BlogPost[];
  hono: HonoData;
  jupyter?: JupyterData;
  neovim: NeovimData;
  nvim1: NvimData;
  nvim2: NvimData;
  project: ProjectData;
  terminal: TerminalData;
  "todo-cli": TodoCliData;
  workflow: WorkflowData;
}
