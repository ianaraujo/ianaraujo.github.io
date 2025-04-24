---
title: "Fine-tuning de modelos de linguagem para previsão do sentimento no Mercado Financeiro"
description: "Aprenda como usar modelos de linguagem para prever o sentimento do mercado financeiro através de relatórios mensais ou trimestrais de gestores de recursos."
image: "/posts/credit-card-fraud/underbagging.png"
date: "23/04/2025"
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

### Transformers e Modelos de Linguagem

Os modelos de linguagem são uma classe de modelos de aprendizado profundo projetados para entender e gerar texto. Eles são baseados na arquitetura de *transformers*, que foi introduzida no artigo ["Attention is All You Need"](https://arxiv.org/abs/1706.03762) em 2017.

Meu objetivo não é explicar em detalhes a arquitetura de *transformers* ou como esses modelos funcionam. Eu tenho certeza que você pode encontrar diversos artigos e vídeos explicando isso de forma mais didática.

Recomendo acompanhar o canal do [Andrej Karpathy](https://www.youtube.com/@karpathy) no YouTube, que tem um ótimo vídeo sobre a arquitetura de *transformers* e como ela funciona. Também recomendo um curso muito bom da Deep Learning AI, ["Generative AI with LLMs"](https://www.deeplearning.ai/courses/generative-ai-with-llms/), e cursos do [Hugging Face](https://huggingface.co/learn/llm-course).

De modo geral, esses models consistem em uma grande rede neural treinada em uma quantidade massiva de textos, que ao receber uma sequência de palavras, é capaz de prever a próxima palavra da sequência. Nem todos os modelos funcionam dessa forma, mas é uma boa forma de apresentar o conceito, uma vez que o modelo mais famoso, o GPT, funciona dessa forma.

![Next Word Prediction](/posts/llm-sentiment-analysis/next-word-prediction.png)

Existem três tipos principais de modelos de linguagem: *encoder-only*, *decoder-only* e *encoder-decoder*. Modelos como o GPT, usado no ChatGPT, e Llama são *decoder-only*, são especializados em geração de texto, a partir de um *prompt*. Eles são treinados a partir de um processo chamado de *Causal Language Modeling*, onde o modelo é alimentado com uma sequência de palavras e deve prever a próxima palavra. Isso significa que eles têm uma compreensão unidirecional do texto.

Outra família de modelos, os chamados de *encoder-only*, como o BERT, são projetados para entender o contexto de uma palavra em uma frase, levando em consideração as palavras que vêm antes e depois dela. Isso permite que o modelo capture melhor o significado das palavras e suas relações no texto.

Para isso, o modelo é treinado em uma tarefa chamada de *Masked Language Modeling*, onde algumas palavras da sequência são mascaradas e o modelo deve prever essas palavras com base nas palavras que vêm antes e depois dela. Isso concede ao modelo uma compreensão bidirecional do texto, que beneficia tarefas como classificação de texto, resposta a perguntas e análise de sentimentos.

![Masked Language Modeling](/posts/llm-sentiment-analysis/masked-language-modeling.png)

Esse vai ser o modelo que vamos utilizar! Ou melhor, uma versão dele chamada [BERTimbau](https://huggingface.co/neuralmind/bert-base-portuguese-cased), que é uma versão do BERT do Google, só que treinado em português. O BERTimbau foi treinado pela empresa NeuralMind AI e está disponível nas versões de 110M (base) e 335M (large) parâmetros. Quanto maior o número de parâmetros, no geral, mais complexo e poderoso é o modelo.

No entanto, esse modelo não é capaz de prever o sentimento do mercado financeiro por si só. Para isso, precisamos treinar o modelo em uma tarefa específica, que nesse caso é a classificação de texto e previsão de sentimento. Além disso, não é um modelo que foi treinado especificamente para o domínio financeiro, e nem é um LLM com bilhões de parâmetros, o que pode limitar sua capacidade de entender o contexto e o significado das palavras nesse domínio.

Portanto, usaremos o BERTimbau como um modelo base e faremos um processo chamado de *transfer learning*, seguindo duas etapas:

1. **Domain-Adaptive Pretraining (DAPT)**: O pré-treinamento do modelo será continuado usando uma grande quantidade de textos sobre finanças, o que permite que ele aprenda a entender o contexto e o significado de novas palavras nesse domínio. Isso é feito através de um processo chamado *domain-adaptive pretraining (DAPT)*, onde o modelo é treinado em uma tarefa geral (como previsão de palavras).

2. **Task Fine-tuning**: O modelo é ajustado para uma tarefa específica, que nesse caso é a classificação de texto e previsão de sentimento. Isso é feito através de um processo chamado *task fine-tuning*, onde o modelo é exposto a um conjunto de dados rotulados, permitindo que ele aprenda a identificar corretamente o sentimento de forma mais assertiva.

### Fine-tuning para adaptação de domínio

O objetivo dessa etapa é ensinar o nosso modelo tudo que ele precisa saber sobre finanças e investimentos. Antes de delegar qualquer tarefa para um ser humano, como classificar o sentimento de um texto, é importante que ele tenha uma boa base de conhecimento sobre o assunto. O mesmo vale para um modelo de linguagem.

Para entender corretamente um texto de sobre finanças, o modelo precisa conhecer palavras e jargões específicos do domínio, como "renda fixa", "juros", "ações", "Banco Central", "volatilidade", "alpha", "beta", entre outros. Além disso, o modelo precisa entender o contexto em que essas palavras são usadas e como elas se relacionam entre si.

Como nosso modelo base possui apenas 110M de parâmetros, não devemos esperar que ele tenha um conhecimento profundo sobre domínios específicos, como outros modelos mais capazes são capazes. Diante da expressão "bull market", por exemplo, o modelo pode não entender que isso se refere a um mercado em alta, e sim a um mercado de touros.

Apesar do exemplo ser cômico, essa etapa é fundamental para garantir que o modelo tenha boa acurácia na tarefa de previsão de sentimento e tenha baixo risco de ter [alucinações](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).

Para realizar o *domain-adaptive pretraining*, usamos a mesma tarefa de *Masked Language Modeling* que o BERTimbau foi treinado inicialmente, mas agora usando um conjunto de dados específico do domínio financeiro. No nosso caso, vamos usar trechos extraídos das cartas das gestoras de recursos. No total, durante essa etapa, foram usados 36.000 de trechos de texto, com em média de 200 caracteres cada.

O código para essa etapa está disponível no repositório do projeto. Utilizei uma instância de GPU da AWS (g4dn.xlarge) para treinar o modelo, que levou cerca de 2 horas para ser treinado. O treinamento foi feito usando a biblioteca [Transformers](https://huggingface.co/docs/transformers/index) do Hugging Face.

O resultado do modelo adaptado para o domínio é muito interessante!

```python
pipe('Tinha uma [MASK] no meio do caminho.')
# [{'score': 0.14287759363651276,
#  'sequence': '[CLS] Tinha uma pedra no meio do caminho. [SEP]',
#  'token': 5028,
#  'token_str': 'pedra'},
# {'score': 0.06213393807411194,
#  'sequence': '[CLS] Tinha uma árvore no meio do caminho. [SEP]',
#  'token': 7411,
#  'token_str': 'árvore'},
# {'score': 0.05515013635158539,
#  'sequence': '[CLS] Tinha uma estrada no meio do caminho. [SEP]',
#  'token': 5675,
#  'token_str': 'estrada'},
# {'score': 0.0299188531935215,
#  'sequence': '[CLS] Tinha uma casa no meio do caminho. [SEP]',
#  'token': 1105,
#  'token_str': 'casa'},
# {'score': 0.025660505518317223,
#  'sequence': '[CLS] Tinha uma cruz no meio do caminho. [SEP]',
#  'token': 3466,
#  'token_str': 'cruz'}]
```

### PEFT e tarefas específicas

### Avaliação do modelo

### Conclusão
