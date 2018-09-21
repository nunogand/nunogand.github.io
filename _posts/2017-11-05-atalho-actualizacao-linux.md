---
layout: post
title: Criação de script de actualização
description: "Criação de um simples atalho para evitar ter que estar sempre a digitar os comandos de actualização em Ubuntu"
date: 2017-10-14 18:07:19
categories: [Linux]
tags: [linux, Ubuntu, drivers]
img: ubuntu_logo.png
---
Isto não é exactamente um script mas antes um atalho que junta vários comandos sequenciais para actualizar o Ubuntu.

Basicamente isto:

{% highlight console %}
alias update='sudo apt update && sudo apt dist-upgrade -y && sudo apt autoremove -y && sudo apt autoclean'
{% endhighlight %}

Esta solução não é permanente. Em cada reboot o comando desaparece.
Uma forma simples de o manter permanente é colocá-lo dentro do ficheiro **~/.bash_aliases** (em Ubuntu).
{% highlight console %}
nano ~/.bash_aliases
{% endhighlight %}

