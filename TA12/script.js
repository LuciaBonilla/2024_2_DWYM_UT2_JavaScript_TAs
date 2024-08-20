// -> VARIABLES GLOBALES
// Elementos del HTML.
const inputPasswordLength = document.getElementById("input-passwordLength");
const buttonCreatePassword = document.getElementById("button-createPassword");
const outputPassword = document.getElementById("output-password");

// -> FUNCIONES
function generatePassword(length) {
    let password = "";
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$-_¿?¡!";

    if (length < 8) {
        length = 8;
    }

    for (let i = 0; i < length; i++) {
        let charIndex = Math.floor(Math.random() * alphabet.length + 1);

        password += alphabet.charAt(charIndex)
    }

    return password;
}

function showPassword() {
    outputPassword.textContent = generatePassword(parseInt(inputPasswordLength.value));
}

// -> EVENTOS
buttonCreatePassword.addEventListener("click", () =>
    showPassword()
);