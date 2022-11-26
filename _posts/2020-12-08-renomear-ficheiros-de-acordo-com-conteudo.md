---
layout: post
title: Renomear ficheiros de texto de acordo com conteúdo em UNIX
description: "Procedimento para renomear ficheiros de texto de acordo com partes do seu conteúdo em UNIX"
date:   2020-12-08 16:10:07
categories: [Linux]
tags: [linux, UNIX]
img: ubuntu_logo.webp
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

Exercício parecido: tenho 2 ficheiros com o mesmo nome mas extensões diferente: uma foto e um ficheiro .txt com informações sobre a foto. Pretendo renomear o ficheiro .webp de acordo com o conteúdo de uma determinada linha do ficheiro .TXT

Oneliner:
{% highlight console %}
for f in *.txt; do d="$(sed -n 3p "$f" |cut -d'"' -f 4).webp"; if [ ! -f "$d" ]; then mv ${f%.*}.webp "$d"; else echo "Ficheiro '$d' já existe! Ignorado '$f'"; fi; done
{% endhighlight %}

_d="$(sed -n 3p "$f" |cut -d'"' -f 4).webp"_ cria o nome do ficheiro final a partir do texto do primeiro ficheiro;

_mv ${f%.*}.webp "$d"_ a única dificuldade do scrip; a expressão _${f%.*}.webp_ pega no ficheiro original e substitui a extensão pela extensão que quero renomear.

Podia ter feito isto manualmente? Não...

