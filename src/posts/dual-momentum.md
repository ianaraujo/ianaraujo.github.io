---
title: "Combinando estratégias de momentum para selecionar ativos vencedores"
description: "Utilizando técnicas de backtest e Python, esse estudo testa uma estratégia chamada \"Dual Momentum\" com ativos indexados: BOVA11, IVVB11 e B5P211"
date: "09/10/2024"
tag: "Investimentos"
---

As estratégias de **momentum** em investimentos consistem na noção de que ativos com retornos positivos tendem a continuar se valorizando, enquanto ativos com retornos fracos ou negativos tendem a seguir na mesma trajetória. Em outras palavras, momentum é a tendência dos preços de ativos continuarem se movendo na mesma direção por algum tempo. Isso ocorre devido a diversos fatores, incluindo aspectos comportamentais dos investidores, que frequentemente seguem tendências, adotam posturas irracionais e embarcam em narrativas de mercado.

Existem algumas formas de calcular o momentum de ativos e aplicá-lo em estratégias de investimento. Podemos dividir, por exemplo, em duas categorias principais: **momentum absoluto** e **momentum relativo**. O momentum absoluto analisa o desempenho de um ativo em relação ao seu próprio histórico de preços, verificando se ele tem apresentado retornos positivos ao longo do tempo. Já o momentum relativo compara diferentes ativos entre si para determinar qual deles teve o melhor desempenho em um determinado período. Essas estratégias são amplamente usadas para tentar identificar quais ativos têm maior probabilidade de continuar se valorizando, com base em suas performances passadas, ou aqueles que devem seguir trajetórias de desvalorização.

No início das pesquisas acadêmicas em finanças, a ideia de "momentum" não era bem aceita, pois prevaleciam noções estabelecidas, como a Hipótese do Mercado Eficiente e a imprevisibilidade dos retornos futuros (Random Walk Theory). No entanto, no início da década de 70, com a maior aceitação do conceito de "finanças comportamentais" e o surgimento de **fatores** capazes de explicar os retornos dos ativos, como valor e tamanho, as estratégias de momentum ganharam força.

O objetivo deste estudo é testar uma estratégia chamada "Dual Momentum", que combina os dois tipos de momentum citados: absoluto e relativo.

O momentum relativo é o mais simples de entender e aplicar. Basta comparar dois ativos, e o que tiver apresentado melhor performance, na janela de análise, possui o maior _momentum_, ou força relativa. Já o momentum absoluto verifica se o ativo, por si só, teve rentabilidade positiva, o que pode ser medido de muitas formas. Uma forma de avaliar isso é comparar a performance do ativo com a taxa livre de risco. Se o ativo apresentou retorno em excesso em relação ao CDI, por exemplo, dizemos que ele possui momentum absoluto positivo.

Considerando essas premissas, podemos encontrar ativos cujo momentum relativo é positivo e, no entanto, o momentum absoluto ser negativo. Por exemplo, ao comparar dois ativos de risco que tiveram performances negativas (-17% e -22%), o primeiro ativo representa um momentum relativo positivo, mas, se comparado ao CDI no mesmo período, teve um momentum absoluto negativo.

Ao aplicar esses conceitos e selecionar ativos usando momentum como critério, o resultado esperado é a construção de um portfólio que gere _alpha_ (retorno em excesso com risco igual ou menor) em relação ao índice de referência. **A premissa do "Dual Momentum" é possibilitar que o investidor colete prêmios de risco ao longos dos anos, enquanto se protege de mudanças de ciclo e _bear markets_ através de ativos defensivos.**

## Aplicação da Estratégia

Para atingir os objetivos descritos, vamos selecionar os seguintes índices de referência:

- IBOVESPA (bolsa brasileira)
- S&P 500 em BRL (bolsa americana em reais)
- IMA-B 5 (títulos públicos indexados ao IPCA com prazo de até 5 anos)
- CDI (taxa livre de risco)

Veja a performance desses índices desde 2004:

Desde 2004, em pouco mais de 20 anos, o índice que melhor performou foi o IMA-B 5, um índice de títulos públicos atrelados ao IPCA com duração de até 5 anos. Além da rentabilidade ser a maior no período, o IMA-B 5 também mostrou ser um ativo pouco volátil, representando um excelente equilíbrio entre risco e retorno.

