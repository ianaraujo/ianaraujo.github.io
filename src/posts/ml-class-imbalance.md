---
title: "Desafios na construção de classificadores robustos em conjuntos de dados desbalanceados"
description: "Em cenários de juros altos, que são comuns no Brasil, os investidores constantemente se deparam com um conflito entre aproveitar boas taxas na Renda Fixa ou baixos múltiplos na Renda Variável"
image: "/posts/ml-class-imbalance/smote.png"
date: "25/11/2024"
tag: "Ciência de Dados"
---

Alguns casos específicos de modelagem preditiva lidam com um problema conhecido como “classes desbalanceadas”. Isso acontece quando queremos classificar determinado exemplo, seja em tarefas binárias ou de múltiplas classes, mas os dados de treinamento específicos não apresentam uma distribuição equilibrada dessas classes.

Vamos usar um exemplo para facilitar. Estou estudando alguns modelos de previsão de fraudes, especialmente fraudes conhecidas como “Card Not Present Transactions Fraud”. Basicamente, são transações que acontecem sem que o cartão esteja fisicamente presente, o que é muito comum em compras online e assinaturas, como de streaming. Ainda mais comum após a popularização de carteiras digitais e pagamentos por aproximação, usando celular ou smartwatch. Eu, por exemplo, muitas vezes saio sem a carteira e raramente uso cartão físico.

A tarefa de prever essas fraudes é extremamente complexa, mas também muito útil para bancos, emissores de cartões de crédito e empresas de meios de pagamento. Além das fraudes ocasionarem a perda de bilhões de dólares todos os anos [2], a experiência do cliente com a empresa pode deixar de ser positiva, quando identifica uma transação que não realizou, precisa cancelar o cartão, solicitar uma nova via, solicitar reembolso, etc. Ou seja, uma baita dor de cabeça!

O que torna a tarefa de prever esses eventos extremamente complexa é que são eventos muito raros. A cada $100 transacionados, apenas 68 centavos são resultado de fraudes, ou seja, menos de 1%. Isso significa que em um conjunto de dados com 100.000 exemplos para o treinamento de um modelo de classificação, apenas 680 são fraudes. O modelo, então, precisa aprender a identificar fraudes sobre um número muito menor de exemplos. Se não forem tomados os cuidados adequados, nosso modelo pode se especializar em prever transações verdadeiras, enquanto não aprende a detectar fraudes.

Esse desafio não é exclusivo de problemas de detecção de fraudes. Outras tarefas como previsão de CHURN, identificação de células cancerígenas e triagem de currículos enfrentam os mesmos desafios. No entanto, é importante considerar que problemas de classes binárias são muito mais fáceis de lidar do que multiclasses, em caso de desbalanceamento.

O objetivo desse texto é apresentar algumas das principais técnicas para lidar com classes desbalanceadas em modelos de classificação. Para isso, vamos discutir algumas abordagens complementares:

### Reamostragem

Existem duas técnicas principais de reamostragem que podem ajudar a tratar dados desbalanceados, antes da etapa de treinamento, que são undersampling e oversampling.

O undersampling consiste em remover exemplos aleatórios da classe majoritária, até atingir a distribuição desejada ou o equilíbrio entre as classes. Já o oversampling segue a mesma lógica, com a diferença de que, nesse caso, são feitas cópias aleatórias dos exemplos da classe minoritária, até chegar à distribuição desejada.

Como você deve imaginar, ambas as técnicas têm problemas graves, que precisam ser considerados durante seu uso. Ao deletar dados do seu conjunto de treino, você corre o risco de perder dados relevantes que podem prejudicar a generalização do modelo, causando underfitting. O inverso também é verdade: ao duplicar muitos exemplos dos dados de treino, o risco é o modelo se adaptar muito aos casos específicos de treinamento, levando ao overfitting.

![Oversampling and Undersampling](/posts/ml-class-imbalance/resampling.png)

Ao usar técnicas de reamostragem é importante ressaltar que o modelo nunca deve ser testado nos dados transformados, o que pode levar ao overfitting do modelo. A reamostragem é uma técnica usada durante o treino, mas a avaliação do modelo deve considerar os dados em sua distribuição original.

Outras técnicas mais avançadas foram pensadas para mitigar esses riscos do undersampling e oversampling, mas que seguem os mesmos princípios.

O SMOTE (Synthetic Minority Oversampling Technique) é um método alternativo de oversampling, que cria novos exemplos sintéticos da classe minoritária, através de combinações de exemplos existentes. Esse método utiliza o algoritmo KNN para identificar e criar novas amostras que sigam a tendência dos dados originais.

![SMOTE](/posts/ml-class-imbalance/smote.png)

Outra técnica bastante utilizada é conhecida como Tomek Links. Ela identifica pares de exemplos de classes opostas que sejam muito próximos, e remove esses exemplos. Isso cria uma separação mais evidente entre os dados, facilitando o processo de classificação. Apesar dessa separação ajudar o modelo a aprender melhor, isso pode torná-lo menos robusto, pois perde a noção de como lidar com exemplos na fronteira de decisão.

