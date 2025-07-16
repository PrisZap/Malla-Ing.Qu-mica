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

function obtenerEstadoElectiva(nombre) {
  return localStorage.getItem(`electiva_${nombre}`) || "desactivado";
}

function guardarEstadoElectiva(nombre, estado) {
  localStorage.setItem(`electiva_${nombre}`, estado);
}

function estaHabilitada(materia) {
  return materia.correlativas.every(cod => obtenerEstado(cod) === "aprobado");
}

function cambiarEstado(elem, codigo) {
  const materia = materias.find(m => m.codigo === codigo);
  if (!materia) return;

  let estadoActual = obtenerEstado(codigo);
  let nuevoEstado = ESTADOS[(ESTADOS.indexOf(estadoActual) + 1) % ESTADOS.length];

  if (nuevoEstado === "aprobado" && !estaHabilitada(materia)) {
    alert("No podés aprobar esta materia sin tener todas las correlativas aprobadas.");
    return;
  }

  guardarEstado(codigo, nuevoEstado);
  renderizarMalla();
}

function cambiarEstadoElectiva(elem, nombre) {
  let estadoActual = obtenerEstadoElectiva(nombre);
  let nuevoEstado = ESTADOS[(ESTADOS.indexOf(estadoActual) + 1) % ESTADOS.length];
  guardarEstadoElectiva(nombre, nuevoEstado);
  renderizarMalla();
}

function renderizarMalla() {
  const malla = document.getElementById("malla-container");
  malla.innerHTML = "";

  [...new Set(materias.map(m => m.anio))].sort().forEach(nivel => {
    const divNivel = document.createElement("div");
    divNivel.className = "nivel";
    divNivel.innerHTML = `<h3>${nivel}° Nivel</h3>`;

    materias.filter(m => m.anio === nivel).forEach(m => {
      const estado = obtenerEstado(m.codigo);
      const div = document.createElement("div");
      div.className = `materia ${estado}`;

      if (estado !== "aprobado" && estaHabilitada(m)) {
        div.classList.add("habilitada");
      }

      div.innerHTML = `<strong>${m.nombre}</strong><div class="carga">${m.creditos} hs</div>`;
      if (m.correlativas.length > 0) {
        const correlativasNombres = m.correlativas
          .map(c => materias.find(mat => mat.codigo === c)?.nombre || c)
          .join(", ");
        div.title = "Correlativas: " + correlativasNombres;
      }
      div.onclick = () => cambiarEstado(div, m.codigo);
      divNivel.appendChild(div);
    });

    malla.appendChild(divNivel);
  });

const divElectivas = document.createElement("div");
divElectivas.className = "nivel electivas-dos-columnas";
divElectivas.innerHTML = `<h3>Electivas</h3>`;
  electivas.forEach(e => {
    const estado = obtenerEstadoElectiva(e.nombre);
    const div = document.createElement("div");
    div.className = `materia electiva ${estado}`;
    div.innerHTML = `<strong>${e.nombre}</strong><div class="carga">${e.creditos} hs - Año ${e.anio}</div>`;
    div.onclick = () => cambiarEstadoElectiva(div, e.nombre);
    divElectivas.appendChild(div);
  });
  malla.appendChild(divElectivas);

  actualizarResumen();
  sincronizarScroll();
}

function actualizarResumen() {
  let totalCreditos = materias.reduce((sum, m) => sum + m.creditos, 0);
  let aprobadas = materias.filter(m => obtenerEstado(m.codigo) === "aprobado").reduce((sum, m) => sum + m.creditos, 0);
  let totalElectivas = electivas.reduce((sum, e) => sum + e.creditos, 0);
  let aprobadasElectivas = electivas.filter(e => obtenerEstadoElectiva(e.nombre) === "aprobado").reduce((sum, e) => sum + e.creditos, 0);
  let porcentaje = ((aprobadas / totalCreditos) * 100).toFixed(1);

  document.getElementById("resumen-container").innerHTML = `
    <h3>Resumen de Progreso</h3>
    <p><strong>Carga Horaria Total Obligatoria:</strong> ${aprobadas} / ${totalCreditos} horas</p>
    <p><strong>Carga Horaria Total Electivas:</strong> ${aprobadasElectivas} / ${totalElectivas} horas</p>
    <p><strong>Progreso en Obligatorias:</strong> ${porcentaje}%</p>
  `;
}

function sincronizarScroll() {
  const malla = document.getElementById("malla-container");
  const barra = document.getElementById("scrollbar-flotante");
  const contenido = document.getElementById("scroll-contenido");
  contenido.style.width = malla.scrollWidth + "px";

  barra.addEventListener("scroll", () => {
    malla.scrollLeft = barra.scrollLeft;
  });
  malla.addEventListener("scroll", () => {
    barra.scrollLeft = malla.scrollLeft;
  });
}

document.addEventListener("DOMContentLoaded", renderizarMalla);
