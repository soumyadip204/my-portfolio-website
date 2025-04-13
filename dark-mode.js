/* Handles the switching between light and dark mode */

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
    } else {
        // Check if user prefers dark mode
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (prefersDarkMode) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Theme toggle button click event
    themeToggle.addEventListener('click', function () {
        // Toggle dark mode class
        body.classList.toggle('dark-mode');

        // Update local storage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

        // Update icons (handled by CSS)

        // Update meta theme color
        updateMetaThemeColor(isDarkMode);
    });

    // Update meta theme color based on mode
    function updateMetaThemeColor(isDarkMode) {
        // If there's a theme-color meta tag, update it
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            // Create if doesn't exist
            const meta = document.createElement('meta');
            meta.name = 'theme-color';
            meta.content = isDarkMode ? '#1A1626' : '#F5F2ED';
            document.head.appendChild(meta);
        } else {
            // Update existing
            metaThemeColor.content = isDarkMode ? '#1A1626' : '#F5F2ED';
        }
    }

    // Initialize theme color
    updateMetaThemeColor(body.classList.contains('dark-mode'));
});