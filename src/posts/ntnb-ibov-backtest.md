---
title: "Ibovespa ou IPCA+6,5%: qual é o melhor investimento?"
description: "Em cenários de juros altos, que são comuns no Brasil, os investidores constantemente se deparam com um conflito entre aproveitar boas taxas na Renda Fixa ou baixos múltiplos na Renda Variável"
image: "/posts/ntnb-ibov-backtest/avg-return-eval.png"
date: "21/10/2024"
tag: "Investimentos"
---

![Taxas do Tesouro IPCA+](/posts/ntnb-ibov-backtest/taxa-ipca-tesouro.png)

Se você investe seu dinheiro no Brasil, há pelo menos algum tempo, provavelmente já se deparou com o cenário atual outras vezes. A taxa de juros é 10,75%, com perspectivas de aumento, as taxas dos títulos públicos indexados à inflação (NTN-B) estão em patamares que não eram vistos desde 2017, e a bolsa com múltiplos baixos.

Além disso, os investidores encontram-se extremamente pessimistas com ativos de risco, sendo atraídos pelas altas taxas na Renda Fixa.

Nessas horas, surge o questionamento: "devo aproveitar as boas taxas e garantir um bom retorno no longo prazo ou aproveitar os ativos de renda variável em múltiplos historicamente baixos ou "descontados"? **Essa é uma dúvida muito comum e eu vou tentar determinar, historicamente, qual foi a melhor decisão.**

Esse artigo foi inspirado em uma publicação no blog da [Itaú Asset](https://blog.itau.com.br/itauasset/pilula-de-etfs-ipca6-e-acoes).

As NTN-Bs são o conjunto de títulos públicos indexados ao IPCA. A forma mais fácil de investir nesses títulos é através do Tesouro Direto, que diariamente atualiza as taxas oferecidas (ver imagem acima). A diferença desses ativos para outros ativos de renda fixa é que, por serem ativos do governo, o risco de crédito é muito baixo.

Por conta disso, os investidores usam essa taxa para balizar outras oportunidades de investimento, usando como benchmark para investir em ativos de crédito privado ou comparar a performance de fundos.

A taxa atual, **IPCA+6,5%**, é considerada por grande parte dos investidores uma taxa extremamente atrativa. Esse patamar de juros é considerado alto, ou seja, acima da taxa neutra do país. Por isso, muitos investidores acreditam em um movimento de "reversão a média", embora não seja assim tão incomum encontrar momentos na história em que esses títulos apresentaram taxas parecidas.

![Histórico Yield NTN-B](/posts/ntnb-ibov-backtest/taxa-historico-ntnb.png)

Recentemente, o investidor americano Howard Marks publicou um artigo chamado ["Ruminating on Asset Allocation"](https://www.oaktreecapital.com/insights/memo/ruminating-on-asset-allocation), onde ele destaca as principais diferenças entre ativos fundamentais na composição de portfolios, equities (ações) e bonds (títulos de dívida).

Segundo ele, **existe uma diferença fundamental entre ser proprietário e ser credor**. Quando investimos em Renda Variável, colocamos nosso capital em risco sem garantia de retorno, comprando parte de um negócio e tendo direito a uma parcela dos lucros ou fluxos de caixa.

Já ao investir em uma NTN-B ou título de crédito privado, emprestamos o dinheiro com a promessa de retorno fixo, recebendo juros conforme contrato. A principal diferença é que proprietários têm retorno incerto, enquanto credores têm retorno garantido.

Ainda segundo o autor, a escolha entre ser proprietário ou credor é uma das decisões mais importantes que o investidor deve fazer. Essa decisão vai definir o nível de risco que o investidor tolera e o quanto de retorno espera receber.

A discussão entre essas duas classes de ativo e o atual patamar das taxas da Renda Fixa me despertou o seguinte questionamento: **afinal, nesse cenário, é melhor ser proprietário ou credor?**

O artigo da Itaú Asset chega a conclusão que, de fato, "o melhor momento de entrada pro Ibovespa se deu ao mesmo tempo em que a taxa do Tesouro IPCA+ 2035 estava com taxa entre IPCA+6% e IPCA+7%".

Seguindo nessa linha, fiz uma [simulação](https://github.com/ianaraujo/ntnb-ibov-backtest) usando Python, considerando janelas de 12 meses, medindo o retorno do Ibovespa, em momentos de taxas elevadas (IPCA+6,5% ou mais) e a rentabilidade histórica do índice.

Nessa simulação, desde 2005, **o retorno médio de 12 meses do Ibovespa em cenários de taxas elevadas (IPCA+6,5% ou superior) foi de 24,5%, enquanto a média histórica foi de 10%.**

Portanto, sem dúvida, historicamente esse é um dos melhores pontos de entrada na bolsa brasileira. Mas, se compararmos a rentabilidade do Ibovespa com o investimento no Tesouro IPCA+ nas taxas atuais, qual será o resultado?

Com esse objetivo, simulei investimentos com a rentabilidade do Ibovespa e IPCA+6,5% em janelas de 6, 12, 24, 36 e 60 meses, em que a taxa das NTN-Bs superavam 6,5%.

![Rentabilidade Histórica dos Investimentos](/posts/ntnb-ibov-backtest/avg-return-eval.png)

Podemos perceber que, em horizontes mais curtos, o Ibovespa frequentemente supera o IPCA+6,5%. No entanto, em prazos mais longos, é bastante desafiador superar a Renda Fixa com essas taxas. Ao investir no Tesouro Direto, o investidor tem a vantagem de assegurar esses rendimentos por prazos bem superiores a 5 anos.

**O objetivo deste estudo não é, de forma alguma, fazer qualquer recomendação de investimento.** Na verdade, não é possível tirar conclusões definitivas a partir desses resultados. Alguns investidores podem se sentir atraídos pelo cenário atual para investir em ativos de risco, enquanto outros podem preferir a segurança dos títulos públicos e o retorno real atrativo no longo prazo, que é difícil de encontrar em outras opções de investimento.

Como disse Howard Marks, a decisão mais importante é definir a "postura de risco" desejada, combinando ativos de propriedade e dívida, para posicionar o portfólio no ponto de risco/retorno mais adequado ao perfil do investidor.
