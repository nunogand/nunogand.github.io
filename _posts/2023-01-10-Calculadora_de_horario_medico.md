---
layout: post
title: Calculadora de horário de consultas
description: "Calculadora de horário baseado em https://www.arsnorte.min-saude.pt/wp-content/uploads/sites/3/2022/12/MGF3_4-Ano_Exemplo_Caso_Clinico_2022.pdf."
date: 2023-01-10
categories: [Medicina]
tags: [Medicina, Calculadora]
img: calculator.webp
published: true
---
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css";
  
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  color: #b9b9b9;
}
  
.calc {
 background-color: #91ced4;
 width: max-content;
  }

.calc h4 {
  color: #f0a500;
}
input,
input[type="radio"] + label,
input[type="checkbox"] + label:before,
select option,
select {
  width: 100%;
  padding: 1em;
  line-height: 1.4;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
input:focus {
  outline: 0;
  border-color: #bd8200;
}
input:focus + .input-icon i {
  color: #f0a500;
}
input:focus + .input-icon:after {
  border-right-color: #f0a500;
}
input[type="radio"] {
  display: none;
}
input[type="radio"] + label,
select {
  display: inline-block;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 0;
}
input[type="radio"] + label:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
input[type="radio"] + label:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
input[type="radio"] + label i {
  padding-right: 0.4em;
}
input[type="radio"]:checked + label,
input:checked + label:before,
select:focus,
select:active {
  background-color: #f0a500;
  color: #fff;
  border-color: #bd8200;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + label {
  position: relative;
  display: block;
  padding-left: 1.6em;
}
input[type="checkbox"] + label:before {
  position: absolute;
  top: 0.2em;
  left: 0;
  display: block;
  width: 1em;
  height: 1em;
  padding: 0;
  content: "";
}
input[type="checkbox"] + label:after {
  position: absolute;
  top: 0.45em;
  left: 0.2em;
  font-size: 0.8em;
  color: #fff;
  opacity: 0;
  font-family: FontAwesome;
  content: "\f00c";
}
input:checked + label:after {
  opacity: 1;
}
select {
  height: 3.4em;
  line-height: 2;
}
select:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
select:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
select:focus,
select:active {
  outline: 0;
}
select option {
  background-color: #f0a500;
  color: #fff;
}
.input-group {
  margin-bottom: 1em;
  zoom: 1;
}
.input-group:before,
.input-group:after {
  content: "";
  display: table;
}
.input-group:after {
  clear: both;
}
.input-group-icon {
  position: relative;
}
.input-group-icon input {
  padding-left: 4.4em;
}
.input-group-icon .input-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 3.4em;
  height: 3.4em;
  line-height: 3.4em;
  text-align: center;
  pointer-events: none;
}
.input-group-icon .input-icon:after {
  position: absolute;
  top: 0.6em;
  bottom: 0.6em;
  left: 3.4em;
  display: block;
  border-right: 1px solid #e5e5e5;
  content: "";
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.input-group-icon .input-icon i {
  -webkit-transition: 0.35s ease-in-out;
  -moz-transition: 0.35s ease-in-out;
  -o-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
}
.container {
  max-width: 40em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}
.row {
  zoom: 1;
}
.row:before,
.row:after {
  content: "";
  display: table;
}
.row:after {
  clear: both;
}
.col-half {
  padding-right: 10px;
  float: left;
  width: 50%;
}
.col-half:last-of-type {
  padding-right: 10px;
}
.col-third {
  padding-right: 10px;
  float: left;
  width: 33.33333333%;
}
.col-third:last-of-type {
  padding-right: 10px;
}
@media only screen and (max-width: 540px) {
  .col-half {
    width: 100%;
    padding-right: 0;
  }
}


/*tabela*/

body * {
  box-sizing: border-box;
}

.header {
  background-color: #327a81;
  color: white;
  font-size: 1.5em;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
}

img {
  border-radius: 50%;
  height: 60px;
  width: 60px;
}

.table-users {
  border: 1px solid #327a81;
  border-radius: 10px;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.1);
  max-width: calc(100% - 2em);
  margin: 1em auto;
  overflow: hidden;
  width: 800px;
}

table {
  width: 100%;
}
table td, table th {
  color: #2b686e;
  padding: 10px;
}
table td {
  text-align: center;
  vertical-align: middle;
}
table td:last-child {
  font-size: 0.95em;
  line-height: 1.4;
  text-align: left;
}
table th {
  background-color: #daeff1;
  font-weight: 300;
}
table tr:nth-child(2n) {
  background-color: white;
}
table tr:nth-child(2n+1) {
  background-color: #edf7f8;
}

