function sumAll(a, b) {
    let sum = 0;
    let min;
    let max;

    if (a >= b) {
        max = a;
        min = b;
    } else {
        max = b;
        min = a;
    }

    while (max >= min) {
        sum += max;
        max--;
    }

    return sum;
}

// Elementos del HTML.
const inputNumberA = document.getElementById("input-numberA");
const inputNumberB = document.getElementById("input-numberB");
const buttonCalculate = document.getElementById("button-calculate");
const outputSum = document.getElementById("output-sum");

function executeSumAll() {
    outputSum.textContent = sumAll(parseInt(inputNumberA.value), parseInt(inputNumberB.value));
}

buttonCalculate.addEventListener("click", () =>
    executeSumAll()
);