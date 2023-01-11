---
layout: post
title: Calculadora da duração do tempo de gravidez com datas ideais para realização de MCDTs
description: "Calculadora de gravidez - calcular os intervalos de tempo adequados para o seguimento da gravidez."
date: 2022-11-02
categories: [Medicina]
tags: [Medicina, Calculadora]
img: calculator.webp
published: true
---
<style>
_posts/
</style>

Seleccione a data da última menstruação e carregue no botão para calcular os intervalos de tempo adequados para o seguimento da gravidez:
<form>
  <label for="day1">Data:</label><br>
  <input type="date" id="day1" name="day1"><P>
  <button type="button" onclick="calculateDates()">CALCULAR</button>
</form>
<h3>Data: </h3><h3 id="day18"></h3>

<table class="rwd-table" id="result">
  <tr>
    <th>Trimestre</th>
    <th>MCDT</th>
    <th>Desde</th>
    <th>Até</th>
    
  </tr>
  <tr bgcolor="#6b8cae">
    <td   data-th="Trimestre" rowspan="3">1º Trimestre</td>
    <td  data-th="MCDT">Ecografia</td>
    <td  data-th="Desde" id="day2"></td>
    <td  data-th="Até" id="day3"></td>
  </tr>
  <tr bgcolor="#6b8cae" >
    
     <td data-th="MCDT">Análises</td>
    <td data-th="Desde" id="day4"></td>
    <td data-th="Até" id="day5"></td>
  </tr>
  <tr bgcolor="#6b8cae">
    
     <td data-th="MCDT">Rastreio</td>
     <td data-th="Desde" id="day6"></td>
     <td data-th="Até" id="day7"></td>
  </tr>

    <tr>
    <td data-th="Trimestre" rowspan="3">2º Trimestre</td>
    <td data-th="MCDT">Ecografia</td>
    <td data-th="Desde" id="day8"></td>
    <td data-th="Até" id="day9"></td>
  </tr>
  <tr>
    
     <td data-th="MCDT">Análises</td>
    <td data-th="Desde" id="day10"></td>
    <td data-th="Até" id="day11"></td>
  </tr>
  <tr>
    
     <td data-th="MCDT">Vacinação</td>
     <td data-th="Desde" id="day12"></td>
     <td data-th="Até" id="day13"></td>
  </tr>
  
    <tr bgcolor="#6b8cae" >
    <td data-th="Trimestre" rowspan="2">3º Trimestre</td>
    <td data-th="MCDT">Ecografia</td>
    <td data-th="Desde" id="day14"></td>
    <td data-th="Até" id="day15"></td>
  </tr>
  <tr bgcolor="#6b8cae" >
     <td data-th="MCDT">Análises</td>
    <td data-th="Desde" id="day16"></td>
    <td data-th="Até" id="day17"></td>
  </tr>
  
  
</table>

<small id="footer">
De acordo com as orientações registadas no SDM.
</small>


<script>
    function calculateDates() {
    // Get the value of the user's input
    var day1 = new Date(document.getElementById("day1").value);
    
    var days = [0, 77, 97, 0, 97, 77, 97, 133, 160, 168, 202, 168, 224, 210, 244, 217, 265, 280];

    for (var i = 1; i <= 18; i++) {
        var date = new Date(day1.getTime());
        date.setDate(date.getDate() + days[i-1]);
        var dateString = formatDate(date);
        document.getElementById("day"+i).innerHTML = dateString;
    }
  }
  
  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + "-" + month + "-" + year;
  }
</script>
