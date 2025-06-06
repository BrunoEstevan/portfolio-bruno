
export interface ProjectData {
  id: string; // Ou number
  src: string; // Imagem para o card
  title: string;
  repoLink: string;
  description: string; // Descrição detalhada para o modal
  gifSrc?: string; // Caminho para o GIF de demonstração para o modal
  technologies: string[]; // Array de tecnologias usadas
  vidsrc?: string; // Caminho para o vídeo de demonstração (opcional)
}