// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(nl => nl.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding content section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add('active');
            }
            
            // Scroll to top of main content
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollTop = 0;
            }
        });
    });
    
    // Handle hash changes (for direct links)
    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            // Remove active class from all
            navLinks.forEach(link => link.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Activate corresponding nav link
            const activeLink = document.querySelector(`a[href="#${hash}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // Show corresponding section
            const activeSection = document.getElementById(hash);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        }
    }
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial load
    handleHashChange();
    
    // If no hash, default to home
    if (!window.location.hash) {
        const homeLink = document.querySelector('a[href="#home"]');
        const homeSection = document.getElementById('home');
        
        if (homeLink) homeLink.classList.add('active');
        if (homeSection) homeSection.classList.add('active');
    }
});
