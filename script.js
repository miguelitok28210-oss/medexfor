// Función para el botón del Banner Principal
function boton() {
    const contenedorTexto = document.getElementById("palabra");
    
    contenedorTexto.innerText = "¡Bienvenido a la experiencia MenStream! Disfruta del mejor contenido.";
    contenedorTexto.style.color = "#00d2ff";
    contenedorTexto.style.fontSize = "1rem";
    contenedorTexto.style.marginTop = "20px";
}

// Efecto interactivo al hacer clic en las tarjetas de género
document.addEventListener("DOMContentLoaded", () => {
    const tarjetasGenero = document.querySelectorAll(".genre-card");

    tarjetasGenero.forEach(tarjeta => {
        tarjeta.addEventListener("click", () => {
            const nombreGenero = tarjeta.querySelector("h3").innerText;
            alert(`Cargando catálogo de: ${nombreGenero}`);
        });
    });
});