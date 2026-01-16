// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileCloseBtn = document.querySelector('.mobile-close');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileMenuBtn?.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });
    
    mobileCloseBtn?.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
    
    // Mobile Dropdown Toggle
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.classList.toggle('active');
        });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileNav.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize components
    initializeCookieConsent();
    initializeLiveChat();
    initializeBackToTop();
});

// Cookie Consent
function initializeCookieConsent() {
    const cookieBanner = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    
    // Check if user has already made a choice
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('active');
        }, 1000);
    }
    
    acceptBtn?.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('active');
        // Initialize analytics cookies here
    });
    
    declineBtn?.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBanner.classList.remove('active');
    });
}

// Initialize other components
function initializeLiveChat() {
    // Chat functionality is in chat-widget.js
    console.log('Live chat ready to initialize');
}

function initializeBackToTop() {
    // Back to top functionality is in back-to-top.js
    console.log('Back to top ready to initialize');
}