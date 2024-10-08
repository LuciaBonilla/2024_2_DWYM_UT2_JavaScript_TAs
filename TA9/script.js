// -> VARIABLES GLOBALES
const nums = [];
// Elementos del HTML.
const inputNumber = document.getElementById("input-number");
const buttonAddNumber = document.getElementById("button-addNumber");
const outputNumbers = document.getElementById("output-numbers");
const outputOddNumbers = document.getElementById("output-oddNumbers");

// -> FUNCIONES
function getOdds(nums) {
    let odds = [];
    nums.forEach((num) => {
        if (num % 2 !== 0) {
            odds.push(num);
        }
    });
    return odds;
}

function addNumber(num) {
    nums.push(num);
}

function showNumbers() {
    outputNumbers.textContent = nums.toString();
    outputOddNumbers.textContent = getOdds(nums).toString();
}

// -> EVENTOS
buttonAddNumber.addEventListener("click", () => {
    addNumber(parseFloat(inputNumber.value));
    showNumbers();
});