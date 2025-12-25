---
layout: post
title: "Instalação do JDownloader em dispositivos ARM."
description: "Instalação do JDownloader em dispositivos ARM, utilização headless."
categories: [Raspberry]
date: 2019-03-18
tags: [Raspberry, JDownloader]
comments: false
img: header_raspi.webp
---
Instalação do JDownloader em dispositivos ARM.
Script:
```
    1 - Criar a pasta para instalar o JDownloader
        examplo: "mkdir /path/JDownloader" (ou outra qualquer)
    2 - copiar o JDownloader para essa pasta
        examplo: "cd /path/JDownloader"
        examplo: "wget http://installer.jdownloader.org/JDownloader.jar"
    3 - Instalação
        "java -jar JDownloader.jar -norestart"
        repetir o passo 3 até o JDownloader solicitar as credenciais do MyJDownloader - para permitir controlar a consola via web
    4 - iniciar o JDownloader com "java -jar JDownloader.jar &"
```
