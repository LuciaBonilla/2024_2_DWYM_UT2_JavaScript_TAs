// -> VARIABLES GLOBALES.
// Elementos del HTML.
const inputText = document.getElementById("input-text");
const inputRepetitions = document.getElementById("input-repetitions");
const buttonRepeat = document.getElementById("button-repeat");
const outputText = document.getElementById("output-text");

// -> FUNCIONES.
/**
 * Retorna el texto de entrada repetido una cierta cantidad de veces para el HTML.
 * @param {*} text Texto a repetir.
 * @param {*} repetitions Cantidad de veces a repetir el texto.
 * @returns 
 */
function repeatString(text, repetitions) {
    let result = "";
    for (let i = 0; i < repetitions; i++) {
        // Agrega <br> para salto de línea.
        result += (text + "<br>");
    }
    return result;
}

/**
 * Limpia la salida y actualiza su contenido con lo que retorna {@link repeatString}.
 */
function showRepeatString() {
    outputText.innerHTML = repeatString(inputText.value, parseInt(inputRepetitions.value));
}

// -> EVENTOS.
// Ejecuta cuando se apreta el botón.
buttonRepeat.addEventListener("click", () =>
    showRepeatString()
);