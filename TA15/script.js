// Objetivo: Eliminar un elemento específico (último) de la lista.

// -> VARIABLES GLOBALES
// Elementos del HTML.
const outputList = document.getElementById("output-list");
const inputElement = document.getElementById("input-element");
const buttonAddElement = document.getElementById("button-addElement");
const buttonDeleteLastElement = document.getElementById("button-deleteLastElement");

// -> EVENTOS
buttonAddElement.addEventListener("click", function () {
    const newElement = document.createElement("li");
    newElement.textContent = inputElement.value;
    outputList.appendChild(newElement);
    inputElement.value = null;
});

buttonDeleteLastElement.addEventListener("click", function () {
    outputList.removeChild(outputList.lastChild);
});