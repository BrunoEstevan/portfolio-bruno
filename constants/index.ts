import { ProjectData } from "@/components/projects/types";

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML 5 & CSS 3",
    Image: "/skills/hard/frontend/html-css.png",
    width: 130,
    height: 130,
  },
  {
    skill_name: "Java Script",
    Image: "/skills/hard/frontend/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Type Script",
    Image: "/skills/hard/frontend/ts.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Bootstrap",
    Image: "/skills/hard/frontend/bootstrap.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    Image: "/skills/hard/frontend/tailwind.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React",
    Image: "/skills/hard/frontend/react.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "ionic",
    Image: "/skills/hard/frontend/ionicofc.png",
    width: 45,
    height: 45,
  },
  {
    skill_name: "Styled Components",
    Image: "/skills/hard/frontend/styled-components.png",
   
    width: 70,
    height: 70,
  },
  {skill_name: "React Native",
    Image: "/skills/hard/frontend/react-native.png",
   
    width: 70,
    height: 70,
  } ,
    
    {
    skill_name: "Sass",
    Image: "/skills/hard/frontend/sass.png",
    width: 80,
    height: 80,
    }
];

export const BACKEND_SKILL = [
  {
    skill_name: "Discord JS",
    Image: "/skills/hard/backend/discordjs.png",

    width: 90,
    height: 90,
  },
  {
    skill_name: "Nest JS",
    Image: "/skills/hard/backend/nest.png",
    
    width: 90,
    height: 90,
  },
  {
    skill_name: "Node JS",
    Image: "/skills/hard/backend/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next JS",
    Image: "/skills/hard/backend/next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express JS",
    Image: "/skills/hard/backend/express.png",
    width: 80,
    height: 80,
  },
  {
     
    skill_name: "Fastify",
    Image: "/skills/hard/backend/fastify.png",
    width: 80,
    height: 80,
  },
  
];

export const DATABASE_SKILL = [
  {
    skill_name: "Oracle",
    Image: "/skills/hard/database/oracle.png",
    width: 110,
    height: 110,
  },
  {
    skill_name: "Postgre SQL",
    Image: "/skills/hard/database/postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Mongo DB",
    Image: "/skills/hard/database/mongodb.png",
 
    width: 50,
    height: 50,
  },
  {
    skill_name: "Prisma",
    Image: "/skills/hard/database/prisma.webp",
    width: 60,
    height: 60,

  },
  {
    skill_name: "My SQL",
    Image: "/skills/hard/database/mysql.png",
    width: 70,
    height: 70,
  }
];

export const TEST_SKILL = [
  {
    skill_name: "Vitest",
    Image: "/skills/hard/test/vitest.png",
    
    width: 110,
    height: 110,
  },
  {
    skill_name: "Jest",
    Image: "/skills/hard/test/jest.png",
    width: 70,
    height: 70,
  },
];

export const ARCHITECTURE_SKILL = [
  {
    skill_name: "Linux",
    Image: "/skills/hard/architecture/linux.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Kali Linux",
    Image: "/skills/hard/architecture/kali-linux.png",
    width: 100,
    height: 100,
  },
];

export const PROJECTS: ProjectData[] = [ // Use o tipo aqui
  {
    id: "movies-project-01", // ID único
    src: "/projects/Movies.png",
    title: "Movies Project",
    description: "MoviesProject é uma aplicação web desenvolvida com Next.js e TypeScript para explorar e descobrir filmes. Utilize a busca para encontrar seus títulos favoritos, filtre por gênero através da barra lateral interativa e veja detalhes como sinopse e avaliação. O projeto consome a API do TMDb para fornecer informações atualizadas e conta com um design responsivo e um seletor de tema claro/escuro.", // Descrição preenchida
    repoLink: "https://github.com/BrunoEstevan/moviesproject",
    gifSrc: "/gif/gifMoviesProject.gif", // Caminho para o seu GIF de demonstração
    technologies: ["React", "APITMDb", "Next", "StyledComponents", "Axios", "Jest", "React-Loading", "dotenv"] , // Tecnologias usadas
  },
  {
    id: "petpage-project-02",
    src: "/projects/PetPage.png",
    title: "Landing Page Veterinaria",
    description: "Landing page responsiva para uma clínica veterinária, desenvolvida com foco em design moderno e experiência do usuário. Apresenta informações sobre serviços, equipe e contato.", // Descrição preenchida
    repoLink: "https://github.com/BrunoEstevan/petpage",
    gifSrc: "/gif/gifLandingPage.gif", // Caminho para o seu GIF
    technologies: [ "TypeScript", "Responsividade", "Next" ,"React", "Sass", "Phosphor-icons", "RadixUI" ], // Tecnologias
  },  {
    id: "musicbybruno-project-03",
    src: "/projects/cristiano-ronaldo-.webp",
    title: "MusicByBruno",
    description: "O MusicByBruno é um bot para Discord desenvolvido em TypeScript e Node.js, utilizando Discord.js e hospedado na Discloud. Sua arquitetura modular organiza o código em comandos, eventos e Responders customizados (que usam radix3 para rotear interações de botões/menus). O bot toca músicas, gerencia filas e possui uma IA (Gemini) que responde como Cristiano Ronaldo.", // Descrição preenchida

// Descrição preenchida
    repoLink: "https://github.com/BrunoEstevan/musicbot",
    vidsrc: "/videos/videoDiscordBot.mp4", // Caminho para o vídeo de demonstração
    technologies: [ "TypeScript", "Node.js", "Discord.js", 
  "@magicyan/discord", "discord-player", "discord-player-youtubei", 
  "@discord-player/extractor", "ffmpeg-static", "Google Gemini API", 
  "@google/generative-ai", "axios", "undici(proxy)", "Zod",  "ESLint", 
  "Consola", "Chalk", "fast-glob", "radix3", 
  "Discloud", "Docker",  ".env", ], // Tecnologias
  },
  // ... adicione/modifique os outros projetos da mesma forma
];

// ... resto das suas constantes ...

export const NAV_LINKS = [
  { href: "#about-me", label: "Sobre", delay: 0.1 },
  { href: "#skills", label: "Competencias", delay: 0.2 },
  { href: "#projects", label: "Projetos", delay: 0.3 },
  { href: "#experience", label: "Experiencia", delay: 0.5 },
  { href: "#achievements", label: "Certificados", delay: 0.6 },
  { href: "#contact-me", label: "Contato", delay: 0.7 },

];

export const FOOTER_LINKS = [];
