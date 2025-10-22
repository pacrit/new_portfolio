"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traduções
const translations = {
  en: {
    // Header
    about: "About",
    skills: "Skills", 
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    contactMe: "Contact Me",
    
    // Hero Section
    heroTitle: "Hi, I'm Patrick W.",
    heroDescription: "A passionate Full Stack Developer specializing in React.js and Node.js. I love building clean, efficient, and user-friendly web applications.",
    heroQuote: "\"Just a ambitious, smart and very curious guy loving new tech's. Learning quickly and keeping update. Never forget semicolon. Sometimes works at first. And always giving the code clean.\"",
    viewMyWork: "View My Work",
    downloadResume: "Download Resume",
    
    // Skills Section
    skillsTitle: "My Skills",
    skillsDescription: "I've worked with a variety of technologies in the web development world. Here's a snapshot of my technical expertise:",
    
    // Projects Section
    projectsTitle: "My Projects",
    projectsDescription: "Here are some of the projects I've worked on. Each project represents different skills and challenges I've tackled.",
    
    // Project Items
    project1Title: "E-commerce Platform",
    project1Description: "A full-stack e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    project2Title: "Task Management App", 
    project2Description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    project3Title: "Weather Dashboard",
    project3Description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    seeMoreGithub: "See more on GitHub",
    
    // Experience Section
    experienceTitle: "Work Experience",
    experienceDescription: "My professional journey in the world of web development.",
    
    // Experience Items
    exp1Title: "Analist Developer III",
    exp1Description: "Lead the frontend development team in building responsive web applications. Implemented modern React patterns and optimized performance.",
    exp1Achievement1: "Contributes to the development of software that uses a facial recognition device to make elevator calls",
    exp1Achievement2: "I developed a complete and effective CRUD with responsiveness and fast loading",
    exp2Title: "Systems analyst", 
    exp2Description: "I was part of the N1 support, solving computer and printing problems for a health insurance company.",
    exp2Achievement1: "Frontline support, whether speaking to the receptionist or doctor, with agility in support",
    keyAchievements: "Key Achievements:",
    technologies: "Technologies:",
    
    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription: "Have a project in mind or want to discuss potential opportunities? Feel free to reach out!",
    
    // Footer
    allRightsReserved: "All rights reserved."
  },
  pt: {
    // Header
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos", 
    experience: "Experiência",
    contact: "Contato",
    contactMe: "Entre em Contato",
    
    // Hero Section
    heroTitle: "Olá, eu sou Patrick W.",
    heroDescription: "Um desenvolvedor Full Stack apaixonado especializado em React.js e Node.js. Eu amo construir aplicações web limpas, eficientes e amigáveis ao usuário.",
    heroQuote: "\"Apenas um cara ambicioso, inteligente e muito curioso que ama novas tecnologias. Aprendo rapidamente e me mantenho atualizado. Nunca esqueço o ponto e vírgula. Às vezes funciona na primeira. E sempre deixo o código limpo.\"",
    viewMyWork: "Ver Meu Trabalho",
    downloadResume: "Baixar Currículo",
    
    // Skills Section
    skillsTitle: "Minhas Habilidades",
    skillsDescription: "Trabalhei com uma variedade de tecnologias no mundo do desenvolvimento web. Aqui está um resumo da minha experiência técnica:",
    
    // Projects Section
    projectsTitle: "Meus Projetos",
    projectsDescription: "Aqui estão alguns dos projetos em que trabalhei. Cada projeto representa diferentes habilidades e desafios que enfrentei.",
    
    // Project Items
    project1Title: "Plataforma E-commerce",
    project1Description: "Uma plataforma e-commerce full-stack com listagem de produtos, funcionalidade de carrinho, autenticação de usuário e processamento de pagamentos.",
    project2Title: "App de Gerenciamento de Tarefas",
    project2Description: "Uma aplicação colaborativa de gerenciamento de tarefas com atualizações em tempo real, atribuição de tarefas e acompanhamento de progresso.",
    project3Title: "Dashboard do Tempo",
    project3Description: "Um dashboard do tempo que exibe as condições climáticas atuais e previsões para múltiplas localizações.",
    seeMoreGithub: "Ver mais no GitHub",
    
    // Experience Section
    experienceTitle: "Experiência de Trabalho",
    experienceDescription: "Minha jornada profissional no mundo do desenvolvimento web.",
    
    // Experience Items
    exp1Title: "Analista Desenvolvedor III",
    exp1Description: "Lidero a equipe de desenvolvimento frontend na construção de aplicações web responsivas. Implementei padrões modernos do React e otimizei performance.",
    exp1Achievement1: "Contribui para o desenvolvimento de software que usa dispositivo de reconhecimento facial para chamadas de elevador",
    exp1Achievement2: "Desenvolvi um CRUD completo e eficaz com responsividade e carregamento rápido",
    exp2Title: "Analista de sistemas",
    exp2Description: "Fiz parte do suporte N1, resolvendo problemas de computador e impressão para uma empresa de plano de saúde.",
    exp2Achievement1: "Suporte de primeira linha, seja falando com a recepcionista ou médico, com agilidade no atendimento",
    keyAchievements: "Principais Conquistas:",
    technologies: "Tecnologias:",
    
    // Contact Section
    contactTitle: "Entre em Contato",
    contactDescription: "Tem um projeto em mente ou quer discutir oportunidades potenciais? Sinta-se à vontade para entrar em contato!",
    
    // Footer
    allRightsReserved: "Todos os direitos reservados."
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  // Carregar idioma do localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Salvar idioma no localStorage
  useEffect(() => {
    localStorage.setItem('preferred-language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}