import { Lang } from "./config";

const dictionaries = {
  pt: {
    meta: {
      title: "Desenvolvimento de Software, Dados e IA",
      description: "Ian Vaz Araujo: desenvolvimento de software, análise de dados e IA aplicada. Conheça projetos, estudos técnicos e ideias para automatizar processos.",
      projectsDescription: "Projetos de Ian Vaz Araujo em engenharia de dados, machine learning e modelos de linguagem, com código e decisões técnicas.",
      blogDescription: "Textos de Ian Vaz Araujo sobre dados, inteligência artificial, tecnologia e investimentos.",
    },
    home: {
      headline: "Software, dados e IA para problemas reais.",
      bio: "Sou Ian Vaz Araujo, desenvolvedor e profissional de dados. Meu foco é transformar processos manuais e informações dispersas em ferramentas úteis, análises claras e aplicações de inteligência artificial. Atualmente, trabalho na Turim MFO.",
      intro: "Aqui compartilho projetos e decisões técnicas sobre software, dados e IA, além de textos sobre finanças e tecnologia.",
      focus: "Áreas de interesse",
      areas: [
        { title: "Software e automação", text: "Ferramentas em Python, integração de sistemas e automação de rotinas para reduzir trabalho manual." },
        { title: "Dados e decisões", text: "Pipelines de dados, análises e modelos de machine learning que conectam informações a perguntas de negócio." },
        { title: "IA aplicada", text: "Modelos de linguagem e exploração de agentes de IA para consulta a documentos e apoio a fluxos de trabalho." },
      ],
      viewProjects: "Conheça os projetos",
      talk: "Vamos conversar",
      featuredProjects: "Projetos selecionados",
      caseStudy: "Ver estudo técnico",
      portugueseStudy: "Estudo completo em português",
      experience: "Experiência",
      latestProjects: "Projetos",
      latestEssays: "Blog",
      contact: "Contato",
      contactText: "Tem um processo que poderia funcionar melhor, uma questão de dados ou uma ideia de aplicação? Conte o contexto pelo LinkedIn. Gosto de trocar ideias sobre desafios de software, dados e IA.",
      contactAction: "Converse comigo no LinkedIn",
      current: "ATUAL",
    },
    jobs: [
      { title: "Analista de Dados", company: "Turim MFO" },
      { title: "Analista", company: "Ágora Advocacy" },
      { title: "Pesquisador", company: "FGV EBAPE" },
      { title: "Consultor", company: "Instituto Lima Barreto, Ministério da Educação, TRE-BA" },
    ],
    blog: {
      minutes: "minutos",
      empty: "Ainda não há textos neste idioma.",
      emptyProjects: "Ainda não há projetos neste idioma.",
    },
    nav: { label: "Navegação principal", language: "Idioma", home: "Início" },
  },
  en: {
    meta: {
      title: "Software Development, Data & AI",
      description: "Ian Vaz Araujo: software development, data analysis and applied AI. Explore projects, technical writing and ideas for automating workflows.",
      projectsDescription: "Data engineering, machine learning and language model projects by Ian Vaz Araujo, with code and technical decisions.",
      blogDescription: "Writing by Ian Vaz Araujo on data, artificial intelligence, technology and investing.",
    },
    home: {
      headline: "Software, data and AI for real problems.",
      bio: "I'm Ian Vaz Araujo, a developer and data professional. My focus is turning manual processes and scattered information into useful tools, clear analysis and practical AI applications. I currently work at Turim MFO.",
      intro: "Here I share projects and technical decisions across software, data and AI, alongside writing on finance and technology.",
      focus: "Areas of interest",
      areas: [
        { title: "Software & automation", text: "Python tools, system integrations and workflow automation to reduce manual work." },
        { title: "Data & decisions", text: "Data pipelines, analysis and machine learning models that connect information to business questions." },
        { title: "Applied AI", text: "Language models and exploration of AI agents for document search and workflow support." },
      ],
      viewProjects: "Explore projects",
      talk: "Let's talk",
      featuredProjects: "Selected projects",
      caseStudy: "Read technical study",
      portugueseStudy: "Full study in Portuguese",
      experience: "Experience",
      latestProjects: "Projects",
      latestEssays: "Essays",
      contact: "Contact",
      contactText: "Have a process that could work better, a data question or an application idea? Share the context on LinkedIn. I enjoy exchanging ideas about software, data and AI challenges.",
      contactAction: "Connect with me on LinkedIn",
      current: "CURRENT",
    },
    jobs: [
      { title: "Data Analyst", company: "Turim MFO" },
      { title: "Analyst", company: "Ágora Advocacy" },
      { title: "Researcher", company: "FGV EBAPE" },
      { title: "Consultant", company: "Instituto Lima Barreto, Ministry of Education, TRE-BA" },
    ],
    blog: {
      minutes: "minutes",
      empty: "No essays are available in this language yet.",
      emptyProjects: "No projects are available in this language yet.",
    },
    nav: { label: "Main navigation", language: "Language", home: "Home" },
  },
} as const;

export function getDictionary(lang: Lang) {
  return dictionaries[lang];
}
