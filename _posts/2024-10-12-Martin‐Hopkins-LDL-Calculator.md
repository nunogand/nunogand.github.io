---
layout: post
title: LDL Calculator
description: "LDL cholesterol calculator that implements the Martin-Hopkins formula that, according to the studies carried out, offers estimated LDL cholesterol values with a smaller margin of error than the classic Friedewald formula."
date: 2024-10-12
categories: [Medicina]
tags: [Medicina, Calculadora]
img: calculator.webp
subtitle: Implementation of the Martin-Hopkins equation to estimate cLDL
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
    <h4>Values (mg/dL)</h4>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Total Cholesterol (mg/dL)" id="totalCholesterol">
          <div class="input-icon">TC</div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="HDL Cholesterol (mg/dL)" id="hdl">
          <div class="input-icon">HDL</div>
        </div>
      </div>
      <div class="col-half">
        <div class="input-group input-group-icon">
          <input type="text" placeholder="Triglycerides (mg/dL)" id="triglycerides">
          <div class="input-icon">Tg</div>
        </div>
      </div>
      <div class="col-half">
        
      </div>
    </div>
    
   <div class="row">
      <div class="caixa">
      <h4>Results cLDL (mg/dL) - Martin‐Hopkins</h4>
      <div id="result"></div></div>
    </div>
    <br>
    <div class="row">
      <div class="caixa">
      <h4>Results cLDL (mg/dL) - Friedewald</h4>
      <div id="result_Friedewald"></div></div>
    </div>
    
    
  </form>
<div class="row">
  <h4>Calculate</h4>
  <div class="input-group">
    <button type="“button”" onclick="calculateLDL()">c LDL</button>
  </div>
</div> 
  
  <div class="row"><br>
      <h4>Rational</h4>
      <div class="input-group">
        <label>lthough there are several methods for determining LDL concentration, many clinical laboratories estimate the LDL-C value, with the Friedewald formula being the most commonly used method.

The Friedewald formula is based on subtracting non-HDL cholesterol from the change in VLDL in a ratio of 1:5 according to triglycerides (Tgs). This fixed ratio is an approximation and leads to inaccuracies in the estimation of LDL-C which could have an impact on clinical practice and therapeutic decisions. In addition, with Tgs above 400mg/dL and dysbetalipoproteinemia, this formula cannot be applied.
<p>
Several studies have described the fact that the Friedewald formula underestimates cLDL results, especially in patients with hypertriglyceridemia (Tgs ≥ 150mg/dL), diabetes mellitus, alcoholic liver disease and chronic kidney disease on dialysis. Underestimation can be problematic and may lead to preventive and therapeutic care being postponed. <p>
In 2013, Martin et al suggested a formula similar to Friedewald's, in which the estimate of VLDL cholesterol is calculated by dividing Tgs by an adjustable factor that depends on the value of non-HDL cholesterol and Tgs. Validation studies, including in Portugal, have shown its superiority to the original Friedewald formula in estimating cLDL concentration in various populations.
      
  
<hr>
<div class="referencia">
  S. Martin, M. Blaha, M. Elshazly, et al.
Comparison of a Novel Method vs the Friedewald Equation for Estimating Low‐Density Lipoprotein Cholesterol Levels From the Standard Lipid Profile.
JAMA., 310 (2013), pp. 2061-2068
http://dx.doi.org/10.1001/jama.2013.280532
  
  
</div>

