// Main JavaScript - Actualizado con navegación por temas

document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Desde Cero - Sitio cargado correctamente');

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#tema')) {
                showTopicContent(targetId);
                return;
            }
            
            const target = document.querySelector(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    function showTopicContent(topicId) {
        const content = document.getElementById(topicId);
        if (content) {
            document.querySelectorAll('.content-detail').forEach(el => el.style.display = 'none');
            content.style.display = 'block';
            setTimeout(() => content.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
        }
    }

    document.querySelectorAll('.content-detail').forEach(el => el.style.display = 'none');

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

    console.log('%c💻 ¡Bienvenido a JavaScript Desde Cero!', 'font-size: 20px; color: #f7df1e; font-weight: bold;');
});
