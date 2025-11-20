// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    // Toggle active class on hamburger and nav links
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Animate links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking on a link
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            links.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .step, .app-store-btn, .play-store-btn');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const featureCards = document.querySelectorAll('.feature-card');
    const steps = document.querySelectorAll('.step');
    const downloadButtons = document.querySelectorAll('.app-store-btn, .play-store-btn');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    });
    
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    });
    
    downloadButtons.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px)';
        btn.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
    });
    
    // Initial check for elements in viewport
    animateOnScroll();
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Add animation to hero content
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(20px)';
        heroImage.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
        
        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 600);
    }
});

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Simple i18n for landing page (index.html)
const translations = {
    en: {
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.download': 'Download',
        'nav.privacy': 'Privacy Policy',
        'nav.terms': 'Terms of Use',

        'hero.title': 'Organize your next dancing trip with westie notes',
        'hero.subtitle': 'Simple, fast, and secure note-taking for everyone.',
        'hero.ctaPrimary': 'Download Now',
        'hero.ctaSecondary': 'Learn More',

        'features.title': 'Amazing Features',
        'features.calendar.title': 'Calendar View',
        'features.calendar.text': 'Plan and view all your dance events in a clean, intuitive calendar.',
        'features.expenses.title': 'Expenses Logging',
        'features.expenses.text': 'Track travel, passes, and accommodation costs for each trip.',
        'features.autocomplete.title': 'West Coast Swing Events Autocomplete',
        'features.autocomplete.text': 'Quickly add popular West Coast Swing events with smart autocomplete.',

        'how.title': 'How It Works',
        'how.step1.title': 'Download the App',
        'how.step1.text': 'Available on iOS, Android, and Web.',
        'how.step2.title': 'Register your events',
        'how.step2.text': 'Log your events in seconds and start taking notes.',
        'how.step3.title': 'Stay Organized',
        'how.step3.text': 'Keep all your travel details organized and accessible.',

        'download.title': 'Download Westie Notes Today',
        'download.appstore.small': 'Download on the',
        'download.appstore.big': 'App Store',
        'download.play.small': 'Get it on',
        'download.play.big': 'Google Play',

        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use',
        'footer.contact': 'Contact Us',
        'footer.copyright': '&copy; 2025 WestieNotes. All rights reserved.'
    },
    es: {
        'nav.features': 'Funciones',
        'nav.howItWorks': 'Cómo funciona',
        'nav.download': 'Descargar',
        'nav.privacy': 'Política de privacidad',
        'nav.terms': 'Términos de uso',

        'hero.title': 'Organiza tu próximo viaje de baile con Westie Notes',
        'hero.subtitle': 'Sencillo, rápido y seguro para tomar notas y organizarlo todo.',
        'hero.ctaPrimary': 'Descargar ahora',
        'hero.ctaSecondary': 'Saber más',

        'features.title': 'Funciones destacadas',
        'features.calendar.title': 'Vista de calendario',
        'features.calendar.text': 'Planifica y consulta todos tus eventos de baile en un calendario claro e intuitivo.',
        'features.expenses.title': 'Registro de gastos',
        'features.expenses.text': 'Controla los costes de viaje, pases y alojamiento para cada evento.',
        'features.autocomplete.title': 'Autocompletado de eventos de West Coast Swing',
        'features.autocomplete.text': 'Añade rápidamente los eventos más populares de West Coast Swing con autocompletado inteligente.',

        'how.title': 'Cómo funciona',
        'how.step1.title': 'Descarga la app',
        'how.step1.text': 'Disponible en iOS, Android y Web.',
        'how.step2.title': 'Registra tus eventos',
        'how.step2.text': 'Añade tus eventos en segundos y empieza a tomar notas.',
        'how.step3.title': 'Mantente organizado',
        'how.step3.text': 'Mantén todos los detalles de tus viajes organizados y siempre accesibles.',

        'download.title': 'Descarga Westie Notes hoy',
        'download.appstore.small': 'Descargar en',
        'download.appstore.big': 'App Store',
        'download.play.small': 'Consíguelo en',
        'download.play.big': 'Google Play',

        'footer.privacy': 'Política de privacidad',
        'footer.terms': 'Términos de uso',
        'footer.contact': 'Contacto',
        'footer.copyright': '&copy; 2025 WestieNotes. Todos los derechos reservados.'
    },
    fr: {
        'nav.features': 'Fonctionnalités',
        'nav.howItWorks': 'Comment ça marche',
        'nav.download': 'Télécharger',
        'nav.privacy': 'Politique de confidentialité',
        'nav.terms': "Conditions d'utilisation",

        'hero.title': 'Organisez votre prochain voyage de danse avec Westie Notes',
        'hero.subtitle': 'Simple, rapide et sécurisé pour prendre des notes et tout organiser.',
        'hero.ctaPrimary': 'Télécharger maintenant',
        'hero.ctaSecondary': 'En savoir plus',

        'features.title': 'Fonctionnalités phares',
        'features.calendar.title': 'Vue calendrier',
        'features.calendar.text': 'Planifiez et visualisez tous vos événements de danse dans un calendrier clair et intuitif.',
        'features.expenses.title': 'Suivi des dépenses',
        'features.expenses.text': 'Suivez les coûts de voyage, les pass et l’hébergement pour chaque événement.',
        'features.autocomplete.title': 'Saisie automatique des événements West Coast Swing',
        'features.autocomplete.text': 'Ajoutez rapidement les événements de West Coast Swing les plus populaires grâce à l’autocomplétion intelligente.',

        'how.title': 'Comment ça marche',
        'how.step1.title': "Téléchargez l'application",
        'how.step1.text': 'Disponible sur iOS, Android et sur le Web.',
        'how.step2.title': 'Enregistrez vos événements',
        'how.step2.text': 'Ajoutez vos événements en quelques secondes et commencez à prendre des notes.',
        'how.step3.title': 'Restez organisé',
        'how.step3.text': 'Gardez tous les détails de vos voyages organisés et facilement accessibles.',

        'download.title': 'Téléchargez Westie Notes dès aujourd’hui',
        'download.appstore.small': 'Télécharger sur',
        'download.appstore.big': 'App Store',
        'download.play.small': 'Disponible sur',
        'download.play.big': 'Google Play',

        'footer.privacy': 'Politique de confidentialité',
        'footer.terms': "Conditions d'utilisation",
        'footer.contact': 'Contact',
        'footer.copyright': '&copy; 2025 WestieNotes. Tous droits réservés.'
    }
};

