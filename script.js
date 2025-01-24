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
    const toggleCheckbox = document.getElementById('dark-mode-checkbox');
    const darkModeLabel = document.getElementById('dark-mode-label');

    // Check local storage for saved preference and apply it
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
        darkModeLabel.textContent = 'Dark Mode'; // Reflect the current mode
    } else {
        darkModeLabel.textContent = 'Light Mode'; // Default mode
    }

    // Add event listener to toggle dark mode
    toggleCheckbox.addEventListener('change', () => {
        const isDarkMode = toggleCheckbox.checked;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            darkModeLabel.textContent = 'Dark Mode'; // When dark mode is active
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            darkModeLabel.textContent = 'Light Mode'; // When light mode is active
        }
    });
});