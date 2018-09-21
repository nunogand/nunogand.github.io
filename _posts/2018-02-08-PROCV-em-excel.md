---
layout: post
title: Utilização da função PROCV
description: Exemplo prático da utilização da função PROCV com duas listagens de utentes
date: 2018-02-08
categories: [Excel]
tags: [Excel]
img: header_excel.png
---
Imaginemos duas listas de utentes, A e B. A primeira pode ser por exemplo a listagem de utente com o Diagnóstico A e a segunda com o diagnóstico B.
Como obter os elementos em A que possuam a patologia B?

Juntemos então duas tabelas:

| N_utente1 | Cat_A | Cat_B |
|-----------|-------|-------|
| 1234      | a     | b     |
| 1235      | a     | c     |
| 1237      | w     | g     |
| 1238      | d     | f     |
| 1239      | h     | h     |

e

| N_utente2 | Cat_A |
|-----------|-------|
| 1235      | N     |
| 1236      | N     |
| 1238      | N     |
| 1239      | N     |
| 1230      | N     |

Cada uma tem os utente identificados pelo N_Utente e respectivas caracerísticas que se pretendem (diagnósticos por exemplo).
Juntando fica algo como isto:

| N_utente1 | Cat_A | Cat_B | N_utente2 | Cat_A |
|-----------|-------|-------|-----------|-------|
| 1234      | a     | b     | 1235      | N     |
| 1235      | a     | c     | 1236      | N     |
| 1237      | w     | g     | 1238      | N     |
| 1238      | d     | f     | 1239      | X     |
| 1239      | h     | h     | 1230      | N     |

No caso ambas as tabelas têm o mesmo tamanho o que facilita o exemplo mas obviamente que também funciona com tabelas de tamanhos diferentes.

Como saber quais dos utentes da tabela 1 possuem o diagnóstico X da tabela 2?

Inserimos a seguinte fórmula:
'''
=PROCV(A1;$D$1:$E$5;2;0)
'''
O resultado é este:

| N_utente1 | Cat_A | Cat_B | N_utente2 | Cat_A |      |
|-----------|-------|-------|-----------|-------|------|
| 1234      | a     | b     | 1235      | N     | #N/D |
| 1235      | a     | c     | 1236      | N     | N    |
| 1237      | w     | g     | 1238      | N     | #N/D |
| 1238      | d     | f     | 1239      | N     | N    |
| 1239      | h     | h     | 1230      | N     | X    |

Logo, o utente 1239 é o único utente da nossa lista 1 (que pode incluir todos os utentes com um outro qualquer diagnóstico) e que apresenta o Diagnóstico X.

O que faz a função:
'''
=PROCV(A1;$D$1:$E$5;2;0)
'''
**=PROCV** - chama a função (Duh....)
**A1** - Indica qual o valor que queremos encontrar na lista 2
**$D$1:$E$5** - O intervalo onde está localizada a lista 2 (toda a tabela, podemos inclusivé não a colar e referenciar a partir de outra página ou mesmo ficheiro) - notar a utilizaçaõ do $
**2** - a coluna da tabela 2 onde está localizado o dado que queremos obter.
**0** - Difícil de explicar mas, coloquemos este valor a zero (ou FALSO)

**Limitações:** O valor a obter tem de estar sempre à direita do valor pesquisado, no caso, a coluna com a identificação do utente deve estar antes da coluna com o valor que pretendemos obter. Isto deve-se à forma como o PROCV funciona, sempre da esquerda para a direita em cada linha. Por isso, se quisermos comparar diagnósticos e obter identificações, as colunas devem ser trocadas de ordem.
