// Array de lugares turísticos de La Rioja
const lugares = [
  {
    nombre: "Talampaya",
    descripcion: "Parque Nacional con imponentes cañones y formaciones rocosas únicas.",
    categoria: "naturaleza"
  },
  {
    nombre: "Cuesta de Miranda",
    descripcion: "Ruta de montaña con vistas espectaculares y curvas pronunciadas.",
    categoria: "naturaleza"
  },
  {
    nombre: "Dique Los Sauces",
    descripcion: "Embalse cercano a la capital, ideal para actividades recreativas.",
    categoria: "naturaleza"
  },
  {
    nombre: "Chilecito",
    descripcion: "Ciudad histórica vinculada a la actividad minera de la provincia.",
    categoria: "ciudad"
  },
  {
    nombre: "Catedral Basílica de La Rioja",
    descripcion: "Templo principal de la capital, de gran valor histórico y religioso.",
    categoria: "ciudad"
  },
  {
    nombre: "Vinicola Chañarmuyo",
    descripcion: "Bodega boutique con paisajes de viñedos rodeados de montañas.",
    categoria: "ciudad"
  }
];

// Referencias a elementos del DOM
const contenedor = document.getElementById("contenedor-tarjetas");
const selectFiltro = document.getElementById("filtro-categoria");
const btnOrdenar = document.getElementById("btn-ordenar");

// Función que dibuja las tarjetas en pantalla a partir de un array
function renderizarTarjetas(arrayLugares) {
  contenedor.innerHTML = ""; // limpiamos el contenedor antes de volver a dibujar

  arrayLugares.forEach(function (lugar) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <span class="categoria">${lugar.categoria}</span>
      <h3>${lugar.nombre}</h3>
      <p>${lugar.descripcion}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// Función que filtra el array según la categoría elegida
function filtrarLugares() {
  const categoriaSeleccionada = selectFiltro.value;

  if (categoriaSeleccionada === "todos") {
    renderizarTarjetas(lugares);
  } else {
    const filtrados = lugares.filter(function (lugar) {
      return lugar.categoria === categoriaSeleccionada;
    });
    renderizarTarjetas(filtrados);
  }
}

// Función que ordena el array alfabéticamente por nombre
function ordenarLugares() {
  const ordenados = [...lugares].sort(function (a, b) {
    return a.nombre.localeCompare(b.nombre);
  });
  renderizarTarjetas(ordenados);
}

// Eventos
selectFiltro.addEventListener("change", filtrarLugares);
btnOrdenar.addEventListener("click", ordenarLugares);

// Render inicial al cargar la página
renderizarTarjetas(lugares);