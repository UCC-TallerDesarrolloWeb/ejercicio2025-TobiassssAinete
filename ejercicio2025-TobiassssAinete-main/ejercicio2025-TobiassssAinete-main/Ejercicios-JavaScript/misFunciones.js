/**
 * Convierte entre unidades de longitud (metro, pulgada, pie, yarda)
 * @param {string} unidad - Unidad de entrada ("unid_metro", "unid_pulgada", "unid_pie", "unid_yarda")
 * @param {number} valor - Valor numérico a convertir
 */
function convertirunidades(unidad, valor) {
    let metro, pulgada, pie, yarda;
    console.log(valor);
    console.log(isNaN(valor));
if (isNaN(valor)) {
        metro = pulgada = pie = yarda = 0;
    }

else{
    if (unidad == "unid_metro") {
        metro = valor;
        pulgada = metro * 39.3701;
        pie = metro * 3.28084;
        yarda = metro * 1.09361;
    }
    if (unidad == "unid_pulgada") {
        pulgada = valor;
        metro = pulgada * 0.0254;
        pie = pulgada * 0.0833333;
        yarda = pulgada * 0.0277778;
    }
    if (unidad == "unid_pie") {
        pie = valor;
        metro = pie * 0.3048;
        pulgada = pie * 12;
        yarda = pie * 0.333333;
    }
    if (unidad == "unid_yarda") {
        yarda = valor;
        metro = yarda * 0.9144;
        pulgada = yarda * 36;
        pie = yarda * 3;
    }
}
    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda;
}

function convertirGR(id)
{
    var grad ,rad;
    if (id=="grados"){
       grad=document.getElementById("grados").value;
        rad=(grad*Math.PI)/180;

    }
    else if(id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI

    }
document.getElementById("grados").value=grad;
document.getElementById("radianes").value=rad;
} 