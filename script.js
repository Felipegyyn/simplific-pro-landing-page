// Countdown Timer
function initCountdown() {
    let minutes = 30;
    let seconds = 0;
    
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    function updateCountdown() {
        if (seconds === 0) {
            if (minutes === 0) {
                // Reset countdown when it reaches zero
                minutes = 30;
                seconds = 0;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
        
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every second
    setInterval(updateCountdown, 1000);
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe special feature
    const specialFeature = document.querySelector('.special-feature');
    if (specialFeature) {
        specialFeature.style.opacity = '0';
        specialFeature.style.transform = 'translateY(30px)';
        specialFeature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(specialFeature);
    }
}

// Button click tracking (for analytics)
function initButtonTracking() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Track click event (you can integrate with analytics here)
            console.log('CTA button clicked:', button.textContent.trim());
        });
    });
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.dashboard-image');
    
    if (hero && heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < hero.offsetHeight) {
                heroImage.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(5deg) translateY(${rate}px)`;
            }
        });
    }
}

// Mobile menu toggle (if needed in future)
function initMobileMenu() {
    // Placeholder for mobile menu functionality
    // Can be expanded if navigation is added
}

// Form validation (if forms are added)
function initFormValidation() {
    // Placeholder for form validation
    // Can be expanded if contact forms are added
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initFAQ();
    initSmoothScrolling();
    initAnimations();
    initButtonTracking();
    initParallax();
    initMobileMenu();
    initFormValidation();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility change (pause/resume countdown)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, you might want to pause certain animations
        console.log('Page hidden');
    } else {
        // Page is visible again
        console.log('Page visible');
    }
});

// Resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Handle any resize-specific logic here
    const width = window.innerWidth;
    
    if (width < 768) {
        // Mobile adjustments
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    `;
    
    button.addEventListener('click', scrollToTop);
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
        } else {
            button.style.opacity = '0';
        }
    });
}

