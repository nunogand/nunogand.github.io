---
layout: post
title: Power Query - converter valores isolados para coluna
description: Importar vários ficheiros com Power Query utilizando valores do cabeçalho como conteúdo de colunas
date: 2020-02-24
categories: [Excel]
tags: [Excel]
img: header_excel.webp
published: true
---

Imaginemos um ficheiro excel (ou CSV...) com a seguinte estrutura:


texto_header

|     a     | Cat_A | Cat_B |
|-----------|-------|-------|
| 1234      | a     | b     |
| 1235      | a     | c     |
| 1237      | w     | g     |
| 1238      | d     | f     |
| 1239      | h     | h     |

O que se pretende é o seguinte:

|     a     | Cat_A | Cat_B |texto_header|
|-----------|-------|-------|------------|
| 1234      | a     | b     |texto_header|
| 1235      | a     | c     |texto_header|
| 1237      | w     | g     |texto_header|
| 1238      | d     | f     |texto_header|
| 1239      | h     | h     |texto_header|

Como fazer em Power Query (de forma a automatizar a coluna extra):

Criar uma função extra (clicar no fx da barra de fórmulas) após um qualquer passo do tratamento do ficheiro exemplo e escrever:
{% highlight console %} = Record.Field(#"nome da última acção"{índice},"Coluna1"){% endhighlight %}
Sendo que:
#"nome da última acção" - é o nome que surge na coluna à direita
{índice} - é o número da linha (começa em zero) que queremos guardar e
"Coluna1" - é o nme da coluna onde está essa mesma linha

No fundo estamos a criar variáveis.
Passo seguinte é criar nova função personalizada (fx) com a referência do último passo em que lidamos com o ficheiro exemplo (algo como = #"nome da última acção").

Para inserir os valores numa nova coluna basta criar uma coluna personalizada.
