/*!
  * Implementação da formula Martin/Hopkins para cálculo do cLDL estimado
  * Copyright 2024, Nuno Rodrigues
  * https://raw.githubusercontent.com/nunogand/nunogand.github.io/refs/heads/master/custom/js/Martin-Hopkins.js
  * Licensed under the MIT License.
  */

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