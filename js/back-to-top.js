// Back to Top Button
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.scrollThreshold = 300;
        
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.toggleVisibility());
        this.button?.addEventListener('click', () => this.scrollToTop());
    }
    
    toggleVisibility() {
        if (window.scrollY > this.scrollThreshold) {
            this.button?.classList.add('active');
        } else {
            this.button?.classList.remove('active');
        }
    }
    
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize back to top
document.addEventListener('DOMContentLoaded', () => {
    new BackToTop();
});