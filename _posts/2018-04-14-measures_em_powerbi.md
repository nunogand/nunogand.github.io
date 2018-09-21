---
layout: post
title: "PowerBI - Listagem de Measures utilizadas para o estudo demográfico da lista de utentes"
description: "Listagem de Measures utilizadas para o estudo demográfico da lista de utentes."
categories: [PowerBi]
tags: [PowerBi, código, DAX]
comments: false
img: header_powerbi.jpg
---

Aquando do estudo da lista:

Listagem das Measures usadas:

Indice de Burgdofer
```SQL
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
```

Indice de Sundbarg
```SQL
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
```

Indice de Friz
```SQL
Friz =
IF (
    [Friz_cal] < 60;
    "População Envelhecida";
    IF ( [Friz_cal] < 160; "População madura"; "População jovem" )
)
```
De notar que faz a chamada a ```[Friz_cal]```... pura preguiça
```SQL
Friz_cal =
CALCULATE ( [População 0 a 19 anos] / [População 30 a 49 anos] * 100 )
```

Grau de Envelhecimento de Sauvy
```SQL
Grau de Envelhecimento de Sauvy =
IF (
    [População > 60 anos] / [População 0 a 19 anos]
        * 100
        > 30;
    "População velha";
    "N/A"
)
```

Indice de crianças (0-4) por mulher em idade fértil
```SQL
Indice de crianças (0-4) por mulher em idade fértil =
[População 0 a 4 anos] / [Mulheres em Idade fértil (15-49)]
```

Indice de dependencia de idosos
```SQL
Indice de dependencia de idosos =
[População > 65 anos] / [População 15 a 64 anos]
    * 100
```

Indice de Dependência Total
```SQL
Indice de Dependência Total =
 ( [População 0 a 14 anos] + [População > 65 anos] )
    / [População 15 a 64 anos]
    * 100
```

...no fundo, é ir repetindo sempre a mesma lógica

As idades:
É necessário criar a contagem do total de utentes com determinadas idades (agrupados)

Mulheres em idade fértil
```SQL
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
```

População entre 15 e 19 anos
```SQL
População 15 a 19 anos =
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 14
            && Utentes[Idade] < 20
    )
)
```

População com + de 65 anos
```SQL
População > 65 anos =
CALCULATE (
    COUNT ( Utentes[Idade] );
    FILTER (
        Utentes;
        Utentes[Idade] > 64
    )
)
```
...and so on.

