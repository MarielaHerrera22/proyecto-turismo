// Referencias a elementos del DOM
const formPersonas = document.getElementById("form-personas");
const cuerpoTabla = document.getElementById("cuerpo-tabla");

// Array que guarda las personas cargadas (opcional pero útil para tener un registro)
const personas = [];

function calcularIMC(peso, altura) {
  if (altura <= 0 || peso <= 0) {
    return "N/D"; // No Disponible, evita división por cero o valores inválidos
  }
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}
// Función que crea una fila <tr> con los datos de una persona
function crearFila(persona) {
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${persona.nombre}</td>
    <td>${persona.apellido}</td>
    <td>${persona.edad}</td>
    <td>${persona.altura}</td>
    <td>${persona.peso}</td>
    <td>${persona.imc}</td>
    <td><button class="btn-eliminar">Eliminar</button></td>
  `;

  // Evento para eliminar esta fila específica
  const btnEliminar = fila.querySelector(".btn-eliminar");
  btnEliminar.addEventListener("click", function () {
    fila.remove();
  });

  return fila;
}

// Evento submit del formulario
formPersonas.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la página se recargue

  // Leemos los valores de los inputs
  const nombre = capitalizar(document.getElementById("nombre").value);
  const apellido = capitalizar(document.getElementById("apellido").value);
  const edad = document.getElementById("edad").value;
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);

  // Calculamos el IMC
  const imc = calcularIMC(peso, altura);

  // Función que pone en mayúscula la primera letra de un texto
 function capitalizar(texto) {
  if (texto.length === 0) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
 }

  // Armamos el objeto persona
  const nuevaPersona = { nombre, apellido, edad, altura, peso, imc };

  // Lo guardamos en el array (registro interno)
  personas.push(nuevaPersona);

  // Creamos la fila y la agregamos a la tabla
  const fila = crearFila(nuevaPersona);
  cuerpoTabla.appendChild(fila);

  // Limpiamos el formulario para cargar la siguiente persona
  formPersonas.reset();
});