function getInitialLanguage() {
    try {
        const stored = window.localStorage ? localStorage.getItem('lang') : null;
        if (stored && translations[stored]) return stored;
    } catch (e) {
        // ignore access errors (private mode, etc.)
    }

    const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    if (browser.startsWith('es')) return 'es';
    if (browser.startsWith('fr')) return 'fr';
    return 'en';
}

function setLanguage(lang) {
    if (!translations[lang]) return;

    // Update html lang attribute
    const root = document.documentElement;
    if (root) {
        root.setAttribute('lang', lang);
    }

    // Persist choice
    try {
        if (window.localStorage) {
            localStorage.setItem('lang', lang);
        }
    } catch (e) {
        // ignore
    }

    // Update translated elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = translations[lang][key];
        if (typeof value === 'string') {
            el.innerHTML = value;
        }
    });

    // Update legal links on landing page to localized versions (if present)
    const navPrivacy = document.getElementById('nav-privacy');
    const navTerms = document.getElementById('nav-terms');
    const footerPrivacy = document.getElementById('footer-privacy');
    const footerTerms = document.getElementById('footer-terms');

    if (navPrivacy && navTerms && footerPrivacy && footerTerms) {
        if (lang === 'en') {
            navPrivacy.setAttribute('href', 'privacy-policy.html');
            footerPrivacy.setAttribute('href', 'privacy-policy.html');
            navTerms.setAttribute('href', 'terms-of-use.html');
            footerTerms.setAttribute('href', 'terms-of-use.html');
        } else if (lang === 'es') {
            navPrivacy.setAttribute('href', '/es/privacy-policy.html');
            footerPrivacy.setAttribute('href', '/es/privacy-policy.html');
            navTerms.setAttribute('href', '/es/terms-of-use.html');
            footerTerms.setAttribute('href', '/es/terms-of-use.html');
        } else if (lang === 'fr') {
            navPrivacy.setAttribute('href', '/fr/privacy-policy.html');
            footerPrivacy.setAttribute('href', '/fr/privacy-policy.html');
            navTerms.setAttribute('href', '/fr/terms-of-use.html');
            footerTerms.setAttribute('href', '/fr/terms-of-use.html');
        }
    }

    // Update active state on language options
    document.querySelectorAll('.lang-option[data-lang]').forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);

    const langOptions = document.querySelectorAll('.lang-option[data-lang]');
    langOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = option.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
