// script.js
document.addEventListener('click', function(event) {
    // Get the elements
    const toggle      = document.getElementById('menu-toggle');
    const navbar      = document.querySelector('.navbar');       // ← the whole navbar container
    const navMenu     = document.querySelector('.nav-menu');     // ← your <ul> menu

    if (!toggle || !navbar) return;

    // Check if click happened inside the entire navbar (button + menu)
    const isClickInsideNavbar = navbar.contains(event.target);

    // If menu is open AND click is outside navbar → close it
    if (toggle.checked && !isClickInsideNavbar) {
        toggle.checked = false;
    }
});
// script.js – add this
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});
