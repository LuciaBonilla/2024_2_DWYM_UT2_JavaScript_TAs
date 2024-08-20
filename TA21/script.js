// Objetivo: Cambiar el estilo de un campo de texto cuando está enfocado.

// Input de texto.
const inputText = document.getElementById("input-text");

// Le quita el outline al input para que no tape el borde.
inputText.style.outline = "none";

// Colores de los bordes.
const lighterColor = "#ff85ce";
const darkerColor = "#8f0b5a";

// Le pone borde al input.
inputText.style.borderStyle = "solid";
inputText.style.borderWidth = "6px";
inputText.style.borderColor = lighterColor;

// Cuando el campo está en focus, cambia a un color más oscuro.
inputText.addEventListener("focusin", function () {
    inputText.style.borderColor = darkerColor;
});

// Cuando el campo no está en focus, cambia al color original de borde que se puso.
inputText.addEventListener("focusout", function () {
    inputText.style.borderColor = lighterColor;
});