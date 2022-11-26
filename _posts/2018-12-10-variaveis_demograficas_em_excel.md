---
layout: post
title: Variáveis demográficas em Excel
description: Determinação de vários indicadores demográficos a partir de listagem de utentes
date: 2018-12-10
categories: [Excel]
tags: [Excel]
img: header_excel.webp
published: true
---
Assumindo listagem de utentes conforme:

|     A    |   B  |   C  |   D   |
|:--------:|:----:|:----:|:-----:|
| N Utente | Nome | Sexo | Idade |
| 1234567 | Abcd | M/F | 123 |



<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#aaa;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#aaa;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#aaa;color:#fff;background-color:#f38630;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-uys7{border-color:inherit;text-align:center}
.tg .tg-xldj{border-color:inherit;text-align:left}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-uys7">Indices</th>
    <th class="tg-uys7">Valores</th>
  </tr>
  <tr>
    <td class="tg-uys7">Burgdorfer</td>
    <td class="tg-xldj">=SE(((CONTAR.SE.S(D:D;">4";D:D;"<15"))/(CONTAR(A:A)*100-2,5))>((CONTAR.SE.S(D:D;">44";D:D;"<65"))/CONTAR(A:A)*100);"População Jovem";SE(((CONTAR.SE.S(D:D;">4";D:D;"<15"))/CONTAR(A:A)*100)<((CONTAR.SE.S(D:D;">44";D:D;"<65"))/CONTAR(A:A)*100+2,5);"População Velha";"População Madura"))</td>
  </tr>
  <tr>
    <td class="tg-uys7">Sundbarg</td>
    <td class="tg-xldj">=SE(CONTAR.SE(D:D;"<15")/CONTAR.SE.S(D:D;">14";D:D;"<50")*100>CONTAR.SE(D:D;">49")/CONTAR.SE.S(D:D;">14";D:D;"<50")*100;"População Progressiva";SE(CONTAR.SE(D:D;"<15")/CONTAR.SE.S(D:D;">14";D:D;"<50")*100>CONTAR.SE(D:D;">49")/CONTAR.SE.S(D:D;">14";D:D;"<50")*100;"População Regressiva";"População Estacionária"))</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Friz</td>
    <td class="tg-0pky">=SE(((CONTAR.SE(D:D;"<20"))/(CONTAR.SE.S(D:D;">29";D:D;"<50")))<60;"População Envelhecida";SE(((CONTAR.SE(D:D;"<20"))/(CONTAR.SE.S(D:D;">29";D:D;"<50")))<160;"População Madura";"População Jovem"))</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Grau de envelhecimento de Sauvy</td>
    <td class="tg-0pky">=SE(((CONTAR.SE(D:D;">59")/CONTAR.SE(D:D;"<20"))*100)>30;"População Velha";"N/A")</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Mulheres em Idade Fértil</td>
    <td class="tg-0pky">=CONTAR.SE.S(C:C;"F";D:D;">14";D:D;"<50")</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de crianças (0-4) por mulher em idade fértil</td>
    <td class="tg-0pky">=(CONTAR.SE(D:D;"<5")/(CONTAR.SE.S(D:D;">14";D:D;"<50";C:C;"F")))</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de dependencia de idosos</td>
    <td class="tg-0pky">=CONTAR.SE(D:D;">64")/CONTAR.SE.S(D:D;">14";D:D;"<65")*100</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de dependencia de jovens</td>
    <td class="tg-0pky">=CONTAR.SE(D:D;"<15")/CONTAR.SE.S(D:D;">14";D:D;"<65")</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de Dependência Total</td>
    <td class="tg-0pky">=(CONTAR.SE(D:D;"<15")+CONTAR.SE(D:D;">64"))/CONTAR.SE.S(D:D;">14";D:D;"<65")</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de envelhecimento</td>
    <td class="tg-0pky">=CONTAR.SE(D:D;">64")/CONTAR.SE(D:D;"<15")</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de juventude</td>
    <td class="tg-0pky">=CONTAR.SE(D:D;"<15")/CONTAR.SE(D:D;">64")*100</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de juventude da população em idade activa</td>
    <td class="tg-0pky">=CONTAR.SE.S(D:D;">14";D:D;"<40")/CONTAR.SE.S(D:D;">39";D:D;"<65")*100</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Indice de longevidade</td>
    <td class="tg-0pky">=CONTAR.SE(D:D;">74")/CONTAR.SE(D:D;">64")*100</td>
  </tr>
  <tr>
    <td class="tg-c3ow">Razao Crianças-Mulheres</td>
    <td class="tg-0pky">=CONTAR.SE(D:D;"<5")/CONTAR.SE.S(D:D;">14";D:D;"<50";C:C;"F")*100</td>
  </tr>
</table>

Fonte: [Estudo da lista de utentes - medidas](https://nunogand.com/2018/07/03/estudo-da-lista-medidas)