![Tomek Links](/posts/ml-class-imbalance/tomek-links.png)

Mas, afinal, como utilizar essas técnicas? Uma abordagem interessante é o Two-Phase Learning, ou aprendizado em duas etapas, que consiste em treinar um modelo inicial simples para aprender com o conjunto de dados reamostrado, focando em padrões gerais, e em seguida ajustar o modelo usando o conjunto de dados original, utilizando um modelo mais robusto.

Na prática, você pode começar com um weak learner treinado nos dados reamostrados, usando oversampling ou undersampling para lidar com o desbalanceamento. Esse modelo gera previsões que podem ser usadas como uma nova feature. Depois, você alimenta um segundo modelo com os dados originais, incluindo essa nova feature das previsões. Essa abordagem ajuda o segundo modelo a capturar padrões mais sutis e a se ajustar melhor às classes minoritárias.

### Modelagem

As técnicas de modelagem consistem em métodos de nível algorítmico que mantêm a distribuição de dados original, mas tornam o modelo mais robusto para classes desbalanceadas.

Esse ajuste dos modelos é feito através de mudanças na função de perda, que é essencialmente a forma que muitos modelos de machine learning aprendem. Nos modelos lineares, como regressão linear, a função de perda é usada para encontrar os coeficientes da reta que minimizam a soma dos erros quadrados.

Já em tarefas de classificação, a função de perda mais comum é chamada de Entropia Cruzada. Em ambos os casos, o peso é o mesmo para todas as instâncias de treinamento, o que significa que predições incorretas são penalizadas independentemente das classes. Para tornar o nosso modelo mais robusto para identificar fraudes, podemos customizar a função de perda, fazendo com que ele preste mais atenção na predição das classes minoritárias.

$$

CE(y, \hat{y}) = - \frac{1}{N} \sum_{i=1}^{N} y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i)

$$

Essa abordagem é chamada de “aprendizado sensível ao custo” e existem algumas abordagens conhecidas. Vamos discutir duas delas: class-balanced loss e focal loss.

A função de perda balanceada (class-balanced loss) por classe torna o peso das predições de cada classe inversamente proporcional ao número de amostras da classe no conjunto de treinamento. A ideia central é multiplicar o termo da perda original (geralmente entropia cruzada) por um peso inversamente proporcional à frequência da classe.

$$

W_i = \frac{1}{(1 - \beta) N_i + \beta}

$$

$$

CB(y, \hat{y}) = \frac{1}{N} \sum_{i=1}^{N} W_i \cdot CE(y_i, \hat{y}_i)

$$

Já a função de perda focal (focal loss) tem como objetivo principal incentivar o nosso modelo a focar o aprendizado nos exemplos mais difíceis, atribuindo um maior peso a esses valores. É uma variação da Entropia Cruzada, que coloca mais peso nos exemplos difíceis de classificar e reduz a influência dos exemplos fáceis.

$$

FL(y, \hat{y}) = - \frac{1}{N} \sum_{i=1}^{N} (1 - \hat{P}_i)^\gamma \cdot CE(y_i, \hat{y}_i)

$$

Há também quem defenda o uso de algoritmos de ensemble para resolver problemas de classes desbalanceadas. Apesar de sua utilização não ser inicialmente pensada para solucionar o problema de classes desbalanceadas e seu uso ser muito mais amplo, algoritmos de boosting favorecem a eficiência desses modelos.

Isso acontece porque os modelos de ensemble que utilizam algoritmos de boosting, como AdaBoost, por exemplo, possuem um objetivo similar à função de focal loss.

Esses algoritmos utilizam todo o conjunto de dados para treinar classificadores de forma sequencial, dando foco às instâncias difíceis, com o objetivo de classificar corretamente, na próxima iteração, os exemplos que foram classificados incorretamente na iteração anterior.

Assim, ele dá mais atenção aos exemplos mais difíceis de classificar, e essa atenção é medida por um peso, que inicialmente é igual para todas as instâncias. Após cada iteração, os pesos das instâncias classificadas incorretamente são aumentados; por outro lado, os pesos das instâncias classificadas corretamente são reduzidos.

![Ensemble Methods for Class Imbalance](/posts/ml-class-imbalance/ensembles.png)

