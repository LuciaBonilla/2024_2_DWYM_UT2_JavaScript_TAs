// Objetivo: Crear un contador que aumente cada vez que se hace clic en un botón.

// -> VARIABLES GLOBALES
// Elementos del HTML.
const outputNumber = document.getElementById("output-number");
const buttonIncrease = document.getElementById("button-increase");
// Contador.
let counter = 0;

// -> EVENTOS
buttonIncrease.addEventListener("click", function () {
    counter++;
    outputNumber.textContent = counter;
});