const projectContainers = document.querySelectorAll('.proyecto-contenedor');

projectContainers.forEach(container => {
    const projectText = container.querySelector('.proyecto-texto');

    container.addEventListener('mouseenter', () => {
        projectText.style.visibility = 'visible'; 
        projectText.style.opacity = '1';
        projectText.style.transform = 'scale(1)';
    });

    container.addEventListener('mouseleave', () => {
        projectText.style.opacity = '0'; 
        projectText.style.transform = 'scale(0)';
        setTimeout(() => {
            projectText.style.visibility = 'hidden'; 
        }, 1000); 
    });
});

const mobileQuery = window.matchMedia("(max-width: 600px)");
const tabletQuery = window.matchMedia("(min-width: 601px) and (max-width: 1024px)");

function manejarCambio(e) {
  if (e.matches) {
    console.log("Aplicando cambios específicos para esta consulta de media.");
    // Realiza cambios específicos según el tamaño de pantalla.
  }
}

mobileQuery.addListener(manejarCambio);
tabletQuery.addListener(manejarCambio);