@media screen and (max-width: 700px) {
  table, tr, td {
    display: block;
  }

  td:first-child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
  }
  td:not(:first-child) {
    clear: both;
    margin-left: 100px;
    padding: 4px 20px 4px 90px;
    position: relative;
    text-align: left;
  }
  td:not(:first-child):before {
    color: #91ced4;
    content: "";
    display: block;
    left: 0;
    position: absolute;
  }
  td:nth-child(2):before {
    content: "Cons/ano:";
  }
  td:nth-child(3):before {
    content: "Cons/sem:";
  }
  td:nth-child(4):before {
    content: "H/sem:";
  }
  td:nth-child(5):before {
    content: "Notas:";
  }

  tr {
    padding: 10px 0;
    position: relative;
  }
  tr:first-child {
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .header {
    background-color: transparent;
    color: white;
    font-size: 2em;
    font-weight: 700;
    padding: 0;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  }

  img {
    border: 3px solid;
    border-color: #daeff1;
    height: 100px;
    margin: 0.5rem 0;
    width: 100px;
  }

  td:first-child {
    background-color: #c8e7ea;
    border-bottom: 1px solid #91ced4;
    border-radius: 10px 10px 0 0;
    position: relative;
    top: 0;
    transform: translateY(0);
    width: 100%;
  }
  td:not(:first-child) {
    margin: 0;
    padding: 5px 1em;
    width: 100%;
  }
  td:not(:first-child):before {
    font-size: 0.8em;
    padding-top: 0.3em;
    position: relative;
  }
  td:last-child {
    padding-bottom: 1rem !important;
  }

  tr {
    background-color: white !important;
    border: 1px solid #6cbec6;
    border-radius: 10px;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    margin: 0.5rem 0;
    padding: 0;
  }

  .table-users {
    border: none;
    box-shadow: none;
    overflow: visible;
  }
}
  
</style>

<main class="calc">
  
<div class="container">
  <form>
    <div class="row">
      <h4>Instruções</h4>
      <div class="input-group">
        <label>O presente formulário calcula as estimativas de horas de consulta (em número e em tempo) para as várias actividades do Médico de Família. Os resultados obtidos devem ser encarados como a base da construção do horário.
          <br>Inserir em cada campo o valor pedido; o formulário apenas aceita números decimais utilizando para isso o separador "."
        </label>
      </div>
    </div>
    <div class="row">
      <h4>Utentes</h4>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Utentes total" id="a">
        <div class="input-icon"></div>
      </div>
    </div>
    <div class="row">
      <h4>Saúde Infantil</h4>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Crianças 1º ano" id="b">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Crianças 2º ano" id="c">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="24 meses a 18 anos" id="d">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Nascidos ano anterior" id="e">
          <div class="input-icon"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <h4>Grupos</h4>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Mulheres 14 aos 54 anos" id="f">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Diabéticos" id="g">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Hipertensos" id="h">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Idade &gt; 18 anos" id="i">
          <div class="input-icon"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-half">
        <h4>Duração da consulta (min)</h4>
        <div class="input-group">
          <div class="col-third">
            <input type="text" placeholder="CA" id="j">
          </div>
          <div class="col-third">
            <input type="text" placeholder="SI" id="k">
          </div>
          <div class="col-third">
            <input type="text" placeholder="SM" id="l">
          </div>
        </div>
      </div>
      <div class="col-half">
        <h4>&nbsp;</h4>
        <div class="input-group">
          <div class="col-third">
            <input type="text" placeholder="HTA" id="m">
          </div>
          <div class="col-third">
            <input type="text" placeholder="DM" id="n">
          </div>
          <div class="col-third">
            <input type="text" placeholder="Out" id="o">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h4>Carga horária <u>semanal</u> (h)</h4>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Horário de trabalho" id="p">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Intersubstituição" id="q">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-third">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Domicilios" id="r">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-third">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="HNE" id="s">
          <div class="input-icon"></div>
        </div>
      </div>
      <div class="col-third">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="CA" id="t">
          <div class="input-icon"></div>
        </div>
      </div>
    </div>
  </form>
<div class="row">
  <h4>Calcular</h4>
  <div class="input-group">
    <button type="“button”" onclick="calculate()">Calcular</button>
  </div>
</div>  
</div>

<p><!---RESULTS--></p>
<div id="results"></div>  
  
  
  
