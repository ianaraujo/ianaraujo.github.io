---
title: "Dual Momentum: estratégia sistemática de investimento para selecionar ativos vencedores"
description: "Utilizando técnicas de backtest e Python, esse estudo analisa uma estratégia chamada \"Dual Momentum\" com ativos brasileiros indexados: BOVA11, IVVB11 e B5P211"
image: "/posts/dual-momentum/momentum-shifts.png"
date: "10/10/2024"
tag: "Investimentos"
---

As estratégias de **momentum** baseiam-se na ideia que ativos com retornos positivos tendem a continuar se valorizando, enquanto aqueles com retornos fracos ou negativos geralmente mantêm a mesma trajetória.

Em outras palavras, momentum é a tendência dos preços de ativos continuarem se movendo na mesma direção. Isso ocorre devido a diversos fatores, incluindo aspectos comportamentais dos investidores, que frequentemente seguem tendências, adotam posturas irracionais e embarcam em narrativas de mercado.

Existem algumas formas de calcular o momentum de ativos e aplicá-lo em estratégias de investimento. Podemos dividir, por exemplo, em duas categorias principais: **momentum absoluto** e **momentum relativo**. O momentum absoluto analisa o desempenho de um ativo em relação ao seu próprio histórico de preços, verificando se ele tem apresentado retornos positivos ao longo do tempo.

Já o momentum relativo compara diferentes ativos entre si para determinar qual deles teve o melhor desempenho em um determinado período. Essas estratégias são amplamente utilizadas para tentar identificar quais ativos têm maior probabilidade de continuar se valorizando, com base em suas performances passadas, ou aqueles que devem seguir trajetórias de desvalorização.

No início das pesquisas acadêmicas em finanças, a ideia de "momentum" não era muito bem aceita, pois prevaleciam noções estabelecidas, como a Hipótese do Mercado Eficiente e a imprevisibilidade dos retornos futuros (Random Walk Theory).

No entanto, no início da década de 70, com a maior aceitação do conceito de "finanças comportamentais" e o surgimento de **fatores** capazes de explicar os retornos dos ativos, como valor e tamanho, as estratégias de momentum ganharam força.

O objetivo deste estudo é testar uma estratégia chamada "Dual Momentum", que combina os dois tipos de momentum citados: absoluto e relativo.

O momentum relativo é o mais simples de entender e aplicar. Basta comparar dois ativos, e o que tiver apresentado melhor performance, na janela de análise, possui o maior _momentum_, ou força relativa. Já o momentum absoluto verifica se o ativo, por si só, teve rentabilidade positiva, o que pode ser medido de muitas formas. Uma das formas é comparar a performance do ativo com a taxa livre de risco. Se o ativo apresentou retorno em excesso em relação ao CDI, por exemplo, dizemos que ele possui momentum absoluto positivo.

Ao aplicar esses conceitos e selecionar ativos usando momentum como critério, o resultado esperado é a construção de um portfólio que gere _alpha_ (retorno em excesso com risco igual ou menor) em relação aos índices de referência. **A premissa do Dual Momentum é possibilitar que o investidor colete prêmios de risco ao longos dos anos, enquanto se protege de mudanças de ciclo e _bear markets_, pontualmente, através de ativos defensivos.**

## Aplicação do modelo

Para atingir os objetivos descritos, vamos selecionar os seguintes índices de referência:

- IBOVESPA (bolsa brasileira)
- S&P 500 em BRL (bolsa americana em reais)
- IMA-B 5 (títulos públicos indexados ao IPCA com prazo de até 5 anos)
- CDI (taxa livre de risco)

Veja a performance desses índices desde 2004:

Em pouco mais de 20 anos, o índice que melhor performou foi o IMA-B 5, um índice de títulos públicos indexados à inflação medida pelo IPCA, que são as NTN-Bs, com duração de até 5 anos. Além da rentabilidade ser a maior no período, o IMA-B 5 também mostrou ser um ativo pouco volátil, representando um excelente equilíbrio entre risco e retorno.

Outro destaque é a performance ruim do índice IBOVESPA, que apresentou uma rentabilidade inferior à taxa livre de risco, o CDI.

![Análise Exploratória](/posts/dual-momentum/analise-exploratoria.png)

**A estratégia consiste em verificar qual ativo apresentou o maior retorno relativo nos últimos 12 meses, investir nesse ativo e rebalancear o portfólio mensalmente.** Para isso, é necessário obter a série temporal do preço de fechamento diário desses ativos e realizar as etapas necessárias de processamento de dados para gerar os sinais e estimar a eficácia da estratégia. Esse processo é conhecido em finanças como **backtest**.

A tarefa de seleção de ativos foi feita da seguinte forma: primeiro, comparamos a força relativa dos dois ativos de risco (IBOV e SP500) e selecionamos o que melhor performou. Após selecionar o ativo de risco, comparamos com a taxa livre de risco (CDI). Se o ativo selecionado apresentar momentum absoluto positivo em relação à taxa livre de risco, investimos no ativo. Se não, investiremos no IMA-B 5 até que algum ativo de risco supere o CDI na janela de 12 meses (ANTONACCI, 2017).

