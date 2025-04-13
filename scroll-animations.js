/* Handles fade-in animations on scroll */

document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');

    // Function to check if an element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Return true if element is at least 20% visible
        return (
            rect.top <= windowHeight * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
        fadeElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);

    // Initial check on page load
    handleScrollAnimation();

    // Project hover effects (Now handled by CSS)

    // Skill item hover effects
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.color = 'var(--accent-color)';
            }
        });

        item.addEventListener('mouseleave', function () {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.color = '';
            }
        });
    });

    // Add smooth transition effects to contact methods
    const contactMethods = document.querySelectorAll('.contact-method');

    contactMethods.forEach(method => {
        method.addEventListener('mouseenter', function () {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });

        method.addEventListener('mouseleave', function () {
            const icon = this.querySelector('svg');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
});