// Objetivo: Añadir nuevos elementos a una lista al hacer clic en un botón.

// -> VARIABLES GLOBALES
// Elementos del HTML.
const outputList = document.getElementById("output-list");
const inputElement = document.getElementById("input-element");
const buttonAddElement = document.getElementById("button-addElement");

// -> EVENTOS
buttonAddElement.addEventListener("click", function () {
    const newElement = document.createElement("li");
    newElement.textContent = inputElement.value;
    outputList.appendChild(newElement);
    inputElement.value = null;
});