## Backtest

Para calcular o momentum dos ativos, etapa fundamental para aplicar a estratégia, podemos seguir duas abordagens: (i) calcular o retorno nos últimos 12 meses normalmente ou (ii) excluir o último mês, calculando apenas o retorno dos 11 primeiros meses em cada janela de 12 meses.

Essa exclusão é realizada porque há evidências na literatura, como em Jegadeesh e Titman (1993), que mostram que estratégias de momentum que excluem o último mês geralmente superam aquelas que incluem todos os 12 meses. Isso ocorre porque estamos capturando a tendência sustentada dos retornos dos ativos, evitando os impactos negativos das reversões de curto prazo.

A pesquisa científica em finanças comportamentais descobriu que, no curto prazo, os retornos dos ativos podem ser explicados por movimentos de reversão, especialmente dentro do último mês. Portanto, para calcular o retorno dos últimos 12 meses, vamos utilizar a estratégia de não considerar o último mês.

Portanto, vamos calcular o retorno dos ativos nos últimos 12 meses, sempre na data do primeiro dia de negociação de cada mês. Assim, podemos realizar o rebalanceamento mensal da estratégia, considerando o momentum dos ativo, e obter a informação de qual ativo investir.

![Dual Momentum](/posts/dual-momentum/momentum-shifts.png)

Feito esse processo, podemos analisar que, seguindo a estratégia, nosso portfólio ficou aproximadamente **40% dos dias investido em S&P 500, 35% em IBOV e 25% em IMA-B 5**

O gráfico acima ilustra os períodos em que o modelo esteve investido em cada ativo, bem como os _momentum shifts_, que indicam momentos de reversão de tendência.

## Benchmark e avaliação do modelo

Uma forma eficiente de confirmar a eficácia de qualquer estratégia de investimentos ou qualquer modelo, além de verificar se ela superou os ativos individualmente, é criando um **benchmark**, ou seja, uma base de comparação.

Para obter esse benchmark, podemos criar um **portfólio ingênuo (naive)**, que investe nos três ativos da estratégia com pesos iguais.

Sendo assim, sem qualquer esforço, qualquer investidor poderia montar uma carteira com esssa estratégia ingênua ou "Equal Weight" (pesos iguais) e rebalancear mensalmente. A premissa base de qualquer estratégia mais sofisticada deve ser superar esse portfólio _naive_.

![Naive Portfolio](/posts/dual-momentum/naive-portfolio.png)

|                 | CAGR   | Volatilidade | Sharpe Ratio |
| --------------- | ------ | ------------ | ------------ |
| IBOV            | 8.92%  | 26.58%       | -0.0404      |
| CDI             | 10.44% | 0,23%        | 1.8691       |
| Naive Portfolio | 11.28% | 12.37%       | 0.1035       |
| IMA-B 5         | 12.13% | 2.85%        | 0.7477       |
| SP500 BRL       | 12.14% | 20.89%       | 0.1024       |
| Dual Momentum   | 17.72% | 19.64%       | 0.3931       |

Observando os resultados obtidos e as métricas de risco (volatilidade) e retorno (CAGR) utilizadas, podemos perceber que **a estratégia superou com folga o portfólio de pesos iguais, apresentando um retorno superior a 17% ao ano**, nos últimos 20 anos, embora tenha apresentado volatilidade maior.

No entanto, apesar da volatilidade ser maior, o Sharpe Ratio, que mede o retorno obtido para cada unidade de risco assumida, foi superior, indicando uma melhor relação entre risco e retorno.

Nesta análise, mantive o CDI como comparação, por se tratar da taxa livre de risco utilizada para o cálculo do momentum. No entanto, o modelo se comportou muito mais como um ativo de risco do que como um ativo defensivo, devido à sua volatilidade. Portanto, vamos analisar também esse modelo em comparação com os demais ativos de risco (S&P 500 e IBOV).

Embora a estratégia de Dual Momentum seja bastante volátil, assim como outros ativos de risco, ela apresentou um retorno superior em comparação aos demais ativos analisados. Apesar de ter uma volatilidade semelhante à do índice S&P 500, a estratégia gerou um retorno em excesso de aproximadamente 5,5% a.a.

Essa volatilidade da estratégia é caracterizada por um fenômeno conhecido como "Momentum Crash", que corresponde a correções abruptas e severas em ativos que estavam apresentando um bom desempenho. Exemplos notáveis desse fenômeno ocorreram em 2008 e 2020. Em 2020, especificamente, devido à pandemia de COVID-19, os mercados globais sofreram quedas significativas em ativos de risco.

Esses eventos são amplamente estudados na literatura, que busca desenvolver métodos para mitigar seus impactos, utilizando técnicas mais avançadas de previsão de volatilidade e reversões de tendência.

## Drawdowns

Por ter se comportado de forma mais semelhante a um ativo de risco, um estudo interessante é a análise do **drawdown**, que corresponde às variações negativas sofridas pelos ativos.

Compreender o risco da estratégia envolve também entender a magnitude desses drawdowns e a duração de cada um deles, proporcionando uma visão mais clara sobre os períodos de recuperação e o impacto sobre o desempenho total da estratégia.

