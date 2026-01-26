/* ============================================
   SAKURA DEV PORTFOLIO - JavaScript
   Handles: Navigation, Animations, Interactions
   ============================================ */

// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// ============================================
// NAVBAR - Scroll Effect & Mobile Toggle
// ============================================

/**
 * Menambahkan class 'scrolled' pada navbar saat user scroll
 * Memberikan efek visual yang lebih subtle saat scroll
 */
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

/**
 * Toggle mobile navigation menu
 */
function toggleMobileNav() {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

/**
 * Close mobile nav when clicking a link
 */
function closeMobileNav() {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Update active nav link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            // Add active to current section link
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

// Event Listeners for Navigation
window.addEventListener('scroll', handleNavbarScroll);
window.addEventListener('scroll', updateActiveNavLink);
navToggle.addEventListener('click', toggleMobileNav);

// Close mobile nav when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// ============================================
// BACK TO TOP BUTTON
// ============================================

/**
 * Show/hide back to top button based on scroll position
 */
function handleBackToTop() {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

/**
 * Smooth scroll to top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', handleBackToTop);
backToTop.addEventListener('click', scrollToTop);

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Intersection Observer untuk animasi scroll
 * Menambahkan class 'animated' saat element masuk viewport
 */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger saat 10% element terlihat
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan delay berdasarkan index untuk efek stagger
            const delay = entry.target.dataset.delay || 0;
            
            setTimeout(() => {
                entry.target.classList.add('animated');
            }, delay * 100);
            
            // Stop observing setelah animated
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe semua element dengan class animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach((element, index) => {
    element.dataset.delay = index % 4; // Stagger effect
    animationObserver.observe(element);
});

// ============================================
// PORTFOLIO FILTER
// ============================================

/**
 * Filter project cards berdasarkan kategori
 */
function filterProjects(category) {
    projectCards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            // Re-trigger animation
            card.classList.remove('animated');
            setTimeout(() => {
                card.classList.add('animated');
            }, 50);
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener untuk filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const filter = button.dataset.filter;
        filterProjects(filter);
    });
});

// ============================================
// CONTACT FORM
// ============================================

/**
 * Handle form submission
 * Dalam implementasi nyata, ini akan mengirim data ke server
 */
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Simple validation
    if (!data.name || !data.email || !data.message) {
        showNotification('Mohon isi semua field yang diperlukan', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Mohon masukkan email yang valid', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success
        showNotification('Pesan berhasil dikirim! Terima kasih telah menghubungi saya 💕', 'success');
        
        // Reset form
        this.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

/**
 * Show notification toast
 * @param {string} message - Pesan yang ditampilkan
 * @param {string} type - Type notifikasi ('success' atau 'error')
 */
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-icon">
            ${type === 'success' ? '✓' : '!'}
        </span>
        <span class="notification-message">${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#B5E48C' : '#FFB5A7'};
        color: #4A4A4A;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 600;
        z-index: 9999;
        animation: slideInRight 0.5s ease forwards;
    `;
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 4000);
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Get navbar height
            const navbar = document.querySelector('.navbar');
            const navHeight = navbar ? navbar.offsetHeight : 80;
            
            // Calculate target position
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;
            
            // Custom smooth scroll animation
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 800; // ms
            let start = null;
            
            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                // Easing function (easeInOutCubic) for smoother effect
                const ease = (t, b, c, d) => {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                };
                
                window.scrollTo(0, ease(progress, startPosition, distance, duration));
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    // Ensure final position is accurate
                    window.scrollTo(0, offsetPosition);
                }
            }
            
            window.requestAnimationFrame(step);
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                closeMobileNav();
            }
        }
    });
});

// ============================================
// PARALLAX EFFECT FOR HERO DECORATIONS
// ============================================

/**
 * Subtle parallax effect untuk decorations di hero section
 */
function handleParallax() {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (!hero) return;
    
    const heroHeight = hero.offsetHeight;
    
    // Only apply parallax when in hero section
    if (scrolled < heroHeight) {
        const leaves = document.querySelectorAll('.floating-leaf');
        leaves.forEach((leaf, index) => {
            const speed = 0.1 + (index * 0.05);
            leaf.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
}

window.addEventListener('scroll', handleParallax);

// ============================================
// COSPLAY GALLERY - LIGHTBOX (Optional)
// ============================================

/**
 * Simple lightbox untuk gallery cosplay
 * Bisa dikembangkan lebih lanjut atau menggunakan library
 */
const cosplayItems = document.querySelectorAll('.cosplay-item');

cosplayItems.forEach(item => {
    item.addEventListener('click', () => {
        // Placeholder untuk lightbox functionality
        // Dalam implementasi nyata, ini akan membuka gambar dalam modal
        console.log('Lightbox clicked - implement actual lightbox here');
    });
});

// ============================================
// TYPING EFFECT (Optional Enhancement)
// ============================================

/**
 * Simple typing effect untuk hero subtitle
 * Bisa diaktifkan jika ingin efek typing
 */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment untuk mengaktifkan typing effect
// const typingElement = document.querySelector('.typing-text');
// if (typingElement) {
//     typeWriter(typingElement, 'Programmer', 100);
// }

// ============================================
// LAZY LOADING FOR IMAGES (Future Enhancement)
// ============================================

/**
 * Lazy loading untuk gambar
 * Berguna saat sudah ada gambar asli
 */
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// ============================================
// INITIALIZE
// ============================================

/**
 * Initial setup saat DOM loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initial navbar state
    handleNavbarScroll();
    
    // Initial active nav link
    updateActiveNavLink();
    
    // Add loaded class to body for initial animations
    document.body.classList.add('loaded');
    
    console.log('🌸 SakuraDev Portfolio loaded successfully!');
});

// ============================================
// EASTER EGG (Just for fun)
// ============================================

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            // Trigger easter egg
            showNotification('🌸 Kamu menemukan easter egg! Terima kasih sudah mengunjungi! 🎮', 'success');
            
            // Add fun animation
            document.body.style.animation = 'rainbow 2s';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 2000);
            
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
