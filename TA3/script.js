// -> VARIABLES GLOBALES
const array = [];
// Elementos del HTML.
const inputElementToAdd = document.getElementById("input-elementToAdd");
const buttonAdd = document.getElementById("button-add");
const inputElementToRemove = document.getElementById("input-elementToRemove");
const buttonRemove = document.getElementById("button-remove");
const outputArray = document.getElementById("output-array");

// -> FUNCIONES
function removeFromArray(item) {
    const index = array.indexOf(item);

    // Si index es negativo, entonces no está en el array.
    if (index > -1) {
        // Quita el elemento.
        array.splice(index, 1);
    }
}

function addToArray(item) {
    // Agrega el item al final.
    array.push(item);
}

function updateArrayText() {
    outputArray.textContent = array.toString();
}

// -> EVENTOS
buttonAdd.addEventListener("click", function () {
    addToArray(inputElementToAdd.value);
    updateArrayText();
});

buttonRemove.addEventListener("click", function () {
    removeFromArray(inputElementToRemove.value);
    updateArrayText();
});