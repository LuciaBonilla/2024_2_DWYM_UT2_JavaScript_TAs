function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    return false;
}

// Elementos del HTML.
const inputYear = document.getElementById("input-year");
const buttonVerify = document.getElementById("button-verify");
const outputIsLeapYear = document.getElementById("output-isLeapYear");

function verifyIfIsLeapYear() {
    outputIsLeapYear.textContent = isLeapYear(parseInt(inputYear.value));
}

buttonVerify.addEventListener("click", () =>
    verifyIfIsLeapYear()
);