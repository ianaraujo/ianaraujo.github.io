import { Lang } from "./config";

const dictionaries = {
  pt: {
    meta: {
      description: "Cientista de Dados e IA",
    },
    home: {
      bio: "Meu nome é Ian Vaz Araujo. Eu sou cientista de dados de profissão e desenvolvedor nas horas vagas. Por aqui, compartilho alguns textos sobre IA, dados, tecnologia, e outros interesses: finanças, investimentos e empreendedorismo!",
      experience: "Experiência",
      latestPosts: "Últimas publicações",
      contact: "Contato",
      contactText: "Vamos trabalhar juntos! Você pode me mandar mensagem em qualquer rede social.",
      viewAll: "Ver todas publicações",
      current: "ATUAL",
    },
    jobs: [
      { title: "Analista de Dados", company: "Turim MFO" },
      { title: "Analista de Dados", company: "Ágora Advocacy" },
      { title: "Pesquisador", company: "FGV EBAPE" },
      { title: "Consultor", company: "Instituto Lima Barreto, Ministério da Educação, TRE-BA" },
    ],
    blog: {
      minutes: "minutos",
    },
  },
  en: {
    meta: {
      description: "Data Scientist and AI",
    },
    home: {
      bio: "My name is Ian Vaz Araujo. I'm a data scientist by trade and a developer in my spare time. Here, I share writings about AI, data, technology, and other interests: finance, investing, and entrepreneurship!",
      experience: "Experience",
      latestPosts: "Latest posts",
      contact: "Contact",
      contactText: "Let's work together! You can message me on any social network.",
      viewAll: "View all posts",
      current: "CURRENT",
    },
    jobs: [
      { title: "Data Analyst", company: "Turim MFO" },
      { title: "Data Analyst", company: "Ágora Advocacy" },
      { title: "Researcher", company: "FGV EBAPE" },
      { title: "Consultant", company: "Instituto Lima Barreto, Ministry of Education, TRE-BA" },
    ],
    blog: {
      minutes: "minutes",
    },
  },
} as const;

export function getDictionary(lang: Lang) {
  return dictionaries[lang];
}
