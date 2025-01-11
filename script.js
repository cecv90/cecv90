// Llamar al DOM de los elementos
const navbarToggler = document.querySelector('.navbar-toggler');
const infoOculta = document.querySelector('#info-oculta');

// Asignar evento de clic al toggler
navbarToggler.addEventListener('click', function() {
    // Mostrar o esconder la sección con información de "Sobre mí" y "Contacto" cuando el menú se expanda
    if (infoOculta.style.display === "none" || infoOculta.style.display === "") {
        infoOculta.style.display = "block"; // Mostrar la información
    } else {
        infoOculta.style.display = "none"; // Ocultar la información
    }
});
