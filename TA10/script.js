// -> VARIABLES GLOBALES
const nums = [];
// Elementos del HTML.
const inputNumber = document.getElementById("input-number");
const buttonAddNumber = document.getElementById("button-addNumber");
const outputNumbers = document.getElementById("output-numbers");
const outputSum = document.getElementById("output-sum");

// -> FUNCIONES
function getSum(nums) {
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });
    return sum;
}

function addNumber(num) {
    nums.push(num);
}

function showNumbers() {
    outputNumbers.textContent = nums.toString();
    outputSum.textContent = getSum(nums).toString();
}

// -> EVENTOS
buttonAddNumber.addEventListener("click", () => {
    addNumber(parseFloat(inputNumber.value));
    showNumbers();
});