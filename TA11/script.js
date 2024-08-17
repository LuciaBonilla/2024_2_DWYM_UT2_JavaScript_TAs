const nums = [];

function duplicates() {
    let duplicates = 0;
    let alreadySeen = [];

    for (let i = 0; i < nums.length; i++) {
        let actualNum = nums[i];
        if (alreadySeen.includes(actualNum)) {
            continue;
        }

        for (let j = 0; j < nums.length; j++) {
            let otherNum = nums[j];
            if ((i !== j) && (actualNum === otherNum)) {
                duplicates++;
                break;
            }
        }
        alreadySeen.push(actualNum);
    }
    return duplicates;
}

function addNumber(num) {
    nums.push(num);
}

// Elementos del HTML.
const inputNumber = document.getElementById("input-number");
const buttonAddNumber = document.getElementById("button-addNumber");
const outputNumbers = document.getElementById("output-numbers");
const outputDuplicatesQuantity = document.getElementById("output-duplicatesQuantity");

function showNumbers() {
    outputNumbers.textContent = nums.toString();
    outputDuplicatesQuantity.textContent = duplicates();
}

buttonAddNumber.addEventListener("click", () => {
    addNumber(parseFloat(inputNumber.value));
    showNumbers();
});