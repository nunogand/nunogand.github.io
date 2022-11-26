---
layout: post
title: "Amostragem"
description: "Amostragem."
date: 2019-04-10 08:10:10
categories: [PowerBi]
tags: [PowerBi, código, DAX]
img: header_powerbi.webp
---

### Tipos de amostragem
https://towardsdatascience.com/sampling-techniques-a4e34111d808
A Teoria das Amostragens constitui hoje um campo bastante desenvolvido e amplo da Estatística, com vários elos, como a Teoria das Probabilidades e a Inferência Estatística.

Em nosso estudo, vamos nos restringir a uma visão mais ampla e simplificada da Teoria das Amostragens.

Segundo essa visão, podemos distinguir dois tipos de amostragem: a probabilística e a não-probabilística.

#### Amostragem Probabilística: 

É aquela em que todos os elementos da população têm probabilidade conhecida, diferente de zero, de ser incluídos na amostra, o que garante a representatividade da amostra em relação à população. Pode ser: aleatória, sistemática, estratificada e por conglomerado.

•	Amostragem Aleatória: Também chamada de aleatória simples, é aquela na qual todos os elementos da população têm a mesma probabilidade de ser escolhido como elemento da amostra; os elementos da amostra são, por isso, escolhidos por sorteio. Para que o sorteio possa ser realizado, é necessário que os elementos da população estejam identificados.
Todos  os  elementos  da  população  têm  a  mesma  probabilidade  de  pertencer  àamostra.{As  duas    técnicas  mais  utilizadas  para  escolher uma amostra aleatória simples são a  técnica  da  lotaria  e  a  técnica  de  números aleatórios.
•	Amostragem Sistemática: Os elementos que constituirão a amostra são escolhidos segundo um fator de repetição (um intervalo fixo). Sua aplicação requer que a população esteja ordenada segundo um critério qualquer, de modo que cada um de seus elementos possa ser unicamente identificado pela sua posição (uma lista que englobe todos os seus elementos, uma fila de pessoas, etc.). O fator de repetição é determinado dividindo-se o tamanho da população (N) pelo tamanho da amostra (n). O primeiro elemento é escolhido por sorteio, dentre os elementos da população que ocupam a posição igual ou inferior a N/n (fator de repetição); em seguida, selecionam-se os elementos a cada intervalo N/n.

•	Amostragem Estratificada: Quando a população está dividida em estratos, a amostra também será estratificada, de tal modo que o tamanho dos estratos na amostra seja proporcional ao tamanho dos estratos correspondentes na população.

•	Amostragem por Conglomerado: Consiste em subdividir a população que se vai investigar em grupos fisicamente próximos, independentemente de eles serem homogêneos ou não. Em tais conglomerados, são agregados os elementos populacionais com estreito contato físico (como casas, quarteirões, bairros, cidades, regiões, etc.).

#### Amostragem não-probabilística: 

A escolha dos elementos da amostra é feita de forma não-aleatória, justificadamente ou não. A escolha é intencional ou por conveniência, considerando as características particulares do grupo em estudo ou ainda o conhecimento que o pesquisador tem daquilo que está investigando.

Na amostragem não-probabilística também se podem utilizar quotas, iguais ou diferentes.


Universo Conjunto total de  sujeitos  que  partilham  ou  apresentam características comuns.Ex: Professores do 1º ciclo de Portugal.PopulaçãoConjunto    de    sujeitos    que    partilham    ou    apresentam  características  comuns  de  uma  determinada área.Ex: Professores do 1º ciclo da área da DREL.
Amostra Representação  de  sujeitos  de  uma  determinada  população  com  características  relevantes  para  o estudo.

### AMOSTRAGEM

Amostragem “é uma técnica e/ou conjunto de procedimentos necessários para descrever e selecionar as amostras, de maneira aleatória ou não, e quando bem utilizado é um fator responsável pela determinação da representatividade da amostra.” (LEONE, Rodrigo. ET AL, 2009)

Quando se deseja colher informações sobre um ou mais aspectos de um grupo grande ou numeroso, verifica-se, muitas vezes, ser praticamente impossível fazer um levantamento do todo. Daí a necessidade de investigar apenas uma parte da população ou universo. O problema da amostragem é, portanto, escolher uma parte (ou amostra), de tal forma que ela seja a mais representativa possível do todo e, a partir dos resultados obtidos, relativos a essa parte, pode inferir, o mais legitimamente possível, os resultados da população total, se esta fosse verificada (pesquisa censitária).

1º. Universo ou população: é o conjunto de seres animados ou inanimados que apresenta pelo menos uma característica em comum.

2º. Amostra: é uma porção ou parcela, convenientemente selecionada do universo (população); é um subconjunto do universo. (MARCONI e LAKATOS, 2002)

Para que todo o esboço da Estatística possa ser feito, temos de ter população. Ao conjunto de seres portadores de, pelo menos, uma propriedade comum chamamos população estatística ou universo estatístico. Uma amostra é o subconjunto finito de uma população e pode ajudar na tarefa do pesquisador, para que ele não precise usar toda a população em sua pesquisa, seus gráficos e suas tabelas. Existe um processo particular para catar amostras, que garante, tanto quanto possível, o acaso na escolha. Assim, cada elemento da população passa a ter a mesma oportunidade em ser selecionado, dando à amostra o caráter de representatividade. (COSTA, 2005).

Distinguiremos dois tipos de amostragem: a probabilística e a não probabilística.

#### Amostragem Probabilística

As técnicas de amostragem probabilísticas, ou aleatórias, ou ao acaso, desenvolveram-se, sob o aspecto teórico, principalmente a partir da década de 30. (MARCONI e LAKATOS, 2002). Ela é “aquela em que cada elemento da população tem uma chance conhecida e diferente de zero de ser selecionado para compor a amostra.” (MATTAR, 2001).

Sua característica primordial é poderem ser submetidas a tratamento estatístico, que permite compensar erros amostrais e outros aspectos relevantes para a representatividade e significância da amostra. (MARCONI e LAKATOS, 2002).

##### Aleatória Simples

Para Yule Kendall, “a escolha de um indivíduo, entre uma população, é ao acaso (aleatória), quando cada membro da população tem a mesma probabilidade de ser escolhido”.

A amostragem aleatória simples é o tipo de amostragem probabilística mais utilizada. Dá exatidão e eficácia à amostragem, além de ser o procedimento mais fácil de ser aplicado – todos os elementos da população têm a mesma probabilidade de pertencerem à amostra.

Neste tipo de amostra a premissa é de que cada componente da população estudada tem a mesma chance de ser escolhido para compor a amostra e a técnica que garante esta igual probabilidade é a seleção aleatória de indivíduos, por exemplo, através de sorteio.

O processo de amostragem aleatória simples lança mão da tabela de números aleatórios. Essas tabelas forma obtidas por meio de computadores, com complexa programação baseada em cálculos estatísticos, e fornecem uma amostra inteiramente ao acaso de números dispostos em colunas e linhas, por várias páginas.

A amostra aleatória simples pode apresentar dois tipos:

   * Sem reposição, o mais utilizado, em que cada elemento só pode entrar uma vez para a amostra;

   * Com reposição, quando os elementos da população podem entrar uma vez para a amostra. (MARCONI e LAKATOS, 2002).

   * Sistemática

Segundo BACELAR (1999), a amostragem aleatória sistemática é uma variante da amostragem aleatória simples que se usam quando os elementos da população estão organizados de forma seqüencial.

É uma variação de precedente. A população, ou a relação de seus componentes, deve ser ordenada, de forma tal que cada elemento seja identificado, univocamente, pela posição.

Supondo um sistema de indexação por cartões dos componentes de uma empresa, onde cada elemento é representado por um e somente um cartão num total de 1.000, e que se desse uma amostra de 100 elementos, a serem pesquisados acerca da alimentação fornecida no refeitório da organização, escolhe-se aleatoriamente um número entre 1 e 10, por exemplo, o 8. A seguir, podem-se escolher os componentes cujos cartões estejam nas seguintes ordens: 8, 12 , 18, 28, 38, 48, 58, 68, 78, 88, 98...,988, 998.

   ####  Aleatória de Múltiplo Estágio

Consiste em dois ou mais estágios, com o emprego de amostragem aleatória simples e/ou sistemática em cada um.

Por exemplo, numa pesquisa a seqüência da amostragem, para o múltiplo estágio, pode ser: aleatória simples, aleatória simples e aleatória simples ou sistemática. Mas poderia ser em outro caso, aleatória simples, sistemática, aleatória simples; sistemática, aleatória simples, sistemática; ou outra combinação qualquer.

   ##### Por Área

Uma das formas de variação a amostragem aleatória simples é por área, utilizada quando não se conhece a totalidade dos componentes da população, ou é passível de ser encontrada mais facilmente, por meio de mapas cartográficos ou fotos aéreas, como geralmente ocorre com pesquisas da área rural. Se a apresentação dos mapas já é quadriculada, podem-se tomar os quadrados como unidades; caso contrário, devem ser divididos.

    ##### Por grupos ou conglomerados

A amostragem por conglomerados ou grupos é rápida, barata e eficiente, e a unidade de amostragem não é mais o indivíduo, mas um conjunto, facilmente encontrado e identificado, cujos elementos já estão ou podem ser rapidamente cadastrados. O único problema é que os conglomerados raramente são do mesmo tamanho, o que torna difícil ou até mesmo não permite controlar a amplitude da amostra. Recorre-se geralmente a técnicas estatísticas para contornar tal dificuldade.

    ##### De Vários Degraus ou Estágios Múltiplos

Este tipo de a amostragem combina as anteriores, em duas, três, quatro ou mais etapas. Na realidade, a amostragem de estágios múltiplos pode ter n de degraus e utilizar, segundo a necessidade, a aleatória simples, a sistemática, por área e por conglomerados, todas estas técnicas ou algumas, e quantas vezes forem necessárias.

    ##### De Fases Múltiplas, Multifásica ou em Várias Etapas

Tecnicamente difere da anterior, pois o procedimento é diverso. Consiste basicamente no sorteio de uma amostragem bem ampla que é submetida a uma investigação rápida e pouco profunda (primeira fase); o conhecimento obtido nessa fase permite extrair, da amostra mais ampla, uma menor, que será objeto de uma pesquisa aprofundada (segunda fase). (MARCONI e LAKATOS, 2002).

    #### Estratificada

Esta técnica de amostragem usa informação existente sobre a população para que o processo de amostragem seja mais eficiente. A lógica que assiste à estratificação de uma população é a de identificação de grupos que variam muito entre si no que diz respeito ao parâmetro em estudo, mas muito pouco dentro de si, ou seja, cada um é homogêneo e com pouca variabilidade. As três etapas para se definir uma amostra estratificada são:definir os estratos; selecionar os elementos dentro de cada estrato mediante um processo aleatório simples; conjugar os elementos selecionados em cada estrato, que na sua totalidade constituem a amostra.Este método de amostragem estratificada tem a vantagem de ser mais eficiente do que os métodos de amostragem simples ou sistemática, pois é mais econômico em termos de tempo e dinheiro e fornece resultados com menor probabilidade de erro associada. (COUTINHO, 2009).

   #### Amostra-tipo, Amostra Principal, Amostra a Priori ou Amostra-padrão

Consiste não em uma diferença técnica em relação as já descritas, mas no uso particular delas, em situação específica. Geralmente as amostras são constituídas para determinado estudo em função dele. Entretanto, principalmente os institutos de pesquisa, que constantemente estão realizando diferentes tipos de estudos, podem ter interesse em constituir uma amostra-tipo, isto é, uma amostra bem ampla, muito mais numerosa do que as utilizadas para pesquisas específicas; nestas, realizar-se-ia o sorteio da amostra da amostra definitiva entre a amostra principal. (MARCONI e LAKATOS, 2002).

   ### Amostragem não probabilística

“Aquela em que a seleção dos elementos da população para compor a amostra depende ao menos em parte do julgamento do pesquisador ou do entrevistador no campo. Não há nenhuma chance conhecida de que um elemento qualquer da população venha a fazer parte da amostra” (MATTAR, 2001).

A característica principal das técnicas de amostragem não probabilística é a de que, não fazendo uso de formas aleatórias e seleção, torna-se impossível a aplicação de fórmulas estatísticas para o cálculo, por exemplo, entre outros, de erros de amostra. Dito de outro modo, não podem ser objetos de certos tipos de tratamentos estatísticos. (MARCONI e LAKATOS, 2002).

    #### Intencional

O tipo mais comum de amostra não probabilística é a denominada intencional. Nesta, o pesquisador está interessado na opinião (ação, intenção etc.) de determinados elementos da população, mas não representativos dela. Seria, por exemplo, o caso de se desejar saber como pensam os líderes de opinião de determinada comunidade. O pesquisador não se dirige, portanto, à “massa”, isto é, a elementos representativos da população geral, mas àqueles, segundo seu entender, pela função desempenhada, cargo ocupado, prestígio social, exercem as funções de líderes de opinião na comunidade. Pressupõe que estas pessoas, por palavras, atos ou atuações, têm a propriedade de influenciar a opinião dos demais.

Uma vez aceitas as limitações da técnica, ela tem a sua validade dentro de um contexto especifico.

    #### Por “Juris”

Técnica utilizada principalmente quando se desejam obter informações detalhadas, durante certo espaço de tempo, sobre questões particulares.

A utilização mais comum de “júris” prende-se, em geral, a estudos realizados por órgãos oficiais, principalmente sobre orçamento familiar ou programas de rádio e TV (audiência).

Outros exemplos poderiam apontar: correlação entre orçamento familiar e hábitos alimentares; utilização diária dos aposentos da residência; comportamento das crianças em relação aos animais domésticos.

    #### Por Tipicidade

Em determinados casos, considerações de diversas ordens impedem a escolha de uma amostra probabilística, ficando a cargo do pesquisador a tentativa de buscar, por outras vias, uma amostra representativa. Uma das formas é a procura de um subgrupo que seja típico, em relação à população como um todo. Segundo as palavras de Ackoff (1975:161), “tal subgrupo é utilizado como ‘barômetro’ da população. Restringem-se as observações a ele e as conclusões obtidas são generalizadas para o total da população”.

Como a amostragem por tipicidade sofre das mesmas restrições aplicáveis a outras técnicas não probabilísticas, isto é, os erros de amostragem e desvios não podem ser computados, tal técnica deve restringir-se ás situações em que: (a) os possíveis erro não apresentam gravidade maior; e (b) é praticamente impossível a amostragem probabilística. (MARCONI e LAKATOS, 2002).

    #### Por Quotas

Este tipo de amostragem pode considerar-se análogo ao método de amostragem estratificada, mas com um aspecto que lhe faz toda a diferença: em vez de se escolher uma amostra aleatória dentro de cada um dos estratos da etapa final, escolhe-se uma amostra não aleatória de tamanho determinado pela fracção de amostragem. Contudo, e segundo HILL ET AL (2002), há duas grandes desvantagens com este método de amostragem: primeiro, embora o número de casos em cada um dos estratos seja proporcional ao número de casos no mesmo estrato do Universo, a amostra de casos dentro do estrato, por não ser escolhida ao acaso, não é necessariamente representativa dos casos do estrato correspondente ao Universo. (COUTINHO, 2009)

A amostragem por quotas pressupõe três etapas: (1) classificação da população em termos de propriedades que se presume ser relevantes para a característica a estudar, (2) construção de uma “maqueta” da população a ser pesquisada, com a determinação, relativa à amostra total, da proporção da população que deve ser colocada em cada classe ou estrato, (3) fixação de quotas para cada entrevistador, que terá a responsabilidade de selecionar as pessoas a serem pesquisadas, de tal modo que a amostra total venha a conter a proporção de cada classe ou estrato tal como foi fixado na segunda etapa.

http://www.manoel.pro.br/quantitativos7.pdf
