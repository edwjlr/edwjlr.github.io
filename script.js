document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Select the toggle button
const toggleButton = document.getElementById('dark-mode-toggle');

// Check local storage for saved preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode and save preference
toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
});