Outro destaque é a performance ruim do índice IBOVESPA, que apresentou uma rentabilidade inferior à taxa livre de risco, o CDI.

![Análise Exploratória](/posts/dual-momentum/analise-exploratoria.png)

**A estratégia consiste em verificar qual ativo apresentou o maior retorno nos últimos 12 meses, investir nesse ativo e rebalancear o portfólio mensalmente.** Para isso, é necessário obter a série temporal do preço de fechamento diário desses ativos e realizar as etapas necessárias de processamento de dados para gerar os sinais e estimar a eficácia da estratégia. Esse processo é conhecido em finanças como **backtest**.

A tarefa de seleção de ativos foi feita da seguinte forma: primeiro, comparamos a força relativa dos dois ativos de risco (IBOV e SP500) e selecionamos o que mais performou. Após selecionar o ativo de risco, comparamos com a taxa livre de risco (CDI). Se o ativo selecionado apresentar momentum positivo em relação à taxa livre de risco, investimos no ativo. Se não, investiremos no IMA-B 5 até que algum ativo de risco supere o CDI na janela de 12 meses (ANTONACCI, 2017).

## Backtest

Para calcular o momentum dos ativos, etapa fundamental para aplicar a estratégia, podemos seguir duas abordagens: (i) calcular o retorno nos últimos 12 meses normalmente ou (ii) excluir o último mês, calculando apenas o retorno dos 11 primeiros meses em cada janela de 12 meses.

Essa exclusão é realizada porque há evidências na literatura, como em Jegadeesh e Titman (1993), que mostram que estratégias de momentum que excluem o último mês geralmente superam aquelas que incluem todos os 12 meses. Isso ocorre porque estamos capturando a tendência sustentada dos retornos dos ativos, evitando os impactos negativos das reversões de curto prazo.

A pesquisa científica em finanças comportamentais descobriu que, no curto prazo, os retornos dos ativos podem ser explicados por movimentos de reversão, especialmente dentro do último mês. Portanto, para calcular o retorno dos últimos 12 meses, vamos utilizar a estratégia de não considerar os retornos do último mês.

Em seguida, vamos identificar o retorno dos últimos 12 meses na data do primeiro dia de negociação de cada mês. Dessa forma, podemos realizar o rebalanceamento mensal da estratégia, considerando o momentum dos ativos.

Analisando os dados obtidos, seguindo a estratégia, nosso portfólio ficou aproximadamente **50% dos dias investido em IMA-B 5, 35% em IBOV e apenas 10% em S&P 500.**

![Dual Momentum](/posts/dual-momentum/dual-momentum.png)

## Benchmark e Avaliação do Modelo

Uma forma eficiente de confirmar a eficácia da estratégia, além de verificar se ela superou os ativos individualmente, é criando um **benchmark**. Para o benchmark, podemos criar um **portfólio ingênuo (naive)**, que investe nos três ativos da estratégia com pesos iguais.

Ou seja, sem qualquer esforço, qualquer investidor poderia montar uma carteira com pesos iguais. A premissa de qualquer estratégia mais sofisticada é superar esse portfólio naive.

![Naive Portfolio](/posts/dual-momentum/naive-portfolio.png)

|                 | CAGR   | Volatilidade | Sharpe Ratio |
| --------------- | ------ | ------------ | ------------ |
| Dual Momentum   | 14.81% | 16.83%       | 0.2857       |
| Naive Portfolio | 11.28% | 12.37%       | 0.1035       |
| CDI             | 10.44% | 0.23%        | 1.8721       |

Observando as métricas de risco (volatilidade) e retorno (CAGR) utilizadas, podemos perceber que a estratégia superou o portfólio de pesos iguais, apresentando um retorno superior de 14,8% ao ano, embora com uma volatilidade também maior.

No entanto, apesar da volatilidade ser maior, o Sharpe Ratio, que mede o retorno obtido para cada unidade de risco assumida, foi superior, indicando uma melhor relação entre risco e retorno.

Nesta análise, mantive o CDI como comparação por ser a taxa livre de risco; no entanto, a carteira de Dual Momentum se comportou muito mais como um ativo de risco do que como um ativo defensivo, devido à sua volatilidade. Portanto, vamos analisar essa carteira em comparação com outros ativos de risco (S&P 500 e IBOV).

## Ativos de Risco

