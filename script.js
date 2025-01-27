// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    } else {
        navbar.style.background = 'transparent';
    }
});

// Typing animation for hero section
const heroTitle = document.querySelector('.hero h1');
const text = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < text.length) {
        heroTitle.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Portfolio items hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        overlay.style.bottom = '0';
    });

    item.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.portfolio-overlay');
        overlay.style.bottom = '-100%';
    });
});

// Skills animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Contact form validation
const contactButton = document.querySelector('.cta-button');
contactButton.addEventListener('click', function() {
    // You can add your contact form logic here
    console.log('Contact button clicked');
});

// Intersection Observer for timeline animation
const observerOptions = {
    root: null,
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(item => observer.observe(item));

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-finish');
    }
});

// Mobile menu toggle
let isMenuOpen = false;
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        navLinks.style.display = isMenuOpen ? 'flex' : 'none';
        menuToggle.classList.toggle('active');
    });
}

// Window resize handler for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else if (!isMenuOpen) {
        navLinks.style.display = 'none';
    }
});

// Dark/Light mode toggle
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', 
            document.body.classList.contains('light-mode') ? 'light' : 'dark'
        );
    });
}

// Initialize theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
});