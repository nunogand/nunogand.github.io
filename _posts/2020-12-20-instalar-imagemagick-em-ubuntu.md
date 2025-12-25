---
layout: post
title: Instalar ImageMagick em Ubuntu
description: "Instalação de ImageMagick em Ubuntu - não é tão simples como poderia parecer"
date:   2020-12-20 08:10:00
categories: [Linux]
tags: [linux, UNIX]
img: ubuntu_logo.webp
---
De acordo com as instruções oficiais [ImageMagick - Install from source](https://imagemagick.org/script/install-source.php), a instalação em Ubuntu do pacote ImageMagick deveria ser algo tão simples como:
{% highlight console %}
git clone https://github.com/ImageMagick/ImageMagick.git ImageMagick-7.0.10
cd ImageMagick-7.0.10
./configure
make
{% endhighlight %}
Tudo corre muito bem até à parte em que se tenta efectivamente usar o programa... a maior parte das dependências não são instaladas (pelo menos na minha instalação Ubuntu) e ficamos com um programa que manipula imagens mas não as consegue ler.
Solução: 
**Instalar as librarias de desenvolvimento do Ubuntu.**
Abrir o programa "Software & Updates" e activar a opção "Source Code"
Depois:
{% highlight console %}
sudo apt build-dep imagemagick
{% endhighlight %}
Isto vai demorar... cerca de 800Mb pelo menos comigo.
Depois sim, seguir as instruções oficiais, no caso desta forma:
{% highlight console %}
sudo apt-get install checkinstall libwebp-dev libopenjp2-7-dev librsvg2-dev libde265-dev libheif-dev
./configure --with-modules --enable-shared
make
sudo make install
sudo ldconfig /usr/local/lib
{% endhighlight %}
