// Toggle dark mode
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Tooltip for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.innerText = this.getAttribute('href');
        this.appendChild(tooltip);
    });
    icon.addEventListener('mouseleave', function() {
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});

// Animation on page load
window.addEventListener('load', function() {
    const profileCard = document.querySelector('.profile-card');
    profileCard.classList.add('animate');
});