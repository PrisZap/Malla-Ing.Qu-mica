// Datos definitivos de materias de Ingeniería Química
const materias = [
  { codigo: "1", nombre: "Quimica General", anio: 1, creditos: 5, correlativas: [] },
  { codigo: "2", nombre: "Analisis Matematico I", anio: 1, creditos: 5, correlativas: [] },
  { codigo: "3", nombre: "Fisica I", anio: 1, creditos: 5, correlativas: [] },
  { codigo: "4", nombre: "Algebra", anio: 1, creditos: 5, correlativas: [] },
  { codigo: "5", nombre: "Introduccion a Ing.Qca", anio: 1, creditos: 3, correlativas: [] },
  { codigo: "6", nombre: "Ingenieria y Sociedad", anio: 1, creditos: 2, correlativas: [] },
  { codigo: "7", nombre: "Sistema de Representacion", anio: 1, creditos: 2, correlativas: [] },
  { codigo: "8", nombre: "Fundamentos de Informatica", anio: 1, creditos: 2, correlativas: [] },
  { codigo: "9", nombre: "Analisis Matematico II", anio: 2, creditos: 5, correlativas: ["4", "2"] },
  { codigo: "10", nombre: "Fisica II", anio: 2, creditos: 5, correlativas: ["2", "3"] },
  { codigo: "11", nombre: "Introd. A Equipos y Procesos", anio: 2, creditos: 3, correlativas: ["1", "5"] },
  { codigo: "12", nombre: "Legislacion", anio: 2, creditos: 2, correlativas: ["5", "6"] },
  { codigo: "13", nombre: "Probabilidad y Estadistica", anio: 2, creditos: 3, correlativas: ["4", "2"] },
  { codigo: "14", nombre: "Quimica Inorganica", anio: 2, creditos: 4, correlativas: ["1"] },
  { codigo: "15", nombre: "Quimica Organica", anio: 2, creditos: 5, correlativas: ["1"] },
  { codigo: "16", nombre: "Ingles I", anio: 2, creditos: 2, correlativas: [] },
  { codigo: "17", nombre: "Balance de Masa y Energia", anio: 3, creditos: 3, correlativas: ["1","7","11","10","5","4","2"] },
  { codigo: "18", nombre: "Ciencia de los Materiales", anio: 3, creditos: 2, correlativas: ["11","14","15","5","1"] },
  { codigo: "19", nombre: "Fenomenos de transporte", anio: 3, creditos: 5, correlativas: ["11","9","10","4","1","2"] },
  { codigo: "20", nombre: "Fisicoquimica", anio: 3, creditos: 4, correlativas: ["11","9","10","4","1","2"] },
  { codigo: "21", nombre: "Ingles II", anio: 3, creditos: 2, correlativas: [] },
  { codigo: "22", nombre: "Matematica Superior Aplicada", anio: 3, creditos: 3, correlativas: ["9","4","2"] },
  { codigo: "23", nombre: "Microbiologia y Quimica Biologica", anio: 3, creditos: 3, correlativas: ["14","15","1"] },
  { codigo: "24", nombre: "Quimica Analitica", anio: 3, creditos: 4, correlativas: ["13","14","15","6","1"] },
  { codigo: "25", nombre: "Quimica Aplicada", anio: 3, creditos: 2, correlativas: ["11","14","15","10","5","6","1"] },
  { codigo: "26", nombre: "Termodinamica", anio: 3, creditos: 4, correlativas: ["14","9","10","2","1"] },
  { codigo: "27", nombre: "Diseño, Simulación, Optimización y Seguridad de Procesos", anio: 4, creditos: 4, correlativas: ["17","22","7","11","9","21"] },
  { codigo: "28", nombre: "Economia", anio: 4, creditos: 3, correlativas: ["11","6","4"] },
  { codigo: "29", nombre: "Ingenieria de las Reacciones Quimicas", anio: 4, creditos: 5, correlativas: ["17","26","20","19","14","15","9"] },
  { codigo: "30", nombre: "Maquinas e Instalaciones Electricas", anio: 4, creditos: 2, correlativas: ["31","11","10"] },
  { codigo: "31", nombre: "Operaciones Unitarias I", anio: 4, creditos: 5, correlativas: ["17","26","19","11","9","10"] },
  { codigo: "32", nombre: "Operaciones Unitarias II", anio: 4, creditos: 5, correlativas: ["26","20","19","11","9","10","15"] },
  { codigo: "33", nombre: "Organización Industrial", anio: 4, creditos: 3, correlativas: ["13","6","11","12"] },
  { codigo: "34", nombre: "Tecnologia de la Energia Termica", anio: 4, creditos: 5, correlativas: ["17","26","19","20","11","9","10"] },
  { codigo: "35", nombre: "Calidad y Control Estadístico de Proceso", anio: 5, creditos: 2, correlativas: ["13","2"] },
  { codigo: "36", nombre: "Control Automático de Procesos", anio: 5, creditos: 4, correlativas: ["27","32","17","22","24"] },
  { codigo: "37", nombre: "Higiene y Seguridad en el Trabajo", anio: 5, creditos: 2, correlativas: ["14","9","17","11"] },
  { codigo: "38", nombre: "Ingenieria Ambiental", anio: 5, creditos: 3, correlativas: ["20","31","32","29","12","17","24"] },
  { codigo: "39", nombre: "Mecanica Industrial", anio: 5, creditos: 2, correlativas: ["11","20","3","14","9"] },
  { codigo: "40", nombre: "Procesos Biotecnologicos", anio: 5, creditos: 3, correlativas: ["17","20","19","23","11","14","15"] },
  { codigo: "41", nombre: "Proyecto Final", anio: 5, creditos: 4, correlativas: ["27","31","32","34","29","33","17","20","19","25","28"] },
  { codigo: "42", nombre: "Practica Profesional Supervisada", anio: 5, creditos: 0, correlativas: ["27","31","32","34","29","33","17","20","19","25","28"] },
];