![Drawdown](/posts/dual-momentum/drawdown.png)

|                 | Duração média | Duração máx. | Maior Drawdown |
| --------------- | ------------- | ------------ | -------------- |
| Naive Portfolio | 8 dias        | 377 dias     | -36%           |
| Dual Momentum   | 11 dias       | 691 dias     | -33%           |
| SP500 BRL       | 20 dias       | 2017 dias    | -52%           |
| IBOV            | 23 dias       | 2304 dias    | -60%           |

Ao analisar os drawdowns, constatamos que, apesar do problema dos _momentum crashes_, a estratégia apresentou drawdowns menos profundos e de menor duração em comparação com outros ativos de risco. Isso indica que, mesmo em períodos de correção, a estratégia conseguiu se recuperar mais rapidamente, reduzindo a severidade das perdas em relação aos ativos de risco tradicionais.

A duração máxima do drawdown é extremamente importante, pois, no caso do IBOV, um investidor que teve o azar de investir nesse ativo em um determinado dia ao longo desses anos **ficou mais de seis anos com seu investimento "no vermelho"** e só conseguiu recuperar o valor investido após esse período.

Isso sem contar o custo de oportunidade, já que, durante esse período, ele poderia ter investido no CDI, sem nenhum risco. Ou seja, esse investidor teve um prejuízo enorme.

## Análise em janelas de 10 anos

Outra forma de analisar a performance da estratégia, eliminando o viés de seleção da janela temporal, é testar o modelo em todas as janelas de 10 anos desde 2004. Já vimos que, nos últimos 20 anos, o modelo superou todos os ativos de referência, mas será que o mesmo se repete em outras janelas?

Para isso, é necessário voltar ao código e obter as variações diárias dos índices. Após obter os dados, são calculadas todas as janelas de 10 anos existentes no período e é realizado novamente o _backtest_, considerando cada uma das janelas.

Após feito esse processo, obtemos o retorno de cada ativo nas mais de 2600 janelas possíveis e comparamos a performance do modelo:

**A estratégia superou o CDI em 100% das janelas e teve uma rentabilidade média de 337% do CDI**.

## Conclusão

A estratégia de Dual Momentum se mostrou bastante eficiente, conforme os objetivos do estudo, pois apresentou um excelente retorno (+17% a.a.) nos últimos 20 anos, com uma volatilidade menor do que outros ativos de risco, como o S&P500 e o IBOV.

Porém, apesar do excelente retorno, a estratégia tem alguns "problemas":

É uma estratégia simples, mas que exige muita **disciplina** do investidor, principalmente em momentos de grande volatilidade. Apesar de evitar que o investidor participe de longos _bear markets_, há o risco do chamado _tracking error_, ou seja, em períodos curtos de tempo, a estratégia pode apresentar desempenho inferior aos ativos de risco.

Como observamos no _backtest_, a estratégia também sofre de um problema conhecido como **momentum crashes**, o que a torna bastante **volátil** em certos períodos, podendo causar prejuízos se o investidor não tiver disciplina e não se mantiver fiel à estratégia.

Esses problemas são comuns a outras estratégias de _momentum_. No entanto, um destaque positivo dessa estratégia, em específico, é que ela pode ser facilmente replicada por qualquer investidor e possui baixos custos de transação, já que envolve poucos ativos e transações pouco frequentes.

O investidor que tivesse decidido implementar essa estratégia em 2004, após 20 anos, teria feito apenas uma média de **menos de 2 negociações por ano**. Isso significa uma gestão simples e com poucos custos operacionais.

No Brasil, o investidor pode replicar essa estratégia utilizando **ETFs (Exchange Traded Funds)**, que são fundos negociados em bolsa que replicam índices ou ativos específicos, proporcionando uma forma prática de diversificação e liquidez.

Para uma análise mais precisa do retorno dessa estratégia, é fundamental incluir as taxas de administração dos ETFs envolvidos, que, apesar de serem relativamente baixas em comparação com o restante da indústria de fundos, ainda impactam o retorno final.

Além disso, os custos operacionais também devem ser considerados. Como isso não foi abordado neste estudo, é um ponto importante a ser levado em consideração em avaliações futuras para obter uma estimativa mais realista dos ganhos líquidos com a estratégia.

Seguem as opções de investimento em ETFs para cada ativo mencionado:

- BOVA11 (IBOV)
- IVVB11 (S&P 500)
- B5P211 (IMA-B 5)

## Referências

[1] Antonacci, Gary, Risk Premia Harvesting Through Dual Momentum (October 1, 2016). Journal of Management & Entrepreneurship, vol.2, no.1 (Mar 2017), 27-55, Available at SSRN: <https://ssrn.com/abstract=2042750> or <http://dx.doi.org/10.2139/ssrn.2042750>

[2] JEGADEESH, N. and TITMAN, S. (1993), Returns to Buying Winners and Selling Losers: Implications for Stock Market Efficiency. The Journal of Finance, 48: 65-91. <https://doi.org/10.1111/j.1540-6261.1993.tb04702.x>
