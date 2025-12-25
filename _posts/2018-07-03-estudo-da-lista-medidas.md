---
layout: post
title: "Estudo da lista de utentes - medidas"
description: "Measures para PowerBI"
categories: [PowerBi]
tags: [PowerBi, código, DAX]
comments: false
img: header_powerbi.webp
---
{% highlight console %}
Mulheres em Idade fértil (15-49) = 
CALCULATE (
    COUNT ( Utentes[Utente] );
    FILTER (
        Utentes;
        Utentes[Sexo] = "Mulher"
            && Utentes[Idade] < 50
            && Utentes[Idade] > 14
    )
)
{% endhighlight %}
{% highlight console %}
População > 50 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 49
    )
)
{% endhighlight %}
{% highlight console %}
População > 60 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 59
    )
)
{% endhighlight %}
{% highlight console %}
População > 65 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 64
    )
)
{% endhighlight %}
{% highlight console %}
População > 75 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 74
    )
)
{% endhighlight %}
{% highlight console %}
População 0 a 14 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
             Utentes[Idade] < 15
    )
)
{% endhighlight %}
{% highlight console %}
População 0 a 19 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
             Utentes[Idade] < 20
    )
)
{% endhighlight %}
{% highlight console %}
População 0 a 4 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
             Utentes[Idade] < 5
    )
)
{% endhighlight %}
{% highlight console %}
População 15 a 19 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 14
            && Utentes[Idade] < 20
    )
)
{% endhighlight %}
{% highlight console %}
População 15 a 39 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 14
            && Utentes[Idade] < 40
    )
)
{% endhighlight %}
{% highlight console %}
População 15 a 49 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 14
            && Utentes[Idade] < 50
    )
)
{% endhighlight %}
{% highlight console %}
População 15 a 64 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 14
            && Utentes[Idade] < 65
    )
)
{% endhighlight %}
{% highlight console %}
População 30 a 49 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 29
            && Utentes[Idade] < 50
    )
)
{% endhighlight %}
{% highlight console %}
População 40 a 64 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 39
            && Utentes[Idade] < 65
    )
)
{% endhighlight %}
{% highlight console %}
População 45 a 64 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 44
            && Utentes[Idade] < 65
    )
)
{% endhighlight %}
{% highlight console %}
População 5 a 14 anos = 
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 4
            && Utentes[Idade] < 15
    )
)
{% endhighlight %}
{% highlight console %}
Utentes total = count(Utentes[Utente])
{% endhighlight %}
{% highlight console %}
Burgdofer = 
IF (
    ( [População 5 a 14 anos] / [Utentes total] * 100 ) - 2,5
        > [População 45 a 64 anos] / Utentes[Utentes total] * 100;
    "População Jovem";
    IF (
        ( [População 5 a 14 anos] / [Utentes total] * 100 )
            < [População 45 a 64 anos] / Utentes[Utentes total]
            * 100 + 2,5;
        "População Velha";
        "População Madura"
    )
)
{% endhighlight %}
{% highlight console %}
Friz_cal = DIVIDE([População 0 a 19 anos];[População 30 a 49 anos])
{% endhighlight %}
{% highlight console %}
Friz = 
IF (
    [Friz_cal] < 60;
    "População Envelhecida";
    IF ( [Friz_cal] < 160; "População madura"; "População jovem" )
)
{% endhighlight %}
{% highlight console %}
Grau de Envelhecimento de Sauvy = 
IF (
    [População > 60 anos] / [População 0 a 19 anos]
        * 100
        > 30;
    "População velha";
    "N/A"
)
{% endhighlight %}
{% highlight console %}
Indice de crianças (0-4) por mulher em idade fértil = 
[População 0 a 4 anos] / [Mulheres em Idade fértil (15-49)]
{% endhighlight %}
{% highlight console %}
Indice de dependencia de idosos = 
[População > 65 anos] / [População 15 a 64 anos]
    * 100
{% endhighlight %}
{% highlight console %}
Indice de dependencia de jovens = 
[População 0 a 14 anos] / [População 15 a 64 anos]
    * 100
{% endhighlight %}
{% highlight console %}
Indice de Dependência Total = 
 ( [População 0 a 14 anos] + [População > 65 anos] )
    / [População 15 a 64 anos]
    * 100
{% endhighlight %}
{% highlight console %}
Indice de envelhecimento = 
[População > 65 anos] / [População 0 a 14 anos]
    * 100
{% endhighlight %}
{% highlight console %}
Indice de juventude = [População 0 a 14 anos]/[População > 65 anos]*100
{% endhighlight %}
{% highlight console %}
Indice de juventude da população em idade activa = [População 15 a 39 anos]/[População 40 a 64 anos]*100
{% endhighlight %}
{% highlight console %}
Indice de longevidade = [População > 75 anos]/[População > 65 anos]*100
{% endhighlight %}
{% highlight console %}
Razao Crianças-Mulheres = [População 0 a 4 anos]/[Mulheres em Idade fértil (15-49)]*100
{% endhighlight %}
{% highlight console %}
Sundbarg = 
IF (
    [População 0 a 14 anos] / [População 15 a 49 anos]
        * 100
        > [População > 50 anos] / [População 15 a 49 anos]
        * 100;
    "População progressiva";
    IF (
        [População 0 a 14 anos] / [População 15 a 49 anos]
            * 100
            < [População > 50 anos] / [População 15 a 49 anos]
            * 100;
        "População regressiva";
        "População estacionária"
    )
)
{% endhighlight %}
