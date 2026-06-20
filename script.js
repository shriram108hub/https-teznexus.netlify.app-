document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    // Check localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    }

    // --- 2. Hero Text Rotation (Fast & Smooth) ---
    const heroTextElement = document.getElementById('hero-changing-text');
    if (heroTextElement) {
        const heroTexts = [
            "Aapka Apna Digital Cyber Cafe",
            "Sabhi Sarkari Form Yahan Bhare Jate Hain",
            "Aadhaar aur Banking Ki Suvidha",
            "Fast, Secure aur Bharosemand"
        ];
        let heroIndex = 0;

        setInterval(() => {
            heroTextElement.style.opacity = '0';
            heroTextElement.style.transform = 'translateY(10px) scale(0.98)';
            
            setTimeout(() => {
                heroIndex = (heroIndex + 1) % heroTexts.length;
                heroTextElement.textContent = heroTexts[heroIndex];
                
                heroTextElement.style.opacity = '1';
                heroTextElement.style.transform = 'translateY(0) scale(1)';
            }, 300); 
        }, 3000); 
    }

    // --- 3. Right Panel Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    const links = document.querySelectorAll('.nav-links a');

    function toggleMenu() {
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    }

    // Toggle on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking outside (on overlay)
    overlay.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Close menu when clicking on a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});