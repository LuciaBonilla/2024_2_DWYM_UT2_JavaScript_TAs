const nums = [];

function getSum() {
    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    });
    return sum;
}

function addNumber(num) {
    nums.push(num);
}

// Elementos del HTML.
const inputNumber = document.getElementById("input-number");
const buttonAddNumber = document.getElementById("button-addNumber");
const outputNumbers = document.getElementById("output-numbers");
const outputSum = document.getElementById("output-sum");

function showNumbers() {
    outputNumbers.textContent = nums.toString();
    outputSum.textContent = getSum().toString();
}

buttonAddNumber.addEventListener("click", () => {
    addNumber(parseFloat(inputNumber.value));
    showNumbers();
});