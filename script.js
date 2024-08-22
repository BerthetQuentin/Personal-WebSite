document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMobileMenu = document.getElementById('navbar-mobile-menu');
    const menuItems = document.querySelectorAll('#navbar-mobile-menu li a');

    // Toggle the mobile menu when clicking the menu button
    menuToggle.addEventListener('click', function() {
        if (navbarMobileMenu.style.display === 'block') {
            navbarMobileMenu.style.display = 'none';
        } else {
            navbarMobileMenu.style.display = 'block';
        }
    });

    // Close the mobile menu when clicking on a menu item
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            navbarMobileMenu.style.display = 'none';
        });
    });

    // Optionally, close the mobile menu if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!navbarMobileMenu.contains(event.target) && event.target !== menuToggle) {
            navbarMobileMenu.style.display = 'none';
        }
    });
});