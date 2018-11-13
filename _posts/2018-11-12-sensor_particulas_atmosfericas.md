---
layout: post
title: Smog detector - lista de material
description: Listagem para detector de partículas em suspensão na atmosfera
date: 2018-08-24
categories: [Raspberry, Arduino]
img: esp8266.jpg
tags: [Raspberry, Arduino]
comments: false
---
## Construção do detector de partículas atmosféricas
Segundo o projecto [Luftdaten](https://luftdaten.info).
Como alterações apenas substituí o DHT22 original pelo sensor BME280 (temperatura + humidade + pressão atmosférica) e o NodeMCU por um WemosD1.

Ligações:


| BME280 |   | WemosD1 |
|---|---|---|
| VCC | -> | 3V3 |
| GND | -> | GND |
| SCL | -> | D4 (GPIO2) |
| SCA | -> | D3 (GPIO0) |

| SDS011 |   | WemosD1 |
|---|---|---|
| TXD | -> | D1 (GPIO5) |
| RXD | -> | D2 (GPIO4)|
| GND | -> | GND |
| 5V | -> | 5V |

Ou algo como isto:
![sensor](/images/sensor.jpg "Sensor")

O software é instalado seguindo as instruções em Luftdaten
