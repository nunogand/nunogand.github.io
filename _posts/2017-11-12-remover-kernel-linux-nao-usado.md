---
layout: post
title: Como remover os kernels antigos em Ubuntu
description: "Procedimento para remover kernels não em uso (Ubuntu 17.10)"
date:   2017-11-12 22:07:19
categories: [Linux]
tags: [linux, Ubuntu, kernel]
img: ubuntu_logo.png
---
Após algum tempo surgiu a dúvida de como remover as versões antigas do kernel do Ubuntu que vão ficando após cada actualização. nada que o Google não resolva.
Em primeiro lugar, listar todos os kernels em uso com o comando
{% highlight console %}
dpkg -l | grep linux-image | awk '{print$2}'
{% endhighlight %}
Resultado:
{% highlight console %}
$ dpkg -l | grep linux-image | awk '{print$2}'
linux-image-4.10.0-19-generic
linux-image-4.10.0-35-generic
linux-image-4.10.0-37-generic
linux-image-4.13.0-16-generic
linux-image-4.13.11-041311-generic
linux-image-4.13.12-041312-generic
linux-image-4.13.4-041304-generic
linux-image-4.13.5-041305-generic
linux-image-4.13.6-041306-generic
linux-image-4.13.7-041307-generic
linux-image-4.13.8-041308-generic
linux-image-4.13.9-041309-generic
linux-image-4.14.0-041400-generic
linux-image-extra-4.10.0-19-generic
linux-image-extra-4.10.0-35-generic
linux-image-extra-4.10.0-37-generic
linux-image-extra-4.13.0-16-generic
linux-image-generic
{% endhighlight %}

De seguida é necessário remover os pacotes individuais:
{% highlight console %}
sudo apt remove --purge linux-image-4.10.0-19-generic
{% endhighlight %}
e por aí fora por cada pacote que queiramos remover.

No final fazer:
{% highlight console %}
sudo update-grub2
sudo reboot
{% endhighlight %}


