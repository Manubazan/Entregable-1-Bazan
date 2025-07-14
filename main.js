// variables, constantes y usuario
const productos = ["Laptop", "Celular", "Tablet", "Auriculares"];
let carrito = [];
let usuario = "";

  // Función principal para iniciar el simulador

function iniciarSimulador() {
  alert("Bienvenido al simulador de compras");
  usuario = prompt("¿Cuál es tu nombre?");
  
  if (!usuario) {
    alert("No ingresaste un nombre. Finalizando simulador.");
    return;
  }

  alert(`Hola, ${usuario}. Vamos a comprar.`);

  let seguirComprando = true;

  while (seguirComprando) {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
      console.log(`${i + 1}. ${productos[i]}`);
    }

    let seleccion = prompt("Elige un producto por número (1 a 4):");

    let indice = parseInt(seleccion) - 1;

    if (indice >= 0 && indice < productos.length) {
      carrito.push(productos[indice]);
      alert(`${productos[indice]} ha sido agregado a tu carrito.`);
    } else {
      alert("Selección inválida. Intenta de nuevo.");
    }

    seguirComprando = confirm("¿Deseas agregar otro producto?");
  }

  mostrarResumen();
}

// resumen carrito 
function mostrarResumen() {
  if (carrito.length === 0) {
    alert("No compraste nada.");
    return;
  }

  let resumen = `Gracias por tu compra, ${usuario}.\nHas comprado:\n`;

  for (let producto of carrito) {
    resumen += `- ${producto}\n`;
  }

  alert(resumen);
  console.log("Compra finalizada:", carrito);
}