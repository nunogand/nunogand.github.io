---
layout: post
title: Calculadora do valor de Colesterol LDL
description: "Calculadora do Colesterol LDL que implementa a fórmula de Martin‐Hopkins e que, de acordo com os estudos efectuados, oferece valores estimados de cLDL com menor margem de erro face à clássica formula de Friedewald"
date: 2024-10-12
categories: [Medicina]
tags: [Medicina, Calculadora]
img: calculator.webp
published: true
---
<style>
  
*,
*:before,
*:after {
  box-sizing: border-box;
}
.calc {
 background-color: #d1e8ee;
 padding: 10px;
  padding: 1em;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 15px;
  }

.container {
  font-size: 15px;
  color: #6b6b6b;
  max-width: 50em;
  padding: 1em 3em 2em 3em;
  margin: 0em auto;
  background-color: #fff;
  border-radius: 4.2px;
  box-shadow: 0px 3px 10px -2px rgba(0, 0, 0, 0.2);
}


h4 {
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

#result {
  color: #272323;
  font-weight: 600;
}
#result_Friedewald {
  font-weight: 600;
}

.referencia {
  font-size: 0.8em
}

  .caixa {
    outline: 2px solid #ccc;
}
</style>


<div class="calc">
<div class="container">
  <form>
    
    <div class="row">
    <h4>Valores (mg/dL)</h4>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Colesterol Total (mg/dL)" id="totalCholesterol">
          <div class="input-icon">CT</div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Colesterol HDL (mg/dL)" id="hdl">
          <div class="input-icon">HDL</div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Triglicerideos (mg/dL)" id="triglycerides">
          <div class="input-icon">Tg</div>
        </div>
      </div>
      <div class="col-half">
        
      </div>
    </div>
    
   <div class="row">
      <div class="caixa">
      <h4>Resultados cLDL (mg/dL) - Martin‐Hopkins</h4>
      <div id="result"></div></div>
    </div>
    <br>
    <div class="row">
      <div class="caixa">
      <h4>Resultados cLDL (mg/dL) - Friedewald</h4>
      <div id="result_Friedewald"></div></div>
    </div>
    
    
  </form>
<div class="row">
  <h4>Calcular</h4>
  <div class="input-group">
    <button type="“button”" onclick="calculateLDL()">c LDL</button>
  </div>
</div> 
  
  <div class="row"><br>
      <h4>Instruções</h4>
      <div class="input-group">
        <label>Apesar de existirem vários métodos para a determinação da concentração de LDL, muitos laboratórios clínicos estimam o valor de cLDL sendo a fórmula de Friedewald o método mais comummente usada.

A fórmula de Friedewald baseia‐se na subtração do colesterol não HDL pela variação de VLDL numa relação de 1:5 de acordo com os triglicéridos (Tgs). Esta proporção fixa traduz-se numa aproximação e leva a incorreções na estimativa de cLDL que poderão ter impacto na clínica e em decisões terapêuticas. Adicionalmente, com Tgs acima de 400mg/dL e disbetalipoproteinemias esta fórmula não pode ser aplicada.
<p>
Vários estudos têm descrito o facto da fórmula de Friedewald subestimar os resultados do cLDL sobretudo nos doentes com hipertrigliceridemia (Tgs ≥ 150mg/dL), diabetes mellitus, doença hepática alcoólica e doença renal crónica em diálise. A subestimação pode ser problemática, podendo levar ao adiar de cuidados preventivos e terapêuticos. <p>
 Em 2013, Martin et al sugeriram uma fórmula semelhante à de Friedewald, em que a estimativa do colesterol VLDL é calculada pela divisão dos Tgs por um fator ajustável que depende do valor do colesterol não HDL e dos Tgs. Estudos de validação, incluindo em Portugal, têm mostrado a sua superioridade face à fórmula original de Friedewald na estimativa da concentração do cLDL em várias populações.</label>
      </div>
    </div>
  
<hr>
<div class="referencia">
  S. Martin, M. Blaha, M. Elshazly, et al.