Quem desejar se aprofundar no assunto, recomendo a leitura do artigo: [A Review on Ensembles for the Class Imbalance Problem: Bagging, Boosting, and Hybrid-Based Approaches](https://ieeexplore.ieee.org/document/5978225)

### Métricas

No nosso exemplo, observamos que menos de 1% das transações são consideradas fraudulentas. Muitas vezes essa diferença entre as classes pode ser ainda maior, mas vamos considerar essa distribuição para facilitar alguns cálculos.

O uso de métricas incorretas para avaliar esses problemas pode levar à aceitação de modelos ruins, que não aprenderam a detectar corretamente as classes minoritárias.

Ao usar uma métrica de acurácia (% de predições corretas), por exemplo, basta o modelo aprender a prever as transações sempre como verdadeiras, e a acurácia será de 99%, em razão da probabilidade dessas classes aparecerem ser muito baixa.

O que queremos não é prever corretamente as transações verdadeiras. Se fosse assim, esse modelo dummy bastaria. Nosso objetivo é prever corretamente a classe de interesse, no caso, a classe minoritária.

A matriz de confusão é um método de avaliação de modelos de classificação binária que pode nos ajudar a encontrar métricas mais úteis. Imagine dois modelos, A e B, que foram treinados usando o conjunto de dados mencionado acima e foram usados para fazer predições em dados novos, que nunca viram antes.

| Modelo A            | Fraude  | Transação |
| --------------------| ------- | --------- |
| Predição: Fraude    | 2       | 8         |
| Predição: Transação | 42      | 948       |

| Modelo B            | Fraude | Transação |
| ------------------- | -------| --------- |
| Predição: Fraude    | 9      | 49        |
| Predição: Transação | 1      | 941       |

Olhando para essas matrizes, qual modelo você escolheria? Ambos os modelos tiveram acurácia de 95%, mas, como vimos, essa não é a métrica mais adequada para avaliar modelos em problemas de classes desbalanceadas. Outras métricas que podemos analisar nesse caso são: precisão, recall e F1-score.

A precisão avalia quantos casos preditos como fraude foram realmente fraudulentos, ou seja, quantas transações realmente foram fraudulentas. Já o recall, ou sensibilidade, corresponde à porcentagem de fraudes reais que o modelo conseguiu capturar. Em tarefas de detecção de anomalias, essa é a métrica mais importante.

Isso significa que o modelo está conseguindo identificar a maior parte das fraudes existentes. Poucas fraudes estão sendo deixadas de fora. Se muitas fraudes reais não estão sendo detectadas pelo modelo, pode ser problemático em cenários onde a detecção é crucial, como no caso de fraudes de cartões, em que se busca evitar ao máximo os falsos negativos.

Por último, o F1 Score combina precisão e recall em um único valor, ou seja, é uma métrica que combina as duas anteriores, gerando uma avaliação mais geral do modelo. Em alguns casos, vamos querer maximizar o F1 Score; em outros, o ideal pode ser maximizar o recall, depende do problema que queremos resolver.

Vamos ver o cálculo dessas métricas para os modelos A e B:

|          | Acurácia | Precisão | Recall | F1   |
| -------- | -------- | -------- | ------ | ---- |
| Modelo A | 0.95     | 0.02     | 0.1    | 0.03 |
| Modelo B | 0.95     | 0.15     | 0.9    | 0.26 |

Observando a avaliação dos modelos, podemos ver que, apesar da acurácia dos dois modelos, o Modelo B seria a escolha mais adequada, com base no seu alto recall. Lembrando que essa é uma simulação apenas para exemplificar e nos ajudar a entender algumas dessas métricas.

Quem quiser entender mais sobre como essas métricas são calculadas, indico o artigo: [The Relationship Between Precision-Recall and ROC Curves](https://ftp.cs.wisc.edu/machine-learning/shavlik-group/davis.icml06.pdf)

### Conclusões

O processo de construção de modelos robustos é sempre muito experimental: é preciso fazer ajustes até encontrar um resultado final satisfatório. Seja ajustando as métricas, reamostrando os dados ou adaptando a função de perda, cada abordagem traz seus próprios desafios e benefícios.

Como vimos, escolher as técnicas adequadas depende do problema que estamos tentando resolver e das limitações dos nossos dados. Afinal, o objetivo é sempre criar um modelo que não apenas acerte mais, mas que acerte o que realmente importa.

Portanto, da próxima vez que se deparar com um problema de classes desbalanceadas, lembre-se de algumas dessas estratégias que podem ajudar na eficácia do seu modelo.

### Referências

[1] C. Huyen, Designing Machine Learning Systems: An Iterative Process for Production-Ready Applications. Sebastopol, CA, USA: O'Reilly Media, 2022.

[2] Nilson Report, "Issue 1187," December 2020. <https://nilsonreport.com/newsletters/1187/>

[3] M. Galar, A. Fernandez, E. Barrenechea, H. Bustince, and F. Herrera, "A review on ensembles for the class imbalance problem: Bagging, Boosting, and Hybrid-based approaches," IEEE Transactions on Systems, Man, and Cybernetics, Part C (Applications and Reviews), vol. 42, no. 4, pp. 463-484, Jul. 2012. <https://doi.org/10.1109/TSMCC.2011.2161285>

[4] J. Davis, M. Goadrich. The relationship between Precision-Recall and ROC curves. In Proceedings of the 23rd international conference on Machine learning (ICML '06). Association for Computing Machinery, New York, NY, USA, 233–240, 2006. <https://doi.org/10.1145/1143844.1143874>

###

Agradeço quem acompanhou até aqui! Até a próxima :)
