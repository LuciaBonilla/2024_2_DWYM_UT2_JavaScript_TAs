/**
 * Retorna el texto de entrada repetido una cierta cantidad de veces para el HTML.
 * @param {*} text Texto a repetir.
 * @param {*} repetitions Cantidad de veces a repetir el texto.
 * @returns 
 */
function repeatString(text, repetitions) {
    let result = "";
    for (let i = 0; i < repetitions; i++) {
        result += (text + "<br>");
    }
    return result;
}

// Elementos del HTML.
const inputText = document.getElementById("input-text");
const inputRepetitions = document.getElementById("input-repetitions");
const buttonRepeat = document.getElementById("button-repeat");
const outputText = document.getElementById("output-text");

/**
 * Limpia la salida y actualiza su contenido con lo que retorna {@link repeatString}.
 */
function executeRepeatString() {
    outputText.innerHTML = repeatString(inputText.value, parseInt(inputRepetitions.value));
}

// Ejecuta cuando se apreta el botón.
buttonRepeat.addEventListener("click", () =>
    executeRepeatString()
);