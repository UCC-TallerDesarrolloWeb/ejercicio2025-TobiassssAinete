/**
 * Convierte entre unidades de longitud (metro, pulgada, pie, yarda)
 * @param {string} unidad - Unidad de entrada ("unid_metro", "unid_pulgada", "unid_pie", "unid_yarda")
 * @param {number} valor - Valor numérico a convertir
 */
convertirUnidades = (id,valor) => {
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace(",", ".")
    }
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    }else if(id==="metro"){
        met = valor;
        pul = valor*39.3701;
        pie = valor*3.28084;
        yar = valor*1.09361;
    }else if(id==="pulgada"){
        //tarea
    }
    else if(id==="pie"){
        //tarea
    }else if(id==="yarda"){
        //tarea
    }
    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie);
    document.lasUnidades.unid_yarda.value = Math.round(yar);
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

function mostrar_ocultar(valormo){
    if(valormo=="val_mostrar"){
document.getElementById("divmo").style.display='block';
    }
    else if(valormo="val_ocultar"){
        document.getElementById("divmo").style.display='none';
    }
}
function calcularsuma() {
  var num1, num2;
  num1 = document.getElementsByName("sum_num1")[0].value;
  num2 = document.getElementsByName("sum_num2")[0].value;
  document.getElementById("totalS").innerHTML = Number(num1) + Number(num2);
}

function calcularresta() {
  var num1, num2;
  num1 = document.getElementsByName("res_num1")[0].value;
  num2 = document.getElementsByName("res_num2")[0].value;
  document.getElementById("totalR").innerHTML = Number(num1) - Number(num2);
}

function calcularmul() {
  var num1, num2;
  num1 = document.getElementsByName("mul_num1")[0].value;
  num2 = document.getElementsByName("mul_num2")[0].value;
  document.getElementById("totalM").innerHTML = Number(num1) * Number(num2);
}

function calculardiv() {
  var num1, num2;
  num1 = document.getElementsByName("div_num1")[0].value;
  num2 = document.getElementsByName("div_num2")[0].value;
  document.getElementById("totalD").innerHTML = Number(num1) / Number(num2);
}
