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
