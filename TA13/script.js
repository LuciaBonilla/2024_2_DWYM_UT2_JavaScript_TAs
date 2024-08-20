// Objetivo: Cambiar el texto de un elemento al hacer clic en un botón.

// -> VARIABLES GLOBALES
// Elementos del HTML.
const outputText = document.getElementById("output-text");
const buttonChangeText = document.getElementById("button-changeText");

// -> EVENTOS
buttonChangeText.addEventListener("click", function () {
    outputText.textContent = "Texto cambiado";
});