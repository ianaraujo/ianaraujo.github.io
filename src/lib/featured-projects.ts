import { Lang } from "@/i18n/config";

// Public portfolio studies. These are not client engagements or employer case studies.
const projects = {
  pt: [
    { slug: "pipeline-ans-databricks", title: "De dados abertos a indicadores de saúde", description: "Pipeline com Databricks, Spark e AWS para organizar dados da ANS e alimentar análises no Metabase.", tools: "Python · Spark · AWS · SQL" },
    { slug: "bert-sentiment-analysis", title: "Modelos de linguagem para textos financeiros", description: "Adaptação de modelos BERT para análise de sentimento em cartas de gestoras, com metodologia e avaliação documentadas.", tools: "Python · NLP · Transformers · PEFT" },
    { slug: "credit-card-fraud", title: "Machine learning para detecção de fraudes", description: "Estudo com dados públicos sobre classificação de transações e o equilíbrio entre detectar fraudes e gerar falsos positivos.", tools: "Python · Machine Learning · Avaliação de modelos" },
  ],
  en: [
    { slug: "pipeline-ans-databricks", title: "From open data to healthcare indicators", description: "A Databricks, Spark and AWS pipeline that organizes ANS public data and supports analysis in Metabase.", tools: "Python · Spark · AWS · SQL" },
    { slug: "bert-sentiment-analysis", title: "Language models for financial text", description: "Adapting BERT models for sentiment analysis in asset manager letters, with documented methodology and evaluation.", tools: "Python · NLP · Transformers · PEFT" },
    { slug: "credit-card-fraud", title: "Machine learning for fraud detection", description: "A public-data study of transaction classification and the trade-off between detecting fraud and raising false alarms.", tools: "Python · Machine Learning · Model evaluation" },
  ],
} as const;

export function getFeaturedProjects(lang: Lang) {
  return projects[lang];
}
