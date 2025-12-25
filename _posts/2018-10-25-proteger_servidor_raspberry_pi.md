---
layout: post
title: Proteger um servidor baseado em Raspbian.
description: "Princípios básicos para proteger um servidor baseado em Raspbian."
categories: [Raspberry]
date: 2018-10-25
tags: [Raspberry, Servidor, IOT]
comments: false
img: header_raspi.webp
---
# Princípios básicos para proteger um servidor baseado em Raspbian.
Logo depois de gravar o cartão SD, e admitindo o funcionamento *headless*
* Colocar os seguintes ficheiros em /BOOT
  * **ssh** (ficheiro em branco com este nome, sem extensão)
  * **wpa_supplicant.conf**
 
Conteúdo de wpa_supplicant.conf
```
update_config=1
ctrl_interface=/var/run/wpa_supplicant
network={
 scan_ssid=1
 ssid="nome da rede"
 psk="pass"
}
```
Aquando do primeiro boot:
* Aceder via SSH (user: pi; password. raspberry)
* Configurar IP Fixo:
Para isso modificar o conteúdo do ficheiro **/etc/dhcpcd.conf** segundo o modelo (ajustar valores e comentários de acordo com necessidade):
```
######################################################
# Modelo: IP diferente para redes diferentes
#
#           O endereço arping deve ser o router
#           ou outra máquina disponível. É necessário
#           conhecer o endereço dos servidores Se nenhum. 
#           dos arpings encontrar um servidor activo então
#           o endereço será atribuído por DHCP.
######################################################
interface wlan0
arping 192.168.1.1
# arping xxx.xxx.x.xxx #colocar o IP de outros routers possiveis
profile 192.168.1.1
static ip_address=192.168.1.xxx/24 #o IP escolhido
static routers=192.168.1.1
static domain_name_servers=192.168.1.1 
profile 192.168.0.254
static ip_address=192.168.0.44/24
static routers=192.168.0.254
static domain_name_servers=192.168.0.254
```
Fazer o upgrade e update:
```
sudo apt-get update 
sudo apt-get upgrade -y
```
Configurar Hostname e outras opções básicas:
```
sudo raspi-config 
```
* Selecionar Hostname, mudar o nome de raspberrypi para **xxxxxx**
* Modificar LOCALE e timezone no menu
* Modificar distribuição da memória / expand filesystem
Modificar password do user actual (pi)
```
passwd
```
Adicionar novo utilizador
```
sudo adduser xxxxxx
sudo passwd xxxxx #mudar a password do novo user (que será criado em /home/xxxxxx/
```
Adicionar utilizador XXXXXX com permissões SUDO
```
sudo visudo #(fazer scroll e duplicar linha root com novo username)
```
atribuir ao novo user as mesmas permissões e grupos do user pi
```
groups pi
sudo passwd NOVOUSER group xxx
```
Encerrar sessão e iniciar com novo user
Remover user pi
```
sudo deluser pi (ou sudo deluser --remove-all-files pi)
```	
  ou
```
sudo passwd --lock pi #pode-se fazer o mesmo a outras contas como root
```
Remover user pi do grupo sudo:
```
sudo deluser pi sudo
```
e
```
sudo sed -ri -e 's/pi ALL=(ALL) NOPASSWD: ALL/# pi ALL=(ALL) NOPASSWD: ALL/' /etc/sudoers.d/010_pi-nopasswd
```
Obrigar o uso de password no sudo
```
sudo nano /etc/sudoers.d/010_pi-nopasswd
pi ALL=(ALL) PASSWD: ALL #(substituir pi pelo user que quisermos mudar)
```
Mudar que users podem aceder via ssh
```
sudo nano /etc/ssh/sshd_config 
#adicionar no final deste ficheiro:
AllowUsers xxxxx aaaaa cccccc nnnnnn
# Impedir acesso root via ssh (o acesso pode depois ser obtido por sudo)
PermitRootLogin no
```
Após alterar é necessário reiniciar o sshd
```
sudo systemctl restart ssh
```
Cron job diário para fazer o update
---------------
Cron
```
crontab -e (a primeira vez vai pedir para indicar qual o editor - nano)
```		
		# m h d m s   command
		# * * * * *  command to execute
		# ┬ ┬ ┬ ┬ ┬
		# │ │ │ │ │
		# │ │ │ │ │
		# │ │ │ │ └───── dia da semana (0 - 7) (0 a 6 = Domingo a Sábado)
		# │ │ │ └────────── mês (1 - 12)
		# │ │ └─────────────── dia do mês (1 - 31)
		# │ └──────────────────── hora (0 - 23)
		# └───────────────────────── minuto (0 - 59)
Ver tarefas:
```
crontab -l
```
Exemplo:
```
0 1 * * * /usr/bin/apt-get update
0 10 * * * /usr/bin/apt-get upgrade -y
```
Configurar o Serviço timesyncd
Editar  **/etc/systemd/timesyncd.conf**;
```
[Time]
NTP=0.pt.pool.ntp.org
FallbackNTP=0.arch.pool.ntp.org 1.arch.pool.ntp.org 2.arch.pool.ntp.org 3.arch.pool.ntp.org
#RootDistanceMaxSec=5
#PollIntervalMinSec=32
#PollIntervalMaxSec=2048
```
Em falta:
* Fail2Ban
* Firewall
