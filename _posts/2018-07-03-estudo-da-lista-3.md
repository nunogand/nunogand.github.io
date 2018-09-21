---
layout: post
title: "Estudo da lista de utentes 3"
description: "Importação das tabelas para PowerBI"
categories: [PowerBi]
tags: [PowerBi, código]
comments: false
img: header_powerbi.jpg
---
Procedimentos para importar os dados da tabela excel para o PowerBI:
1 obter dados - excel - ligar
* seleccionar "problemas.xlsx"
  - tabela 1
  - editar
  - abrir a janela do PowerQuery se esta ficar em segundo plano
  - mudar o nome de tabela1 para Problemas
* nova origem - excel - abrir o ficheiro "utentes"
  - seleccionar Tabela 1 -> ok
  - mudar o nome de tabela1 para Utentes
  - converter coluna utente para texto -> substituir a actual
* fechar e aplicar


Na interface principal do PowerBI:
* Abrir Utentes
  * seleccionar idade; Criar grupos
  - tipo de grupo: "Discretizar" com tamanho 5


* introduzir as measures/medidas (processo tedioso)
  * usar as medidas da página [https://nunogand.com/articles/2018-07/estudo-da-lista-medidas](https://nunogand.com/articles/2018-07/estudo-da-lista-medidas)


* distribuiçao por sexos
  - gráfico circular
  - Detalhes: Sexo
  - Valores: Sexo (Contagem de)
  - formatar cores de dados:
![#FFC0CB](https://placehold.it/15/FFC0CB/000000?text=+) #FFC0CB - Mulher
![#00BFFF](https://placehold.it/15/00BFFF/000000?text=+) #00BFFF - Homem


* Indices
  - Matriz
  -Valores: Burgdofer; Friz; Sauvy; Sundbarg
  -Formatar -> Valores -> Mostrar nas linhas (activar)
  - redimensionar


* Repetir em nova matriz para os outros indices


* Piramide etária:
  - importar visual personalizado (importar do marketplace)
  - procurar -> tornado -> Tornado Chart -> adicionar


* Tornado Chart
  - grupo: idade (posições armazéns) - ou "bins"
  - Legenda: Sexo
  - valores: Utente (contagem de)
  - formatar as cores


Nova Página
* Gráfico de colunas empilhadas
  - eixo: capitulo
  - Valor: quantidade de problemas
  - formatar: etiquetas de dados: activo


* Gráfico de colunas empilhadas
  - eixo: ICPC
  - Valor: quantidade de problemas
  - formatar: etiquetas de dados: activo
  - Filtros: ICPC: TOP N (15) pelo valor Qtd de problemas -> aplicar filtro

* Formato -> editar interacções
  - seleccionar primeiro gráfico; clicar em filtrar no segundo


<iframe width="560" height="315" src="https://www.youtube.com/embed/VB3YgkUr10E?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
