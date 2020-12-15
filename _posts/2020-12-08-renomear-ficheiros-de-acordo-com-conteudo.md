---
layout: post
title: Renomear ficheiros de texto de acordo com conteúdo em UNIX
description: "Procedimento para renomear ficheiros de texto de acordo com partes do seu conteúdo em UNIX"
date:   2020-12-08 16:10:07
categories: [Linux]
tags: [linux, UNIX]
img: ubuntu_logo.png
---
A meio de outro projecto surgiu a tarefa: renomear mais de 500 ficheiros de texto - no caso produzidos pelo BeautifulSoup - de forma a que o nome de cada ficheiro reflita o conteúdo - neste caso um número ordenado. 

Em primeiro lugar, o formato do ficheiro (no caso não de texto mas sim com conteúdo YML)
{% highlight console %}
---
Z: a
Y: b
X: c
W: d
V: e
U: f
t: g
S: h
R: i
---
{% endhighlight %}

Pretende-se renomear todos os ficheiros de acordo com a lógica 12345.txt -> b.txt

Script oneliner (sed e cut):
{% highlight console %}
for f in *.txt; do d="$(sed -n 2p "$f" | cut --delimiter=" " -f 2).txt"; if [ ! -f "$d" ]; then mv "$f" "$d"; else echo "Ficheiro '$d' já existe! Ignorado '$f'"; fi; done
{% endhighlight %}

ou a versão em script:
{% highlight console %}
#!/bin/sh
for f in *.txt; do
    d="$(sed -n 2p "$f" | cut --delimiter=" " -f 2).txt"
    if [ ! -f "$d" ]; then
        mv "$f" "$d"
    else
        echo "Ficheiro '$d' já existe! Ignorado '$f'"
    fi
done
{% endhighlight %}

A receita funciona independentemente do número de ficheiros envolvidos.

Podia ter feito isto manualmente? Não...

