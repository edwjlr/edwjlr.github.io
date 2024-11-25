// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button
    const toggleButton = document.getElementById('dark-mode-toggle');

    // Check local storage for saved preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Add event listener to toggle dark mode
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const isDarkMode = document.body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
        });
    }
});
