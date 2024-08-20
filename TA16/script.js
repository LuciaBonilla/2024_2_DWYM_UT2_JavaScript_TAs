// Objetivo: Mostrar y ocultar un elemento al hacer clic en un botón.

// -> VARIABLES GLOBALES
// Elementos del HTML.
const outputText = document.getElementById("output-text");
const button = document.getElementById("button-show/hide");
// Bandera para indicar si está oculto el párrafo.
let isHide = false;

// -> EVENTOS
button.addEventListener("click", function () {
    if (isHide) {
        outputText.style.display = "block";
    } else {
        outputText.style.display = "none";
    }
    isHide = !isHide
});