/* ============================================
   JavaScript Principal - JavaScript Desde Cero
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    console.log('⚡ JavaScript Desde Cero - Sitio cargado correctamente');

    // Toggle del menú móvil
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            // Si es un enlace a un tema, mostrar el contenido
            if (targetId.startsWith('#tema') || targetId.startsWith('#js-topic')) {
                showTopicContent(targetId);
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Función para mostrar contenido de tema
    function showTopicContent(topicId) {
        const content = document.getElementById(topicId);
        if (content) {
            // Ocultar todos los contenidos
            document.querySelectorAll('.content-detail, .topic-content').forEach(el => {
                el.style.display = 'none';
            });

            // Mostrar el contenido seleccionado
            content.style.display = 'block';

            // Scroll suave al contenido
            setTimeout(() => {
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // Ocultar todos los content-detail al cargar
    document.querySelectorAll('.content-detail, .topic-content').forEach(el => {
        el.style.display = 'none';
    });

    // Animaciones con Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.module, .resource-card, .code-block, .topic-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Mensaje de bienvenida
    console.log('%c⚡ ¡Bienvenido a JavaScript Desde Cero!', 'font-size: 20px; color: #f7df1e; font-weight: bold;');
    console.log('%cEl lenguaje de programación más popular del mundo', 'font-size: 14px; color: #323330;');
});
