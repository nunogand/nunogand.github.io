---
layout: page
title: Números do site
categories: [Webdesign]
tags: [HTML, Webdesign, código]
img: header_webdesign.jpg
description: "Página de estatística do site"
---

<div><blockquote id="error-chart" style="display: none"></blockquote></div>

Alguns gráficos que mostram a evolução da página.

### Estatísticas gerais

Os principais numeros gerados automaticamente. 

<table class="center">
  <tr>
    <th>Total de artigos</th>
    <td id="TotalPosts"></td>
  </tr>
  <tr>
    <th>Tags</th>
    <td id="TotalTags"></td>
  </tr>
  <tr>
    <th>Palavras</th>
    <td id="TotalWords"></td>
  </tr>
  <tr>
    <th>Média de palavras</th>
    <td id="AvgWords"></td>
  </tr>
</table>

Tabelas são ok... Gráficos são muito ok!

### Distribuição de artigos por mês

Vamos ver em que mês do ano sou mais produtivo ao longo do tempo:

<canvas id='stacked-bar-date-js' class='chart'></canvas>

Nem sempre existem ideias novas 😛

### Temas quentes por ano

Verificar a evolução dos temas ao longo dos anos:

<canvas id='stacked-bar-js' class='chart'></canvas>

São apenas dados.

### Blog's tags overview

Para ver quais são os principais tópicos deste blogue (é mesmo isso?), no meu caso utilizo as tags como categoria com uma (ou mais) tag por artigo.
Além disso, trazendo um caso de uso para um gráfico do tipo radar, este também mostra a linha editorial do blogue.

<canvas id='radar-js' class='chart'></canvas>
<!-- <canvas id='pie-js' class='chart'></canvas> -->

Demasiadas etiquetas podem significar que precisam de ser consolidadas.
Como escrevo aleatoriamente sobre coisas com que me deparo, o conteúdo é um pouco diversificado.

### Crescimento do conteúdo

Outra vista da atividade do blogue, desta vez contabilizando o número médio de palavras (o número de palavras é dividido, para caber no gráfico).

<canvas id='bubble-js' class='chart'></canvas>

Alguns tópicos podem precisar de menos palavras do que outros. 📝
A maior parte dos artigos são uma ajuda para a minha memória, ou um exercício para compreender melhor o assunto. Nunca é perfeito, volto muitas vezes a artigos antigos para corrigir gralhas e tentar melhorá-los.

### Historial de publicações

Vamos analisar com este gráfico o número de artigos publicados ao longo dos anos.
É um bom indicador para ver a atividade real do site.

<canvas id='mixed-js' class='chart'></canvas>

Pode-se ver a taxa de crescimento de artigos com a linha em comparação com a produtividade do ano com a barra.
Para já, está a crescer de forma constante, enquanto tiver temas que alimentem a minha motivação, vou continuar assim 😃.


<script src="https://cdn.jsdelivr.net/npm/chart.js@3.2.1/dist/chart.min.js" integrity="sha256-uVEHWRIr846/vAdLJeybWxjPNStREzOlqLMXjW/Saeo=" crossorigin="anonymous"></script>
<script src="{{ '/custom/data/stats.js' | prepend: site.url }}"></script>