</main>
<script>
  function calculate() {
  
  
  const inputs = [];
  for (let i = 0; i < 20; i++) {
    const input = Number(document.getElementById(String.fromCharCode(97 + i)).value);
    inputs.push(input);
  }

  const results = [
    inputs[1] * 6, 
    inputs[2] * 3,
    inputs[3] + (inputs[2] * 3) + (inputs[1] * 6),
    inputs[5] * 0.6,
    inputs[4] * 7,
    inputs[6] * 2,
    inputs[7] * 2    
  ];

  
  const gvr_cons_ano = results[2] + results[3] + results[4] + results[5] + results[6];
  const gvr_cons_sem = (gvr_cons_ano / 44);
  
  const gvr_horas_sem = (results[2]*inputs[10] + results[3] *inputs[14] + results[4] *inputs[11]+ results[5] *inputs[13]+ results[6]*inputs[12])/60/44;
  
  const horas_adultos = (inputs[15]-(gvr_horas_sem + inputs[16] + inputs[17] + inputs[18] + inputs[19]));
  
  
  const resultSection = `
<div class="table-users">
   <div class="header">Carga horária semanal</div>
   
   <table cellspacing="0">
      <tr>
         <th></th>
         <th>Consultas/ano</th>
         <th>Consultas/semana</th>
         <th>Horas/semana</th>
         <th width="230">Comentários</th>
      </tr>

      <tr>
         <td><i class="fa fa-baby"></i><p>Saúde Infantil<br>1º ano</td>
         <td>${results[0]}</td>
         <td>${(parseFloat(results[0]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[0]/44*inputs[10])/60))}</td>
         <td>Assumindo 6 consultas/ano/criança.</td>
      </tr>
      <tr>
         <td><i class="fa fa-child"></i><p>Saúde Infantil<br>2º ano</td>
         <td>${results[1]}</td>
         <td>${(parseFloat(results[1]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[1]/44*inputs[10])/60))}</td>
         <td>Assumindo 3 consultas/ano/criança.</td>
      </tr>
      
       <tr>
         <td><i class="fa fa-children"></i><p>Saúde Infantil<br>total</td>
         <td>${results[2]}</td>
         <td>${(parseFloat(results[2]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[2]/44*inputs[10])/60))}</td>
         <td>Assume 1 consulta/ano/criança para todasa as idades >24 meses.</td>
      </tr>

      <tr>
         <td><i class="fa fa-venus"></i><p>Planeamento Familiar</td>
         <td>${results[3]}</td>
         <td>${(parseFloat(results[3]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[3]/44*inputs[14])/60))}</td>
         <td>Assume 1 consulta/ano e uma taxa de cobertura de 60% de todas as mulheres entre os 14-54 anos.</td>
      </tr>

      <tr>
         <td><i class="fa fa-person-pregnant"></i> <p>Saúde Materna</td>
         <td>${results[4]}</td>
         <td>${(parseFloat(results[4]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[4]/44*inputs[11])/60))}</td>
         <td>Assume um máximo de 7 consultas/gravidez</td>
      </tr>
      
      <tr>
         <td><i class="fa fa-circle"></i><p>Diabetes</i></td>
         <td>${results[5]}</td>
         <td>${(parseFloat(results[5]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[5]/44*inputs[13])/60))}</td>
         <td>Assume 2 consultas/ano por utente e uma taxa de cobertura de 100%.</td>
      </tr>
      <tr>
         <td><i class="fa fa-heart"></i><p>Hipertensão</i></td>
         <td>${results[6]}</td>
         <td>${(parseFloat(results[6]/44).toFixed(1))}</td>
         <td>${(hoursToHHMM((results[6]/44*inputs[12])/60))}</td>
         <td>Assume 2 consultas/ano por utente e uma taxa de cobertura de 100%.</td>
      </tr>
      <tr>
         <td><i class="fa fa-people-group"></i><p>Grupos Vulneráveis / de Risco</i></td>
         <td>${(parseFloat(gvr_cons_ano).toFixed(1))}</td>
         <td>${(parseFloat(gvr_cons_sem).toFixed(1))}</td>
         <td>${(hoursToHHMM(gvr_horas_sem))}</td>
         <td>Somatório de todos os grupos.</td>
      </tr>
      <tr>
         <td><i class="fa fa-users"></i></i><p>Adultos</i></td>
         <td>${(parseFloat(horas_adultos)*60/inputs[14]*44).toFixed(1)}</td>
         <td>${(parseFloat(horas_adultos)*60/inputs[14]).toFixed(1)}</td>
         <td>${(hoursToHHMM(horas_adultos))}</td>
         <td>Cálculo do tempo de consulta restante excluindo os G.V/R e os períodos reservados para CA, Domicilios, Intersubstituição.</td>
      </tr>
      <tr>
         <td><i class="fa fa-laptop-medical"></i><p>e-Agenda</i></td>
         <td>${(parseFloat(horas_adultos)/3*60/inputs[14]*44).toFixed(1)}</td>
         <td>${(parseFloat(horas_adultos)/3*60/inputs[14]).toFixed(1)}</td>
         <td>${(hoursToHHMM(horas_adultos/3))}</td>
         <td>Assumindo 1/3 do total da Saúde Adultos.</td>
      </tr>
      
      
   </table>
</div>
  `;

  document.getElementById('results').innerHTML = resultSection;
 
    
}
function hoursToHHMM(hours) {
    var h = String(Math.trunc(hours)).padStart(2, '0');
    var m = String(Math.abs(Math.round((hours - h) * 60))).padStart(2, '0');
    return h + ':' + m;
}

</script>
