// Modal MUY simple (si lo usás)
function mostrarmodal(texto){
  document.getElementById("textoModal").innerText = texto || "Detalle…";
  document.getElementById("modal").showModal();
}
function cerrarmodal(){ document.getElementById("modal").close(); }

// ---- Carrito con localStorage ----
const KEY = "carrito";

// devuelve array del LS o []
function getCarrito(){
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

// guarda y actualiza badge
function setCarrito(arr){
  localStorage.setItem(KEY, JSON.stringify(arr));
  actualizarBadge();
}

// botón "Agregar al carrito" de cada card
function agregarCarrito(index){
  const p = productos[index];     // usa tu array del productos.js
  let cart = getCarrito();

  // si ya está, sumo cantidad; si no, lo agrego
  let item = cart.find(x => x.nombre === p.nombre);
  if(item){ item.cantidad += 1; }
  else { cart.push({ nombre: p.nombre, precio: p.precio, cantidad: 1 }); }

  setCarrito(cart);
  // alert opcional para que se note
  // alert(p.nombre + " agregado");
}

// numerito en el menú
function actualizarBadge(){
  const total = getCarrito().reduce((acc, it) => acc + it.cantidad, 0);
  const b = document.getElementById("badgeCarrito");
  if(b) b.textContent = total ? `(${total})` : "";
}

// al cargar la página
document.addEventListener("DOMContentLoaded", actualizarBadge);
