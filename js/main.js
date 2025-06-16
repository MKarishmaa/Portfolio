document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close nav when a link is clicked (useful for single-page or overlay menus)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Optional: Smooth scrolling for anchor links (if you add any within a page)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust scroll position to account for fixed header
                const headerOffset = document.querySelector('.main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active nav link based on current page
    const currentPagePath = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        const linkPath = item.getAttribute('href');
        if (currentPagePath === linkPath || (currentPagePath === '' && linkPath === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active'); // Ensure other links are not active
        }
    });
});