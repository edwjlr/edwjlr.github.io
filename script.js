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
        darkModeLabel.textContent = 'Dark Mode';
    } else {
        darkModeLabel.textContent = 'Light Mode'; // Default
    }

    // Add event listener to toggle dark mode
    toggleCheckbox.addEventListener('change', () => {
        const isDarkMode = toggleCheckbox.checked;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            darkModeLabel.textContent = 'Dark Mode';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            darkModeLabel.textContent = 'Light Mode';
        }
    });
});

// Skills
        document.addEventListener('DOMContentLoaded', () => {
            const skills = {
                all: [
                    { name: 'HTML', icon: 'fab fa-html5', color: '#e34f26' },
                    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572b6' },
                    { name: 'C++', icon: 'fas fa-code', color: '#00599C' },
                    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
                    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
                    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
                    { name: 'Flask', icon: 'fab fa-python', color: '#3776ab' },
                    { name: 'TensorFlow', icon: 'fas fa-brain', color: '#f37a20' },
                    { name: 'OpenCV', icon: 'fas fa-camera', color: '#cc0000' },
                    { name: 'Git', icon: 'fas fa-code-branch', color: '#6e5494' },
                    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
                    { name: 'VS Code', icon: 'fas fa-laptop-code', color: '#007bff' },
                    { name: 'GPU Acceleration', icon: 'fas fa-bolt', color: '#f39c12' },
                    { name: 'Parallel Computing', icon: 'fas fa-project-diagram', color: '#3498db' },
                    { name: 'REST API Development', icon: 'fas fa-network-wired', color: '#6c757d' },
                    { name: 'AWS', icon: 'fab fa-aws', color: '#232f3e' },
                    { name: 'Google Cloud Platform', icon: 'fab fa-google', color: '#4285f4' },
                    { name: 'Firebase', icon: 'fas fa-fire', color: '#ffca28' },
                    { name: 'NumPy', icon: 'fas fa-chart-line', color: '#4caf50' },
                    { name: 'pandas', icon: 'fas fa-table', color: '#00758f' },
                    { name: 'Matplotlib', icon: 'fas fa-chart-pie', color: '#6a1b9a' }
                ],
                languages: [
                    { name: 'HTML', icon: 'fab fa-html5', color: '#e34f26' },
                    { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572b6' },
                    { name: 'C++', icon: 'fas fa-code', color: '#00599C' },
                    { name: 'JavaScript', icon: 'fab fa-js', color: '#f7df1e' },
                    { name: 'Python', icon: 'fab fa-python', color: '#3776ab' }
                ],
                frameworks: [
                    { name: 'React', icon: 'fab fa-react', color: '#61dafb' },
                    { name: 'Flask', icon: 'fab fa-python', color: '#3776ab' },
                    { name: 'TensorFlow', icon: 'fas fa-brain', color: '#f37a20' },
                    { name: 'OpenCV', icon: 'fas fa-camera', color: '#cc0000' }
                ],
                tools: [
                    { name: 'Git', icon: 'fas fa-code-branch', color: '#6e5494' },
                    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
                    { name: 'VS Code', icon: 'fas fa-laptop-code', color: '#007bff' }
                ],
                specialized: [
                    { name: 'GPU Acceleration', icon: 'fas fa-bolt', color: '#f39c12' },
                    { name: 'Parallel Computing', icon: 'fas fa-project-diagram', color: '#3498db' },
                    { name: 'REST API Development', icon: 'fas fa-network-wired', color: '#6c757d' }
                ],
                cloud: [
                    { name: 'AWS', icon: 'fab fa-aws', color: '#232f3e' },
                    { name: 'Google Cloud Platform', icon: 'fab fa-google', color: '#4285f4' },
                    { name: 'Firebase', icon: 'fas fa-fire', color: '#ffca28' }
                ],
                machinelearning: [
                    { name: 'TensorFlow', icon: 'fas fa-brain', color: '#f37a20' },
                    { name: 'NumPy', icon: 'fas fa-chart-line', color: '#4caf50' },
                    { name: 'pandas', icon: 'fas fa-table', color: '#00758f' },
                    { name: 'Matplotlib', icon: 'fas fa-chart-pie', color: '#6a1b9a' }
                ]
            };

            const skillBtns = document.querySelectorAll('.skill-btn');
            const skillsDisplay = document.getElementById('skills-display');

            const displaySkills = (category) => {
                skillsDisplay.innerHTML = skills[category]
                    .map(skill => `
                        <div class="skill">
                            <i class="${skill.icon}" style="font-size: 2em; color: ${skill.color};"></i>
                            <p>${skill.name}</p>
                        </div>
                    `)
                    .join('');
            };

            skillBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    skillBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    displaySkills(btn.getAttribute('data-category'));
                });
            });

            displaySkills('all'); // Default category
        });