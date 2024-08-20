// -> VARIABLES GLOBALES
// Elementos del HTML.
const inputNormalText = document.getElementById("input-normalText");
const buttonInvert = document.getElementById("button-invert");
const outputInvertedText = document.getElementById("output-invertedText");

// -> FUNCIONES
function reverseString(text) {
    // Separa los caracteres, invierte el orden y los junta.
    return text.split("").reverse().join("")
}

function showReverseString() {
    outputInvertedText.innerHTML = reverseString(inputNormalText.value);
}

// -> EVENTOS
// Ejecuta cuando se apreta el botón.
buttonInvert.addEventListener("click", () =>
    showReverseString()
);