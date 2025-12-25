---
layout: post
title: Calculadora do valor de Colesterol LDL
description: "Calculadora do Colesterol LDL que implementa a fórmula de Martin‐Hopkins que, de acordo com os estudos efectuados, oferece valores estimados de cLDL com menor margem de erro face à clássica formula de Friedewald"
date: 2024-10-12
categories: [Medicina]
tags: [Medicina, Calculadora]
img: calculator.webp
subtitle: Implementação da equação Martin‐Hopkins para estimar o cLDL
published: true
custom_js:
- Martin-Hopkins.js
custom_css:
- Martin-Hopkins.css
---
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
      <h4>Racional</h4>
      <div class="input-group">
        <label>Apesar de existirem vários métodos para a determinação da concentração de LDL, muitos laboratórios clínicos estimam o valor de cLDL sendo a fórmula de Friedewald o método mais comummente usada.
A fórmula de Friedewald baseia‐se na subtração do colesterol não HDL pela variação de VLDL numa relação de 1:5 de acordo com os triglicéridos (Tgs). Esta proporção fixa traduz-se numa aproximação e leva a incorreções na estimativa de cLDL que poderão ter impacto na clínica e em decisões terapêuticas. Adicionalmente, com Tgs acima de 400mg/dL e disbetalipoproteinemias esta fórmula não pode ser aplicada.
<p>
Vários estudos têm descrito o facto da fórmula de Friedewald subestimar os resultados do cLDL sobretudo nos doentes com hipertrigliceridemia (Tgs ≥ 150mg/dL), diabetes mellitus, doença hepática alcoólica e doença renal crónica em diálise. A subestimação pode ser problemática, podendo levar ao adiar de cuidados preventivos e terapêuticos. <p>
 Em 2013, Martin et al sugeriram uma fórmula semelhante à de Friedewald, em que a estimativa do colesterol VLDL é calculada pela divisão dos Tgs por um fator ajustável que depende do valor do colesterol não HDL e dos Tgs. Estudos de validação, incluindo em Portugal, têm mostrado a sua superioridade face à fórmula original de Friedewald na estimativa da concentração do cLDL em várias populações.
      
  
<hr>
<div class="referencia">
  S. Martin, M. Blaha, M. Elshazly, et al.
Comparison of a Novel Method vs the Friedewald Equation for Estimating Low‐Density Lipoprotein Cholesterol Levels From the Standard Lipid Profile.
JAMA., 310 (2013), pp. 2061-2068
http://dx.doi.org/10.1001/jama.2013.280532
  
  
</div>
