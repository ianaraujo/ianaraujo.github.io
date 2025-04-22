---
title: "Fine-tuning de modelos de linguagem para previsão do sentimento no Mercado Financeiro"
description: "Aprenda como usar modelos de linguagem para prever o sentimento do mercado financeiro através de relatórios mensais ou trimestrais de gestores de recursos."
image: "/posts/credit-card-fraud/underbagging.png"
date: "20/04/2025"
tag: "Ciência de Dados"
---

Nos mercados e na vida, grande parte das decisões ditas racionais são motivadas, na verdade, por fatores psicológicos e comportamentais ocultos. Reconhecer o efeito das emoções sob a tomada de decisão é um fator crucial, que separa bons investidores de investidores excelentes.

Existe um campo de estudo chamado "Finanças Comportamentais" que investiga como fatores psicológicos e comportamentais afetam as decisões financeiras. Esse campo é uma interseção entre finanças, psicologia e economia, e busca entender como os investidores tomam decisões e como essas decisões afetam os mercados financeiros.

Apesar no mercado financeiro global estar cada vez mais dominado por algoritmos e estratégia sistemáticas de investimento (sem intervenção humana), ainda podemos observar a forte presença dos chamados **vieses comportamentais**.

Esses vieses são padrões de comportamento que podem levar os investidores a tomar decisões irracionais ou subótimas. Alguns exemplos de vieses comportamentais incluem:

- **Viés de confirmação**: A tendência de buscar ou interpretar informações de maneira que confirme crenças ou hipóteses pré-existentes.

- **Efeito manada**: A tendência de seguir o comportamento de um grupo, mesmo que isso não faça sentido do ponto de vista racional, causando a formação de bolhas ou períodos de pessimismo.

- **Ancoragem**: A tendência de se fixar em informações iniciais ao tomar decisões, mesmo que essas informações sejam enganosas ou não sejam mais relevantes.

- **Retrospetiva**: A tendência de ver eventos passados como mais previsíveis do que realmente eram, levando a uma falsa sensação de segurança ou confiança.

- **Aversão à perda**: A tendência de sentir mais dor com perdas do que prazer com ganhos equivalentes, levando a decisões conservadoras ou avessas ao risco.

Embora esses vieses seja mais comuns entre investidores individuais, eles também podem afetar investidores institucionais e profissionais. Além disso, os mercados financeiros são influenciados por uma série de fatores externos, como notícias, eventos econômicos e mudanças políticas, que criam um ruído capaz amplificar esses vieses.

Por isso, neste artigo, vamos explorar como podemos usar modelos de linguagem para prever o sentimento do mercado financeiro, através de relatórios mensais ou trimestrais de gestores de recursos.

Essas cartas são uma fonte rica de informações sobre a perspectiva das empresas e podem fornecer insights valiosos sobre o sentimento do mercado.

Nesse artigo, vamos abordar os seguintes tópicos:

- O que são modelos de linguagem, *transformers* e como podem ser usados para prever o sentimento do mercado financeiro.

- Transfer learning e fine-tuning de modelos de linguagem para adaptar modelos de linguagem a domínios específicos, como investimentos e finanças.

- Como a técnica de PEFT (Parameter-Efficient Fine-Tuning) pode ser aplicada para treinar modelos de linguagem em tarefas específicas, como classificação de texto e previsão de sentimento.

- Extração de dados de páginas web e PDFs, infraestrura em nuvem e conteiners.

