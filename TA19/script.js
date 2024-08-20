// Objetivo: Validar un formulario en tiempo real.

// Elementos del HTML.
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputEmail = document.getElementById("input-email");
const inputSubmit = document.getElementById("input-submit");

function sendData(event) {
    const dataStatus = verifyData(inputUsername.value, inputPassword.value, inputEmail.value);
    alert(dataStatus.message);

    // Si la data no es válida, entonces no deja que se envíen los datos.
    if (dataStatus.isOkay === false) {
        event.preventDefault();
    }
}

function verifyData(username, password, email) {
    const dataStatus = {
        isOkay: true,
        message: "Correcto"
    };

    if (username === "" || password === "" || email === "") {
        dataStatus.message = "Hay campos vacíos";
        dataStatus.isOkay = false;
    }

    if (password.length < 8) {
        dataStatus.message = "La contraseña tiene menos de 8 caracteres";
        dataStatus.isOkay = false;
    }

    const emailElements = email.split("@");
    if (emailElements.length !== 2) {
        dataStatus.message = "La dirección de correo no es válida";
        dataStatus.isOkay = false;
    }

    return dataStatus;
}

inputSubmit.addEventListener("click", function (event) {
    sendData(event);
});