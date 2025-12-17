export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export type ExperienceEntry = {
  role: string;
  company: string;
  isCurrent?: boolean;
};

export type DictionaryContent = {
  header: {
    name: string;
    role: string;
    avatarAlt: string;
    socials: {
      twitter: string;
      github: string;
      linkedin: string;
      cv: string;
    };
  };
  home: {
    intro: string;
    experienceTitle: string;
    experiences: ExperienceEntry[];
    currentBadge: string;
    latestPostsTitle: string;
    viewAllPosts: string;
    contactTitle: string;
    contactDescription: string;
  };
  post: {
    tagLabel: string;
    readingTimeSuffix: string;
  };
  footer: {
    copyright: string;
  };
};

export const DEFAULT_LOCALE: Locale = "pt";

const dictionaries = {
  pt: {
    header: {
      name: "Ian Vaz Araujo",
      role: "Cientista de Dados e IA",
      avatarAlt: "Avatar de Ian Vaz Araujo",
      socials: {
        twitter: "Twitter",
        github: "Github",
        linkedin: "LinkedIn",
        cv: "CV",
      },
    },
    home: {
      intro:
        "Meu nome é Ian Araujo. Eu sou cientista de dados de profissão e desenvolvedor nas horas vagas. Por aqui, compartilho alguns textos sobre IA, dados, tecnologia, e outros interesses: finanças, investimentos e empreendedorismo!",
      experienceTitle: "Experiência",
      experiences: [
        { role: "Cientista de Dados", company: "Ágora Advocacy", isCurrent: true },
        { role: "Pesquisador", company: "FGV EBAPE" },
        {
          role: "Consultor",
          company: "Instituto Lima Barreto, Ministério da Educação, TRE-BA",
        },
      ],
      currentBadge: "ATUAL",
      latestPostsTitle: "Últimas publicações",
      viewAllPosts: "Ver todas publicações",
      contactTitle: "Contato",
      contactDescription:
        "Vamos trabalhar juntos! Você pode me mandar mensagem em qualquer rede social. 🚀",
    },
    post: {
      tagLabel: "Etiqueta",
      readingTimeSuffix: "minutos",
    },
    footer: {
      copyright: "© 2025 Ian Araujo",
    },
  },
  en: {
    header: {
      name: "Ian Vaz Araujo",
      role: "Data & AI Scientist",
      avatarAlt: "Avatar of Ian Vaz Araujo",
      socials: {
        twitter: "Twitter",
        github: "Github",
        linkedin: "LinkedIn",
        cv: "Resume",
      },
    },
    home: {
      intro:
        "My name is Ian Araujo. I am a data scientist by trade and a developer in my spare time. Here I share posts about AI, data, technology, and other interests: finance, investing, and entrepreneurship!",
      experienceTitle: "Experience",
      experiences: [
        { role: "Data Scientist", company: "Ágora Advocacy", isCurrent: true },
        { role: "Researcher", company: "FGV EBAPE" },
        { role: "Consultant", company: "Instituto Lima Barreto, Ministério da Educação, TRE-BA" },
      ],
      currentBadge: "CURRENT",
      latestPostsTitle: "Latest posts",
      viewAllPosts: "View all posts",
      contactTitle: "Contact",
      contactDescription:
        "Let's work together! You can message me on any social network. 🚀",
    },
    post: {
      tagLabel: "Tag",
      readingTimeSuffix: "minutes",
    },
    footer: {
      copyright: "© 2025 Ian Araujo",
    },
  },
} satisfies Record<Locale, DictionaryContent>;

export type Dictionary = (typeof dictionaries)[Locale];

export const getDictionary = (locale: Locale = DEFAULT_LOCALE): Dictionary =>
  dictionaries[locale];
