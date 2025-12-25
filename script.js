// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });
    
    // Form validation functions (for real-time validation)
    const contactForm = document.getElementById('websiteForm');
    if (contactForm) {
        // Real-time validation for form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const course = document.getElementById('course');
        const project = document.getElementById('project');
        const message = document.getElementById('message');
        const deadline = document.getElementById('deadline');
        
        const fields = [name, email, phone, course, project, message, deadline];
        fields.forEach(field => {
            if (field) {
                field.addEventListener('blur', function() {
                    validateField(this);
                });
                
                field.addEventListener('input', function() {
                    if (this.classList.contains('error')) {
                        validateField(this);
                    }
                });
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll animation for elements
    const animatedElements = document.querySelectorAll('.service-card, .feature, .pricing-item');
    
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
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Add counter animation for statistics (if we add any)
    // Add hover effects enhancement
    const interactiveElements = document.querySelectorAll('.service-card, .feature, .btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = this.style.transform.replace('scale(1.02)', '') + ' scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = this.style.transform.replace(' scale(1.02)', '');
        });
    });
    
    // Add a simple typing effect for the hero section
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        // Uncomment the next line if you want the typing effect
        // typeWriter();
    }
});

// Function to show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('success');
    formGroup.classList.add('error');
    
    // Remove existing error message if any
    const existingErrorMsg = formGroup.querySelector('.error-message');
    if (existingErrorMsg) {
        existingErrorMsg.remove();
    }
    
    // Create error message element
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.style.color = 'var(--danger-color)';
    errorMsg.style.fontSize = '0.875rem';
    errorMsg.style.marginTop = '0.25rem';
    errorMsg.textContent = message;
    
    formGroup.appendChild(errorMsg);
}

// Function to show success
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
    
    // Remove existing error message if any
    const existingErrorMsg = formGroup.querySelector('.error-message');
    if (existingErrorMsg) {
        existingErrorMsg.remove();
    }
}

// Function to validate individual field
function validateField(field) {
    if (field.id === 'name') {
        if (field.value.trim() === '') {
            showError(field, 'Name is required');
        } else {
            showSuccess(field);
        }
    } else if (field.id === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (field.value.trim() === '') {
            showError(field, 'Email is required');
        } else if (!emailRegex.test(field.value.trim())) {
            showError(field, 'Please enter a valid email');
        } else {
            showSuccess(field);
        }
    } else if (field.id === 'project') {
        if (field.value === '') {
            showError(field, 'Please select a project type');
        } else {
            showSuccess(field);
        }
    } else if (field.id === 'message') {
        if (field.value.trim() === '') {
            showError(field, 'Please describe your project');
        } else if (field.value.length < 10) {
            showError(field, 'Project details should be at least 10 characters');
        } else {
            showSuccess(field);
        }
    }
}

// Function to check if an element is in viewport (for animations)
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add animation when elements come into view
window.addEventListener('scroll', function() {
    const animatedElements = document.querySelectorAll('.service-card, .feature, .pricing-item');
    
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Initialize elements with opacity 0 for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .feature, .pricing-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
});