Se você estiver interessado em ver o código completo, ele está disponível no meu [GitHub](https://github.com/ianaraujo/llm-asset-sentiment).

### Metodologia

Existem diversas formas de medir o sentimento do mercado financeiro. Uma das formas mais comuns é através de indicadores quantitativos, que são métricas numéricas que tentam capturar o sentimento do mercado.

Um termômetro quantitativo muito conhecido é ["Fear & Greed Index"](https://edition.cnn.com/markets/fear-and-greed) da CNN, que mede o sentimento do investidores americanos e varia entre 0 (medo) e 100 (ganância).

O índice é composto por sete indicadores, que incluem métricas de volatilidade, médias móveis, volume de ações em alta e baixa, opções de compra e venda, e o número de ações atingindo máximas e mínimas.

No dia que estou escrevendo esse artigo, o índice está em 21 (medo extremo), em meio as decisões do governo Trump de impor tarifas em produtos de outros países, especialmente a China.

Outras formas de medir o sentimento do mercado involvem o uso de dados qualitativos, como notícias, relatórios financeiros e redes sociais. Esses dados são, em grando parte, não estruturados, o que reque técnicas específicas, como processamento de linguagem natural (NLP) e inteligência artificial.

Esse trabalho foi fortemente inspirado pelo artigo do [Lucas Leme](https://www.linkedin.com/in/lucas-leme-santos/), que usou notícias de site de finanças, como Valor Econômico e Infomoney, para treinar uma modelo capaz de prever o sentimento do mercado.

![Lucas Leme](/posts/llm-sentiment-analysis/lucas-leme.png)
*Fonte: [FinBERT-PT-BR: Análise de Sentimentos de Textos em Português do Mercado Financeiro](https://sol.sbc.org.br/index.php/bwaif/article/view/24960)*

Apesar de notícias de finanças serem uma fonte rica em informações e produzirem um grande volume de dados, elas expressam uma visão da mídia sobre o mercado, e não necessariamente a visão dos investidores.

Por isso, nesse artigo, vamos usar cartas mensais e trimestrais de gestores de recursos independentes para construir na nossa base de informações, que será usada para criar um indicador de sentimento do mercado.

Empresas de gestão de recursos, também conhecidas como gestoras ou Asset Management, são instituições especializadas na administração profissional de ativos financeiros de terceiros. Basicamente, elas captam recursos de investidores e aplicam esses recursos em diferentes classes de ativos, como ações, títulos de renda fixa, imóveis e outros investimentos.

Essas empresas são compostas por equipes lideradas por um ou mais gestores, que são responsáveis por tomar decisões de investimento e alocar os recursos de acordo com a estratégia definida.

Uma prática bastante comum entre essas empresas é a publicação periódica de cartas aos investidores, normalmente mensais ou trimestrais. Esses documentos têm o objetivo de informar sobre o desempenho dos investimentos, as estratégias implementadas e as perspectivas futuras, além de serem disponibilizados publicamente.

As cartas contêm informações valiosas sobre a visão de agentes importantes do mercado, capazes de influenciar o sentimento dos investidores. Elas são acompanhadas atentamente por empresas e acadêmicos, oferecendo uma perspectiva privilegiada sobre o ambiente de investimentos.

A primeira etapa do trabalho, portanto, foi coletar essas cartas de gestores de recursos diretamente dos seus sites. Para isso, utilizei a biblioteca [BeautifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) para fazer o *scraping* dos sites das gestoras e a extração do texto de PDFs.

Essa etapa foi bastante trabalhosa, pois as cartas estão disponíveis em diferentes formatos e layouts, o que exigiu um trabalho de limpeza e normalização dos dados. Além disso, cada gestora possui um site diferente, o que exigiu um trabalho de adaptação do código para cada site.

No total, foram coletadas 707 cartas de 12 gestoras diferentes, abrangendo o período entre 1999 e 2025. As gestoras foram escolhidas com base na sua relevância no mercado brasileiro e na disponibilidade das cartas em seus sites. Além disso, foram selecionadas gestoras independentes com viés mais voltado para ações.

A tabela abaixo mostra a quantidade de cartas coletadas de cada gestora:

| Gestora         | Quantidade de cartas |
|------------------|----------------------|
| Guepardo         | 111                  |
| IP Capital       | 95                   |
| Dahlia Capital   | 81                   |
| Dynamo           | 80                   |
| Kapitalo         | 74                   |
| Ártica           | 62                   |
| Encore           | 58                   |
| Genoa Capital    | 56                   |
| Alpha Key        | 35                   |
| Mar Asset        | 20                   |
| Alaska           | 18                   |
| Squadra          | 17                   |
| **Total**        | **707**              |

O texto extraído das cartas foi processado e normalizado, removendo informações irrelevantes, como tabelas, gráficos e imagens, e salvo em um banco de dados SQLite junto com outras informações, como título e data.

### BERT e transformers

Os modelos de linguagem são uma classe de modelos de aprendizado profundo projetados para entender e gerar texto. Eles são baseados na arquitetura de *transformers*, que foi introduzida no artigo ["Attention is All You Need"](https://arxiv.org/abs/1706.03762) em 2017.



Os modelos de linguagem, como o BERT (Bidirectional Encoder Representations from Transformers), são uma classe de modelos de aprendizado profundo projetados para entender e gerar texto. Eles são baseados na arquitetura de *transformers*, que foi introduzida no artigo ["Attention is All You Need"](https://arxiv.org/abs/1706.03762) em 2017.

Esses modelos representam um dos prinpais avanços em processamento de linguagem natural e permitem que computadores compreendam o significado do texto de forma mais semelhante aos humanos e desempenhem tarefas, como tradução automática, resumo de texto e resposta a perguntas.

Uma aplicação notória da tarefa de perguntas e resposta é o GPT, que é um modelo de linguagem treinado em uma grande quantidade de texto e capaz de gerar respostas coerentes e contextualmente relevantes para perguntas feitas em linguagem natural. Apesar de ter sido popularizado pelo ChatGPT, o modelo GPT por si só não funciona nativamente como um assistente.

Após seu pré-treinamento, o modelo foi ajustado para se especializar em responder perguntas e interagir como um assistente virtual. Isso foi feito através de um processo chamado fine-tuning, onde o modelo foi exposto a um conjunto de dados específico de perguntas e respostas, permitindo que ele aprendesse a gerar respostas mais precisas e relevantes.

O BERT, por outro lado, é um modelo de linguagem bidirecional que foi projetado para entender o contexto de uma palavra em uma frase, levando em consideração as palavras que vêm antes e depois dela. Isso permite que o BERT capture melhor o significado das palavras e suas relações no texto.

O BERT é pré-treinado em uma grande quantidade de texto usando duas tarefas principais: a tarefa de preenchimento de lacunas (Masked Language Model) e a tarefa de previsão da próxima frase (Next Sentence Prediction). Após o pré-treinamento, o BERT pode ser ajustado para tarefas específicas, como classificação de texto, resposta a perguntas e análise de sentimentos, o que irei mostrar nesse artigo.



### Fine-tuning para adaptação de domínio

### PEFT e tarefas específicas

### Avaliação do modelo

### Conclusão
