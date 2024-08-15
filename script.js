// JavaScript de base pour ajouter des interactions
document.addEventListener("DOMContentLoaded", function() {
    // Par exemple, vous pouvez ajouter une fonction pour un scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
