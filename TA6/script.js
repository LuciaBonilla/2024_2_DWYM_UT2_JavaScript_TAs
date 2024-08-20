// -> VARIABLES GLOBALES
// Elementos del HTML.
const inputCelsius = document.getElementById("input-celsius");
const outputFahrenheit = document.getElementById("output-fahrenheit");
const inputFahrenheit = document.getElementById("input-fahrenheit");
const outputCelsius = document.getElementById("output-celsius");
const buttonConvert = document.getElementById("button-convert");

// -> FUNCIONES
function convertToCelsius(temp) {
    const result = (temp - 32) * (5 / 9);
    return Math.round(result * 10) / 10;
}

function convertToFahrenheit(temp) {
    const result = (temp * (9 / 5)) + 32;
    return Math.round(result * 10) / 10;
}

function showConvertion() {
    outputCelsius.textContent = convertToCelsius(parseFloat(inputFahrenheit.value)) + " °C";
    outputFahrenheit.textContent = convertToFahrenheit(parseFloat(inputCelsius.value)) + " °F";
}

// -> EVENTOS
buttonConvert.addEventListener("click", () =>
    showConvertion()
);