---
layout: post
title: "PowerBI - Dividir valores por condição"
description: "Experiência em DAX para seleccionar valores a partir de um slicer."
date: 2017-12-30 08:10:10
categories: [PowerBi]
tags: [PowerBi, código, DAX]
img: header_powerbi.jpg
---

1. Criar uma tabela com todas as condições.

{% highlight Rust %}
Condicoes =
VALUES ( Tabela1[Condicao] )
{% endhighlight %}

2. Criar uma relação entre "Condicoes" e "Tabela1".

3. Criar uma measure para as condições associadas.

{% highlight Rust %}
C_Associada =
VAR todasCondicoes =
    VALUES ( Condicoes[Condicao] )
VAR SelecionaUtentes =
    CALCULATETABLE (
        VALUES ( 'Tabela1'[Utente] ),
        FILTER ( ALL ( Tabela1 ), 'Tabela1'[Condicao] IN todasCondicoes )
    )
RETURN
    CALCULATE (
        IF (
            MIN ( 'Tabela1'[Utente] ) IN SelecionaUtentes,
            SUM ( Tabela1[Associado] ),
            BLANK ()
        ),
        ALL ( Condicoes[Condicao] )
    )
{% endhighlight %}

4. Criar uma measure para establecer ranking.

{% highlight Rust %}
RankingUtente =
RANKX ( ALL ( 'Tabela1'[Condicao] ), [Co-Cost],,, DENSE )
{% endhighlight %}


E basicamente é isto. Adaptado provavelmente da Community
