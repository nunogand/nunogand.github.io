---
layout: post
title: Instalar suporte a L2TP/IPsec em Ubuntu
description: "Instalação do suporte a ligações VPN L2TP/IPsec em Ubuntu"
date:   2022-01-17 04:12:00
categories: [Linux]
tags: [linux, UNIX]
img: ubuntu_logo.png
---
Apesar do Ubuntu trazer por defeito um cliente para ligações VPN o mesmo não suporta **L2TP/IPsec**. É possível contudo adicionar essa funcionalidade ocm um plugin para o efeito.

{% highlight console %}
sudo add-apt-repository ppa:nm-l2tp/network-manager-l2tp
sudo apt update
sudo apt install network-manager-l2tp  network-manager-l2tp-gnome
{% endhighlight %}

Depois, é só seguir os passos usuais para configurar a ligação.
