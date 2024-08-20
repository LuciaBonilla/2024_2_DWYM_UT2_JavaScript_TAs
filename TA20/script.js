// Objetivo: Cambiar la imagen al pasar el mouse por encima y volver a la original al quitarlo.

// Elemento imagen en el HTML.
const outputImage = document.getElementById("output-image");

// Rutas de las imágenes.
const sourceImage1 = "img1.webp";
const sourceImage2 = "img2.webp";

// Cuando el puntero está sobre la imagen, entonces cambia a la imagen 2.
outputImage.addEventListener("mouseover", function () {
    outputImage.src = sourceImage2;
});

// Cuando el puntero está fuera de la imagen, entonces cambia a la imagen 1.
outputImage.addEventListener("mouseout", function () {
    outputImage.src = sourceImage1;
});