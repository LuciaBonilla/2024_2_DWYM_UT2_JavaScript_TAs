function reverseString(text) {
    // Separa los caracteres, invierte el orden y los junta.
    return text.split("").reverse().join("")
}

// Elementos del HTML.
const inputNormalText = document.getElementById("input-normalText");
const buttonInvert = document.getElementById("button-invert");
const outputInvertedText = document.getElementById("output-invertedText");

function executeReverseString() {
    outputInvertedText.innerHTML = reverseString(inputNormalText.value);
}

// Ejecuta cuando se apreta el botón.
buttonInvert.addEventListener("click", () =>
    executeReverseString()
);