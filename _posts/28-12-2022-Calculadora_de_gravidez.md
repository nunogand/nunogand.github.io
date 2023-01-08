---
layout: post
title: Calculadora da duração do tempo de gravidez com datas ideais para realização de MCDT's
description: Códigos das restrições da carta de condução portuguesa
date: 2022-11-02
categories: [Medicina]
tags: [Medicina]
img: obesidade.webp
published: false
---
<style>
  body {
    color: slategray;
  }
  
  .table {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 2rem 0rem 0rem 0rem;
    width: 80vw;
    max-width: 1100px;
  }
  
  .table-cell {
    box-sizing: border-box;
    flex-grow: 1;
    width: 100%;
    padding: 0.8em 1.2em;
    overflow: hidden;
    list-style-type: none;
    outline: 1px solid #ddd;
    text-align: center;
    font-weight: 300;
    margin-top: 1px;
    margin-left: 1px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
  
  .table-cell:first-child {
    outline: 1px solid #fff;
    background: transparent;
  }
  
  @media only screen and (max-width: 768px) {
    .table-cell:first-child {
      display: none;
    }
  }
  
  .table-cell:nth-child(3) {
    outline: 1px solid #30305b;
  }
  
  .table-cell:nth-child(-n+3) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  
  .table-cell>h3 {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 3rem;
  }
  
  .table-cell.cell-feature {
    text-align: left;
    font-size: 18px;
  }
  
  .table-cell.inicio {
    color: limegreen;
  }
  
  .table-cell.inicio a.btn {
    color: limegreen;
  }
  
  .table-cell.inicio a.btn:hover {
    background-color: limegreen;
    border-color: limegreen;
    color: white;
  }
  
  .table-cell.fim {
    background-color: #30305b;
    color: #85bafc;
  }
  
  .table-cell.fim a.btn {
    color: #85bafc;
  }
  
  .table-cell.fim a.btn:hover {
    background-color: #85bafc;
    border-color: #85bafc;
    color: #30305b;
  }
  
  /* Table columns
  ================================== */
  .table-cell {
    width: calc(33.33% - 1px);
  }
  
  @media only screen and (max-width: 768px) {
    .table-cell.cell-feature {
      width: 100%;
      text-align: center;
    }
  }
  
  
  a.btn {
    border: 2px solid;
    padding: 0.6rem 0.9rem 0.6rem 0.9rem;
    font-weight: 400;
    text-transform: uppercase;
    text-decoration: none;
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -ms-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    -ms-border-radius: 0.3rem;
    border-radius: 0.3rem;
  }
</style>

<h1>Date Calculator</h1>
<p>Select a date and click the button to calculate four additional dates:</p>
<form>
  <label for="day1">Date:</label><br>
  <input type="date" id="day1" name="day1"><br>
  <button type="button" onclick="calculateDates()">Calculate</button>
</form>




<div class="table" id="result">
  <div class="table-cell"></div>
  <div class="table-cell inicio">
    <h3>Início</h3>
  </div>

  <div class="table-cell fim">
    <h3>Fim</h3>
  </div>

 <div class="table-cell cell-feature">Primeiro trimestre</div>
  <div class="table-cell" id="day2"></div>
  <div class="table-cell" id="day3"></div>


 <div class="table-cell cell-feature">Segundo trimestre</div>
<div class="table-cell" id="day4"></div>
<div class="table-cell" id="day5"></div>

<div class="table-cell cell-feature">Terceiro trimestre</div>
<div class="table-cell" id="day6"></div>
<div class="table-cell" id="day7"></div>

</div>


<script>
  function calculateDates() {
    // Get the value of the user's input
    var day1 = document.getElementById("day1").value;
    
    // Split the input into its day, month, and year components
    var day1Components = day1.split("-");
    var day1Day = day1Components[2];
    var day1Month = day1Components[1];
    var day1Year = day1Components[0];
    
    // Convert the month to a number (since it's currently a string)
    day1Month = parseInt(day1Month);
    
    // Calculate the four additional dates
    var day2 = new Date(day1Year, day1Month - 1, day1Day + 50);
    var day3 = new Date(day1Year, day1Month - 1, day1Day + 75);
    var day4 = new Date(day1Year, day1Month - 1, day1Day + 100);
    var day5 = new Date(day1Year, day1Month - 1, day1Day + 150);
    var day6 = new Date(day1Year, day1Month - 1, day1Day + 155);
    var day7 = new Date(day1Year, day1Month - 1, day1Day + 159);
    
    // Format the dates as strings in the "day-month-year" format
    var day2String = formatDate(day2);
    var day3String = formatDate(day3);
    var day4String = formatDate(day4);
    var day5String = formatDate(day5);
    var day6String = formatDate(day6);
    var day7String = formatDate(day7);
    
    // Output the results to the webpage
    document.getElementById("day2").innerHTML = day2String;
    document.getElementById("day3").innerHTML = day3String;
    document.getElementById("day4").innerHTML = day4String;
    document.getElementById("day5").innerHTML = day5String;
    document.getElementById("day6").innerHTML = day6String;
    document.getElementById("day7").innerHTML = day7String;


  }
  
  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + "-" + month + "-" + year;
  }
</script>
