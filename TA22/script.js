// Objetivo: Detectar el cambio de tamaño de la ventana del navegador.

// Párrafo con el tamaño (ancho y alto en píxeles) de la ventana.
const outputWindowSize = document.getElementById("output-windowSize");

// Toma el tamaño de la ventana actual y lo actualiza en el párrafo.
function updateWindowSizeInformation() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    outputWindowSize.textContent = `Ancho: ${w}px - Alto: ${h}px`;
}

// Ejecuta la función una vez para actualizar el párrafo.
updateWindowSizeInformation();

window.addEventListener("resize", function () {
    updateWindowSizeInformation();
});