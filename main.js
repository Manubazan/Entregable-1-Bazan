const productos = ["Laptop", "Celular", "Tablet", "Auriculares"];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let usuario = "";

const nombreInput = document.getElementById("nombreUsuario");
const comenzarBtn = document.getElementById("comenzarBtn");
const nombreMostrado = document.getElementById("nombreMostrado");

const contenedorProductos = document.getElementById("contenedorProductos");
const listaProductos = document.getElementById("listaProductos");
const contenedorCarrito = document.getElementById("contenedorCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const vaciarCarritoBtn = document.getElementById("vaciarCarrito");

comenzarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  if (nombre === "") {
    alert("Por favor, ingresá tu nombre.");
    return;
  }

  usuario = nombre;
  nombreMostrado.textContent = usuario;
  contenedorProductos.classList.remove("oculto");
  contenedorCarrito.classList.remove("oculto");

  mostrarProductos();
  renderizarCarrito();
});

// Mostrar lista de productos con botón "Agregar"
function mostrarProductos() {
  listaProductos.innerHTML = "";

  productos.forEach((producto) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${producto}
      <button onclick="agregarAlCarrito('${producto}')">Agregar</button>
    `;
    listaProductos.appendChild(li);
  });
}

// Agrega un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  guardarCarrito();
  renderizarCarrito();
}

// Renderiza el carrito en pantalla
function renderizarCarrito() {
  listaCarrito.innerHTML = "";

  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(li);
  });
}

// Elimina un producto del carrito
function eliminarDelCarrito(indice) {
  carrito.splice(indice, 1);
  guardarCarrito();
  renderizarCarrito();
}

// Vaciar carrito
vaciarCarritoBtn.addEventListener("click", () => {
  carrito = [];
  guardarCarrito();
  renderizarCarrito();
});

// Guardar en localStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}