Comparison of a Novel Method vs the Friedewald Equation for Estimating Low‐Density Lipoprotein Cholesterol Levels From the Standard Lipid Profile.
JAMA., 310 (2013), pp. 2061-2068
http://dx.doi.org/10.1001/jama.2013.280532
  
  
</div>

<script>
// Tabela de pesquisa f(TG) 
    const lookupTable = [
        { range: "7-49", factors: { "<100": 3.5, "100-129": 3.4, "130-159": 3.3, "160-189": 3.3, "190-219": 3.2, ">220": 3.1 }},
        { range: "50-56", factors: { "<100": 4.0, "100-129": 3.9, "130-159": 3.7, "160-189": 3.6, "190-219": 3.6, ">220": 3.4 }},
        { range: "57-61", factors: { "<100": 4.3, "100-129": 4.1, "130-159": 4.0, "160-189": 3.9, "190-219": 3.8, ">220": 3.6 }},
        { range: "62-66", factors: { "<100": 4.5, "100-129": 4.3, "130-159": 4.1, "160-189": 4.0, "190-219": 3.9, ">220": 3.9 }},
        { range: "67-71", factors: { "<100": 4.7, "100-129": 4.4, "130-159": 4.3, "160-189": 4.2, "190-219": 4.1, ">220": 3.9 }},
        { range: "72-75", factors: { "<100": 4.8, "100-129": 4.6, "130-159": 4.4, "160-189": 4.2, "190-219": 4.2, ">220": 4.1 }},
        { range: "76-79", factors: { "<100": 4.9, "100-129": 4.6, "130-159": 4.5, "160-189": 4.3, "190-219": 4.3, ">220": 4.2 }},
        { range: "80-83", factors: { "<100": 5.0, "100-129": 4.8, "130-159": 4.6, "160-189": 4.4, "190-219": 4.3, ">220": 4.2 }},
        { range: "84-87", factors: { "<100": 5.1, "100-129": 4.8, "130-159": 4.6, "160-189": 4.5, "190-219": 4.4, ">220": 4.3 }},
        { range: "88-92", factors: { "<100": 5.2, "100-129": 4.9, "130-159": 4.7, "160-189": 4.6, "190-219": 4.4, ">220": 4.3 }},
        { range: "93-96", factors: { "<100": 5.3, "100-129": 5.0, "130-159": 4.8, "160-189": 4.7, "190-219": 4.5, ">220": 4.4 }},
        { range: "97-100", factors: { "<100": 5.4, "100-129": 5.1, "130-159": 4.8, "160-189": 4.7, "190-219": 4.5, ">220": 4.3 }},
        { range: "101-105", factors: { "<100": 5.5, "100-129": 5.2, "130-159": 5.0, "160-189": 4.7, "190-219": 4.6, ">220": 4.5 }},
        { range: "106-110", factors: { "<100": 5.6, "100-129": 5.3, "130-159": 5.0, "160-189": 4.8, "190-219": 4.6, ">220": 4.5 }},
        { range: "111-115", factors: { "<100": 5.7, "100-129": 5.4, "130-159": 5.1, "160-189": 4.9, "190-219": 4.7, ">220": 4.5 }},
        { range: "116-120", factors: { "<100": 5.8, "100-129": 5.5, "130-159": 5.2, "160-189": 5.0, "190-219": 4.8, ">220": 4.6 }},
        { range: "121-126", factors: { "<100": 6.0, "100-129": 5.5, "130-159": 5.3, "160-189": 5.0, "190-219": 4.8, ">220": 4.6 }},
        { range: "127-132", factors: { "<100": 6.1, "100-129": 5.7, "130-159": 5.3, "160-189": 5.1, "190-219": 4.9, ">220": 4.7 }},
        { range: "133-138", factors: { "<100": 6.2, "100-129": 5.8, "130-159": 5.4, "160-189": 5.2, "190-219": 5.0, ">220": 4.7 }},
        { range: "139-146", factors: { "<100": 6.3, "100-129": 5.9, "130-159": 5.6, "160-189": 5.3, "190-219": 5.0, ">220": 4.8 }},
        { range: "147-154", factors: { "<100": 6.5, "100-129": 6.0, "130-159": 5.7, "160-189": 5.4, "190-219": 5.1, ">220": 4.8 }},
        { range: "155-163", factors: { "<100": 6.7, "100-129": 6.2, "130-159": 5.8, "160-189": 5.4, "190-219": 5.2, ">220": 4.9 }},
        { range: "164-173", factors: { "<100": 6.8, "100-129": 6.3, "130-159": 5.9, "160-189": 5.5, "190-219": 5.3, ">220": 5.0 }},
        { range: "174-185", factors: { "<100": 7.0, "100-129": 6.5, "130-159": 6.0, "160-189": 5.7, "190-219": 5.4, ">220": 5.1 }},
        { range: "186-201", factors: { "<100": 7.3, "100-129": 6.7, "130-159": 6.2, "160-189": 5.8, "190-219": 5.5, ">220": 5.2 }},
        { range: "202-220", factors: { "<100": 7.6, "100-129": 6.9, "130-159": 6.4, "160-189": 6.0, "190-219": 5.6, ">220": 5.3 }},
        { range: "221-247", factors: { "<100": 8.0, "100-129": 7.2, "130-159": 6.6, "160-189": 6.2, "190-219": 5.9, ">220": 5.4 }},
        { range: "248-292", factors: { "<100": 8.5, "100-129": 7.6, "130-159": 7.0, "160-189": 6.5, "190-219": 6.1, ">220": 5.6 }},
        { range: "293-399", factors: { "<100": 9.5, "100-129": 8.3, "130-159": 7.5, "160-189": 7.0, "190-219": 6.5, ">220": 5.9 }},
        { range: "400-13975", factors: { "<100": 11.9, "100-129": 10.0, "130-159": 8.8, "160-189": 8.1, "190-219": 7.5, ">220": 6.7 }}
    ];

    // Função para descobrir o factor de correcção em função do valor de Tg e n-HDL
    function findFactor(triglycerides, nonHDL) {
        let factor;
        for (let row of lookupTable) {
            let [min, max] = row.range.split('-').map(Number);
            if (triglycerides >= min && triglycerides <= max) {
                if (nonHDL < 100) factor = row.factors["<100"];
                else if (nonHDL <= 129) factor = row.factors["100-129"];
                else if (nonHDL <= 159) factor = row.factors["130-159"];
                else if (nonHDL <= 189) factor = row.factors["160-189"];
                else if (nonHDL <= 219) factor = row.factors["190-219"];
                else factor = row.factors[">220"];
                break;
            }
        }
        return factor || 5.0; // failsafe: 5.0 se sem match
    }

    // Função para determinar valor de LDL usando a fórmula Martin/Hopkins
    function calculateLDL() {
        // obter valores
        let totalCholesterol = parseFloat(document.getElementById("totalCholesterol").value);
        let hdl = parseFloat(document.getElementById("hdl").value);
        let triglycerides = parseFloat(document.getElementById("triglycerides").value);

        if (isNaN(totalCholesterol) || isNaN(hdl) || isNaN(triglycerides)) {
            document.getElementById("result").innerText = "Please enter valid values!";
            return;
        }

        // calcular n-HDL
        let nonHDL = totalCholesterol - hdl;

        // Obter f de correcção
        let factor = findFactor(triglycerides, nonHDL);

        // Aplicar a fórmula e já que estamos nisto calcular também com a fórmula de Friedewald
        let ldl = totalCholesterol - hdl - (triglycerides / factor);
        let ldl_f = totalCholesterol - hdl - (triglycerides / 5);

        // Display resultado
        document.getElementById("result").innerText = "cLDL (mg/dL): " + ldl.toFixed(1);
      
      // Display Colesterol total - Colesterol HDL – (Triglicéridos/5) 
      document.getElementById("result_Friedewald").innerText = "cLDL (mg/dL): " + ldl_f.toFixed(1);
    }
</script>
