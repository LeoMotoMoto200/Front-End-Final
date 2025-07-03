document.addEventListener('DOMContentLoaded', () => {

    // EFECTO DE SOMBRA EN LA NAVEGACIÓN AL HACER SCROLL
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ANIMACIÓN DE ELEMENTOS AL HACER SCROLL
    // Esta es una forma moderna de detectar cuándo un elemento es visible en la pantalla
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    });

    // Seleccionamos todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => {
        observer.observe(el); // Ponemos cada elemento bajo observación
    });

});