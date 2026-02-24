export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  longDescription?: string;
  techStack?: string[];
  date?: string;
  lienBackend?: string;
  lienFrontend?: string;
  lienProd?: string;
}