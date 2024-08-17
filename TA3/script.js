// Variable global "array".
const array = [];

function removeFromArray(item) {
    const index = array.indexOf(item);

    // Si index es negativo, entonces no está en el array.
    if (index > -1) {
        // Quita el elemento.
        array.splice(index, 1);
    }
}

function addItemToArray(item) {
    // Agrega el item al final.
    array.push(item);
}

// Elementos del HTML.
const inputElementToAdd = document.getElementById("input-elementToAdd");
const buttonAdd = document.getElementById("button-add");
const inputElementToRemove = document.getElementById("input-elementToRemove");
const buttonRemove = document.getElementById("button-remove");
const outputArray = document.getElementById("output-array");

function updateTextArray() {
    outputArray.textContent = array.toString();
}

buttonAdd.addEventListener("click", function () {
    addItemToArray(inputElementToAdd.value);
    updateTextArray();
});

buttonRemove.addEventListener("click", function () {
    removeFromArray(inputElementToRemove.value);
    updateTextArray();
});