Apesar de a estratégia de Dual Momentum ser volátil, em comparação com outros ativos de risco, ela apresentou menor volatilidade e melhor retorno que os demais ativos comparados.

|               | CAGR   | Volatilidade | Sharpe Ratio |
| ------------- | ------ | ------------ | ------------ |
| Dual Momentum | 14.81% | 16.83%       | 0.2857       |
| SP500 BRL     | 12.18% | 20.91%       | 0.1045       |
| IBOV          | 8.98%  | 26.59%       | -0.0383      |

Essa volatilidade da estratégia é caracterizada por um fenômeno conhecido como "Momentum Crash", que corresponde a correções abruptas e severas em ativos que estavam performando muito bem. Um exemplo notável pode ser observado no ano de 2020, quando, devido à pandemia de COVID-19, os mercados ao redor do mundo sofreram grandes quedas nos ativos de risco.

Esses eventos são amplamente estudados na literatura, que busca desenvolver formas de mitigar esses efeitos, o que pode ser tema de um próximo trabalho que explore técnicas de machine learning aplicadas a séries temporais.

## Drawdowns

Outro estudo interessante é avaliar o **drawdown**, que corresponde às variações negativas dos ativos. Entender o risco da estratégia também está relacionado ao entendimento desses drawdowns e à duração de cada um deles.

![Drawdown](/posts/dual-momentum/drawdown.png)

|               | Duração média | Duração máx. | Maior Drawdown |
| ------------- | ------------- | ------------ | -------------- |
| Dual Momentum | 8 dias        | 403 dias     | -33%           |
| SP500 BRL     | 20 dias       | 2017 dias    | -52%           |
| IBOV          | 23 dias       | 2304 dias    | -60%           |

Analisando os drawdowns, observamos que, mesmo com o problema dos momentum crashes, a estratégia apresentou drawdowns menores (menos profundos) e de menor duração em comparação aos demais ativos de risco.

A duração máxima do drawdown é extremamente importante, pois, no caso do IBOV, um investidor que teve o azar de investir nesse ativo em um determinado dia ao longo desses anos ficou mais de seis anos vendo seu investimento "negativo" e só conseguiu recuperar o valor investido após esse período. Isso sem contar o custo de oportunidade, já que, durante esse período, ele poderia ter investido no CDI, sem nenhum risco. Ou seja, esse investidor teve um prejuízo enorme.

## Conclusão

A estratégia de Dual Momentum se mostrou bastante eficiente, conforme os objetivos do estudo, pois apresentou um excelente retorno (14% a.a.) nos últimos 20 anos, com uma volatilidade menor do que outros ativos de risco, como o S&P500 e o IBOV. Apesar do excelente retorno, a estratégia tem alguns "problemas":

1. É uma estratégia simples, mas que exige muita disciplina do investidor, principalmente em momentos de grande volatilidade. Apesar de evitar que o investidor participe de longos bear markets, há o risco de **tracking error**, ou seja, em períodos curtos de tempo, a estratégia pode apresentar desempenho inferior aos ativos de risco.

2. Como observamos no _backtest_, a estratégia sofre de um problema conhecido como momentum crashes, o que a torna bastante volátil em certos períodos, podendo causar prejuízos se o investidor não tiver disciplina e não se mantiver fiel à estratégia.

Esses problemas são comuns a outras estratégias de momentum. No entanto, um destaque positivo da estratégia estudada, em comparação com outras, é que ela pode ser facilmente replicada por qualquer investidor e possui baixos custos de transação, já que envolve poucos ativos e transações pouco frequentes.

No Brasil, o investidor pode replicar essa estratégia utilizando **ETFs (Exchange Traded Funds)**, que são fundos negociados em bolsa que replicam índices ou ativos específicos, proporcionando uma forma prática de diversificação e liquidez. Seguem as opções de investimento em ETFs para cada ativo utilizado na estratégia:

- BOVA11 (IBOV)
- IVVB11 (S&P 500)
- B5P211 (IMA-B 5)

## Referências

[1] Antonacci, Gary, Risk Premia Harvesting Through Dual Momentum (October 1, 2016). Journal of Management & Entrepreneurship, vol.2, no.1 (Mar 2017), 27-55, Available at SSRN: <https://ssrn.com/abstract=2042750> or <http://dx.doi.org/10.2139/ssrn.2042750>
