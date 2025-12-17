import { Locale, defaultLocale, locales } from "./locales";

export type ExperienceItem = {
  title: string;
  subtitle: string;
  badge?: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    name: string;
    role: string;
  };
  languageSwitcher: {
    label: string;
  };
  home: {
    intro: string;
    experienceTitle: string;
    experienceItems: ExperienceItem[];
    latestPostsTitle: string;
    viewAll: string;
    contactTitle: string;
    contactDescription: string;
  };
  blog: {
    readingTimeLabel: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    metadata: {
      title: "Ian Araujo",
      description: "Cientista de Dados e IA",
    },
    header: {
      name: "Ian Vaz Araujo",
      role: "Cientista de Dados e IA",
    },
    languageSwitcher: {
      label: "Idioma",
    },
    home: {
      intro:
        "Meu nome é Ian Araujo. Eu sou cientista de dados de profissão e desenvolvedor nas horas vagas. Por aqui, compartilho alguns textos sobre IA, dados, tecnologia, e outros interesses: finanças, investimentos e empreendedorismo!",
      experienceTitle: "Experiência",
      experienceItems: [
        {
          title: "Cientista de Dados",
          subtitle: "Ágora Advocacy",
          badge: "ATUAL",
        },
        {
          title: "Pesquisador",
          subtitle: "FGV EBAPE",
        },
        {
          title: "Consultor",
          subtitle: "Instituto Lima Barreto, Ministério da Educação, TRE-BA",
        },
      ],
      latestPostsTitle: "Últimas publicações",
      viewAll: "Ver todas publicações",
      contactTitle: "Contato",
      contactDescription:
        "Vamos trabalhar juntos! Você pode me mandar mensagem em qualquer rede social. 🚀",
    },
    blog: {
      readingTimeLabel: "minutos",
    },
  },
  en: {
    metadata: {
      title: "Ian Araujo",
      description: "Data and AI Scientist",
    },
    header: {
      name: "Ian Vaz Araujo",
      role: "Data and AI Scientist",
    },
    languageSwitcher: {
      label: "Language",
    },
    home: {
      intro:
        "My name is Ian Araujo. I am a data scientist by trade and a developer in my spare time. Here I share posts about AI, data, technology, and other interests like finance, investing, and entrepreneurship!",
      experienceTitle: "Experience",
      experienceItems: [
        {
          title: "Data Scientist",
          subtitle: "Ágora Advocacy",
          badge: "CURRENT",
        },
        {
          title: "Researcher",
          subtitle: "FGV EBAPE",
        },
        {
          title: "Consultant",
          subtitle: "Instituto Lima Barreto, Ministério da Educação, TRE-BA",
        },
      ],
      latestPostsTitle: "Latest posts",
      viewAll: "See all posts",
      contactTitle: "Contact",
      contactDescription:
        "Let's work together! You can message me on any social network. 🚀",
    },
    blog: {
      readingTimeLabel: "minutes",
    },
  },
};

export const getDictionary = (lang: Locale): Dictionary => {
  const normalizedLang = locales.includes(lang) ? lang : defaultLocale;
  return dictionaries[normalizedLang];
};
