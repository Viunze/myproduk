// ============================================
// DIGITAL PREMIUM - MAIN SCRIPT
// ============================================

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// ============================================
// MAIN INITIALIZATION
// ============================================
function initializeApp() {
    setupNavigation();
    setupScrollAnimations();
    setupButtonAnimations();
    setupWhatsAppButton();
    setupProductCards();
    loadUserPreferences();
}

// ============================================
// 1. NAVIGATION SETUP
// ============================================
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.product-section');

    // Click handler untuk nav items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Remove active class dari semua
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class ke item yang diklik
            item.classList.add('active');
        });
    });

    // Scroll event untuk highlight nav item
    window.addEventListener('scroll', () => {
        updateActiveNavItem(sections, navItems);
    });
}

function updateActiveNavItem(sections, navItems) {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
}

// ============================================
// 2. SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.7s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe semua product cards dan feature cards
    document.querySelectorAll('.product-card, .feature-card').forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// 3. BUTTON ANIMATIONS & INTERACTIONS
// ============================================
function setupButtonAnimations() {
    const buttons = document.querySelectorAll('.buy-button, .cta-button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });

        button.addEventListener('click', (e) => {
            createRippleEffect(e, button);
        });
    });
}

function createRippleEffect(e, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x - size / 2 + 'px';
    ripple.style.top = y - size / 2 + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// ============================================
// 4. WHATSAPP BUTTON INTERACTIONS
// ============================================
function setupWhatsAppButton() {
    const whatsappFloat = document.querySelector('.whatsapp-float');

    if (whatsappFloat) {
        // Pulse animation on load
        whatsappFloat.style.animation = 'glow 2s ease-in-out infinite';

        // Remove animation on hover
        whatsappFloat.addEventListener('mouseenter', () => {
            whatsappFloat.style.animation = 'none';
        });

        whatsappFloat.addEventListener('mouseleave', () => {
            whatsappFloat.style.animation = 'glow 2s ease-in-out infinite';
        });

        // Scroll reveal animation
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercent > 20) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.pointerEvents = 'auto';
            } else {
                whatsappFloat.style.opacity = '0.7';
            }
        });
    }
}

// ============================================
// 5. PRODUCT CARDS ENHANCEMENTS
// ============================================
function setupProductCards() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeInUp 0.7s ease-out ${0.4 + index * 0.1}s forwards`;

        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });

        // Add click handler untuk buy buttons
        const buyButton = card.querySelector('.buy-button');
        if (buyButton) {
            buyButton.addEventListener('click', (e) => {
                e.preventDefault();
                handleProductClick(card);
            });
        }
    });
}

function handleProductClick(card) {
    const productTitle = card.querySelector('h3').textContent;
    const priceTag = card.querySelector('.price-tag')?.textContent || 'Hubungi kami untuk info harga';
    const productDesc = card.querySelector('p').textContent;

    // Bisa digunakan untuk modal atau langsung ke WhatsApp
    const message = `Halo! Saya tertarik dengan layanan: ${productTitle}\n${priceTag}\n\n${productDesc}`;
    redirectToWhatsApp(message);
}

// ============================================
// 6. WHATSAPP REDIRECT
// ============================================
function redirectToWhatsApp(message) {
    const phoneNumber = '6287703248232';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Track in analytics jika ada
    trackEvent('WhatsApp', 'Click', 'Product Inquiry');
    
    window.open(whatsappURL, '_blank');
}

// ============================================
// 7. SMOOTH SCROLL FUNCTION
// ============================================
function scrollToContact() {
    const element = document.querySelector('.whatsapp-float');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Trigger pulse animation
        element.style.animation = 'pulse 0.5s ease-out';
    }
}

// ============================================
// 8. USER PREFERENCES (LOCAL STORAGE FALLBACK)
// ============================================
function loadUserPreferences() {
    // Simpan preference pengunjung
    const visitCount = getVisitCount();
    
    if (visitCount === 1) {
        showWelcomeAnimation();
    }

    // Track user behavior
    trackPageView();
}

function getVisitCount() {
    try {
        let count = parseInt(localStorage.getItem('visitCount')) || 0;
        count++;
        localStorage.setItem('visitCount', count);
        return count;
    } catch (e) {
        console.log('LocalStorage tidak tersedia');
        return 0;
    }
}

function showWelcomeAnimation() {
    const header = document.querySelector('header');
    if (header) {
        header.style.animation = 'slideDown 0.6s ease-out';
    }
}

// ============================================
// 9. ANALYTICS TRACKING (GOOGLE ANALYTICS SUPPORT)
// ============================================
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_path': window.location.pathname
        });
    }
}

// ============================================
// 10. UTILITY FUNCTIONS
// ============================================

// Debounce function untuk scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get element safely
function getElement(selector) {
    return document.querySelector(selector);
}

// Get all elements safely
function getAllElements(selector) {
    return document.querySelectorAll(selector);
}

// Add class to element
function addClass(element, className) {
    if (element) element.classList.add(className);
}

// Remove class from element
function removeClass(element, className) {
    if (element) element.classList.remove(className);
}

// Toggle class
function toggleClass(element, className) {
    if (element) element.classList.toggle(className);
}

// ============================================
// 11. MOBILE MENU (JIKA DIPERLUKAN)
// ============================================
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            toggleClass(navMenu, 'active');
            toggleClass(menuToggle, 'active');
        });

        // Close menu saat nav item diklik
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                removeClass(navMenu, 'active');
                removeClass(menuToggle, 'active');
            });
        });
    }
}

// ============================================
// 12. PERFORMANCE OPTIMIZATION
// ============================================

// Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// 13. ERROR HANDLING & LOGGING
// ============================================

// Log errors
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
    // Bisa dikirim ke error tracking service
});

// ============================================
// 14. KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    // Escape key
    if (e.key === 'Escape') {
        // Close any open modals or menus
    }

    // Ctrl/Cmd + K untuk quick WhatsApp
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        scrollToContact();
    }
});

// ============================================
// 15. CUSTOM RIPPLE EFFECT STYLES (INJECTED)
// ============================================
function injectRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleAnimation 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes rippleAnimation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% {
                box-shadow: 0 8px 32px rgba(0, 208, 255, 0.4);
            }
            50% {
                box-shadow: 0 8px 60px rgba(0, 208, 255, 0.8);
            }
        }
    `;
    document.head.appendChild(style);
}

// Inject ripple styles saat load
injectRippleStyles();

// ============================================
// 16. EXPORT FUNCTIONS (OPSIONAL)
// ============================================
// Untuk keperluan modular
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        redirectToWhatsApp,
        scrollToContact,
        trackEvent,
        debounce
    };
}
