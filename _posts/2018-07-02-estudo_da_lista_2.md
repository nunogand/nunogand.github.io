---
layout: post
title: "Estudo da lista de utentes 2"
description: "Criação das tabelas em excel"
categories: [PowerBi]
tags: [PowerBi, código]
img: header_powerbi.jpg
---
Fcheiros extraídos via MIM@UF:
* P01.01.L01. Inscritos > Utente
* P04.R03 problemas > ICPC (selecionar penúltimo mês)

No excel abrir
P01.01.L01. Inscritos > Utente

* Seleccionar todas as linhas até à tabela e apagá-las
* Seleccionar todos os dados: colocar o cursor na célula A1, clicar em Ctrl+Shift+End e ajustar até termos todas as células com dados seleccionadas
* Converter em tabela: Inserir - Tabela; na janela de diálogo que surge clicar na opção: "A minha tabela tem cabeçalhos"
* Eliminar colunas inúteis
  - fico com Utente/Sexo e Idade
* Converter Idade para número (eliminar o "Ano/Anos")
Há várias formas de o fazer sendo que a mais simples é usar a função "Localizar e Substituir" (Ctrl+U)
  - primeiro Localizar " Anos" e deixar em branco o campo "Substituir por"
  - depois Localizar " Ano" e deixar em branco o campo "Substituir por"

Temos a nossa tabela feita; gravar como "utentes.xlsx"

P04.R03 problemas > ICPC (selecionar penúltimo mês)
* Seleccionar todas as linhas até à tabela e apagá-las
* Seleccionar a última linha (Total) e apagá-la
* Seleccionar todos os dados: colocar o cursor na célula A1, clicar em Ctrl+Shift+End e ajustar até termos todas as células com dados seleccionadas
* Converter em tabela: Inserir - Tabela; na janela de diálogo que surge clicar na opção: "A minha tabela tem cabeçalhos"
* Eliminar colunas inúteis:
  - Eliminar coluna A (Area ICPC) e D (Métrica) - uma de cada vez
* Renomear coluna 1 para "Nomenclatura"
* Criar coluna "capitulo"
* Criar a fórmula =ESQUERDA(Tabela1[[#Esta Linha];[ICPC]];1) na primeira linha de dados (D2)
* Gravar como problemas
<iframe width="560" height="315" src="https://www.youtube.com/embed/zkKPLTu3DBE?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