const electivas = [
  { nombre: "Comunicación Lingüística", anio: 1, creditos: 6 },
  { nombre: "Practicas de Laboratorio", anio: 2, creditos: 6 },
  { nombre: "Quimica Analitica Aplicada", anio: 4, creditos: 6 },
  { nombre: "Quimica de los Alimentos", anio: 4, creditos: 6 },
  { nombre: "Metodos Tradicionales de Preservacion de Alimentos", anio: 5, creditos: 6 },
  { nombre: "Metodos Emergentes de Preservacion de Alimentos", anio: 5, creditos: 5 },
  { nombre: "Gestion Ambiental", anio: 5, creditos: 6 },
  { nombre: "Higiene y Seguridad en el Trabajo", anio: 5, creditos: 6 },
  { nombre: "Gestion de Recursos Humanos", anio: 5, creditos: 5 },
  { nombre: "Formacion de Emprendedores", anio: 5, creditos: 8 },
  { nombre: "Tecnologia de los Alimentos", anio: 5, creditos: 6 },
  { nombre: "Ingenieria de las Instalaciones", anio: 5, creditos: 6 },
  { nombre: "Gestion de Residuos", anio: 5, creditos: 6 },
  { nombre: "Energias Renovables", anio: 5, creditos: 6 },
  { nombre: "Sociologia del Trabajo", anio: 5, creditos: 4 },
  { nombre: "Administracion de Negocios", anio: 5, creditos: 5 },
];

const ESTADOS = ["desactivado", "activado", "aprobado"];

function obtenerEstado(codigo) {
  return localStorage.getItem(`materia_${codigo}`) || "desactivado";
}

function guardarEstado(codigo, estado) {
  localStorage.setItem(`materia_${codigo}`, estado);
}

function cambiarEstado(elem, codigo) {
  let estadoActual = obtenerEstado(codigo);
  let index = ESTADOS.indexOf(estadoActual);
  let nuevoEstado = ESTADOS[(index + 1) % ESTADOS.length];
  guardarEstado(codigo, nuevoEstado);
  elem.className = `materia ${nuevoEstado}`;
  actualizarResumen();
}

function crearMateria(m) {
  const div = document.createElement("div");
  const estado = obtenerEstado(m.codigo);
  div.className = `materia ${estado}`;
  div.innerHTML = `
    <strong>${m.nombre}</strong>
    <div class="carga">${m.creditos} hs</div>
  `;
  div.onclick = () => cambiarEstado(div, m.codigo);
  return div;
}

function renderizarMalla() {
  const malla = document.getElementById("malla-container");
  malla.innerHTML = "";

  const niveles = [...new Set(materias.map(m => m.anio))].sort((a, b) => a - b);
  niveles.forEach(nivel => {
    const divNivel = document.createElement("div");
    divNivel.className = "nivel";
    divNivel.innerHTML = `<h3>${nivel}° Nivel</h3>`;

    const materiasDelNivel = materias.filter(m => m.anio === nivel);
    materiasDelNivel.forEach(m => {
      divNivel.appendChild(crearMateria(m));
    });

    malla.appendChild(divNivel);
  });

  // Cuadro Electivas
  const divElectivas = document.createElement("div");
  divElectivas.className = "nivel";
  divElectivas.innerHTML = `<h3>Electivas</h3>`;

  electivas.forEach(e => {
    const div = document.createElement("div");
    div.className = "materia";
    div.innerHTML = `<strong>${e.nombre}</strong><div class="carga">${e.creditos} hs - Año ${e.anio}</div>`;
    divElectivas.appendChild(div);
  });

  malla.appendChild(divElectivas);

  actualizarResumen();
}

function actualizarResumen() {
  let totalAprobado = 0;
  let totalCreditos = 0;

  materias.forEach(m => {
    totalCreditos += m.creditos;
    if (obtenerEstado(m.codigo) === "aprobado") {
      totalAprobado += m.creditos;
    }
  });

  const porcentaje = ((totalAprobado / totalCreditos) * 100).toFixed(1);
  const resumen = document.getElementById("resumen-container");
  resumen.innerHTML = `
    Carga horaria acumulada: <strong>${totalAprobado}</strong> horas<br/>
    Progreso: <strong>${porcentaje}%</strong>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarMalla();
});
