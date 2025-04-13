/* Handles mobile menu, smooth scrolling, and initializations */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const menuLinks = document.querySelectorAll('.nav-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (mobileMenuBtn.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Get header height
                    const headerHeight = document.querySelector('.header').offsetHeight;

                    // Calculate the target position with offset
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Header shadow on scroll
    const header = document.querySelector('.header');

    function updateHeaderShadow() {
        if (window.scrollY > 10) {
            header.style.boxShadow = 'var(--shadow-medium)';
        } else {
            header.style.boxShadow = 'var(--shadow-small)';
        }
    }

    window.addEventListener('scroll', updateHeaderShadow);

    // Initialize current state
    updateHeaderShadow();

    // Highlight active section in navigation
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollPosition = window.scrollY;

        // Remove all active classes first
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navigationLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navigationLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navigationLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Initialize active section highlight
    highlightNavigation();
});