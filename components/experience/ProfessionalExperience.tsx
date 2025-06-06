// components/GalacticExperiences.tsx
'use client';

import { motion } from 'framer-motion';

interface Experience {
  id: number;
  year: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
  icon: string;
}

export default function GalacticExperiences() {
  // Dados de experiência (substitua com seus dados)
  const experiences: Experience[] = [
    {
      id: 1,
      year: '2024-Presente',
      company: 'GymX',
      role: 'Desenvolvedor Mobile',
      description: 'Liderança no desenvolvimento de um aplicativo fitness de musculação, contribui com a criação das interfaces e integração com a API',
      tech: ['React Native', 'Expo Router', 'Redux Toolkit', 'CSS', "TypeScript" , "RTK Query" , 'GitHub', 'Git'],
      icon: '🛸'
    },
    {
      id: 2,
      year: '2024-Presente',
      company: 'Freelancer',
      role: 'Desenvolvedor de Bot de Discord',
      description: 'Criação de um bot de Discord para streaming de música, com integração com YouTube, Spotify e Gemini AI para interação com usuários.',
      tech: ['Node.js', 'Discord.js', 'DiscordPlayer', 'Typescript', 'Youtube API', 'Spotify API', 'Gemini API' , 'zod', 'undici', 'axios' ,' Docker' , 'Git', 'GitHub'],
      icon: '🌌'
    },
    {
      id: 3,
      year: '2023-2024',
      company: 'Coffeyne(Youtube Channel)',
      role: 'Desenvolvedor de Bot de  Notificações',
      description: 'Desenvolvimento de um bot de Discord para notificações de vídeos do canal Coffeyne, com integração com YouTube e suporte a múltiplos canais.',
    
      tech: ['Node.js', 'Discord.js', 'WebHooks', 'TypeScript', "YouTube API", 'Api Integration', 'Automação de Notificações', 'Git', 'GitHub'],
      icon: '🚀'
    }
  ];  return (    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center mb-12 md:mb-16"
        >
          Experiencias Profissionais
        </motion.h2>

        <div className="relative grid gap-16 md:gap-32">
          {/* Linha do tempo gradiente */}
          <div className="absolute left-1/2 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 h-full top-0 -ml-px shadow-lg shadow-cyan-500/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center gap-8`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Card de experiência */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                
                <div className="relative bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 shadow-xl shadow-cyan-500/10 hover:shadow-purple-500/20 transition-all">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-500/10 rounded-xl backdrop-blur-sm flex items-center justify-center rotate-12 border border-purple-500/20">
                    <span className="text-3xl">{exp.icon}</span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {exp.company}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-purple-300 font-semibold">{exp.year}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-lg text-cyan-300">{exp.role}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-purple-500/10 rounded-lg text-cyan-300 border border-purple-500/20 hover:bg-cyan-500/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ano com linha conectora */}
              <div className="hidden lg:block w-1/2">
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {exp.year}
                  </div>
                  <div className="absolute w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-50 -translate-y-1/2 top-1/2 left-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}