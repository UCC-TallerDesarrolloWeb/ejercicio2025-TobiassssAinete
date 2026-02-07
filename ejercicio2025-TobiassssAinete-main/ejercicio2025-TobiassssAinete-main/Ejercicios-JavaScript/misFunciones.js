/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirunidades
 * @param {string} unidad -Unidad ingresada:metro,pie,pulgada,yarda
 * @param {number} valor - valor numerico ingresado por el usuario (puede ser numeros)
 * @return Valor que retorna
 */

function convertirunidades(unidad, valor) {
  let metro, pie, pulgada, yarda;
  if (unidad == "unid_metro") {
    metro = valor;
    pie = 3.28 * valor;
    pulgada = 39.37 * valor;
    yarda = 1.0936 * valor;
  } else if (unidad == "unid_pie") {
    pie = valor;
    metro = 0.3048 * valor;
    pulgada = 12 * valor;
    yarda = 0.33 * valor;
  } else if (unidad == "unid_yarda") {
    yarda = valor;
    metro = 0.9144 * valor;
    pulgada = 36 * valor;
    pie = 3 * valor;
  } else if (unidad == "unid_pulgada") {
    pulgada = valor;
    metro = 0.0254 * valor;
    yarda = 0.0277 * valor;
    pie = 0.0833333 * valor;
  }

  document.getElementById("metro").value = metro;
  document.getElementById("pie").value = pie;
  document.getElementById("pulgada").value = pulgada;
  document.getElementById("yarda").value = yarda;
}

function convertirGR(id, valor) {
  let cantGrados, canRadianes;

  if (id == "grados") {
    cantGrados = valor;
    canRadianes = (cantGrados * Math.PI) / 180;
    document.getElementById("radianes").value = canRadianes;
  } else {
    canRadianes = valor;
    cantGrados = (canRadianes * 180) / Math.PI;
    document.getElementById("grados").value = cantGrados;
  }
}
function mostrar_ocultarDiv(valorMO) {
  if (valorMO == "val_mostrar") {
    document.getElementById("divMo").style.display = "block";
  } else if (valorMO == "val_ocultar") {
    document.getElementById("divMo").style.display = "none";
  }
}

function sumar() {
  sum1 = document.getElementById("nums1").value;
  sum2 = document.getElementById("nums2").value;

  document.getElementById("totals").value = Number(sum1) + Number(sum2);
  if (isNaN(sum1) || isNaN(sum2)) {
    alert("MAL");
  }
}
function restar() {
  res1 = document.getElementById("numr1").value;
  res2 = document.getElementById("numr2").value;
  document.getElementById("totalR").value = Number(res1) - Number(res2);
  if (isNaN(res1) || isNaN(res2)) {
    alert("MAL");
  }
}
function multiplicar() {
  mul1 = document.getElementById("numm1").value;
  mul2 = document.getElementById("numm2").value;
  document.getElementById("totalM").value = Number(mul1) * Number(mul2);
  if (isNaN(mul1) || isNaN(mul2)) {
    alert("MAL");
  }
}
function dividir() {
  div1 = document.getElementById("numd1").value;
  div2 = document.getElementById("numd2").value;
  document.getElementById("totalD").value = Number(div1) / Number(div2);
  if (isNaN(div1) || isNaN(div2)) {
    alert("MAL");
  }
}
