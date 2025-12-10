document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-links a');
    
    // Function to set the active state on the correct navigation link
    function setActiveNav() {
        // Get the current page file name (e.g., 'home', 'games', 'contact')
        const path = window.location.pathname.split('/');
        let currentPage = path.pop().replace('.html', '') || 'home';
        
        // Handle index.html redirect case:
        if (currentPage === 'index') {
            currentPage = 'home';
        }

        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's ID matches the current page name
            if (link.id === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // Call on page load
    setActiveNav();
    
    // Since we are using standard links, this history listener is no longer strictly necessary
    // for navigation, but it's good practice for deep links or if navigation changes
    // were happening via JS history API outside of simple clicks.
    window.addEventListener('popstate', setActiveNav);
});