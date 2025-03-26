// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navBar.classList.toggle('active');
    });
    
    // Close the menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navBar.classList.remove('active');
        });
    });
    
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollTop > 0);
    });
    
    // Active Link on Scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-bar ul li a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Review Slider
    const prevReview = document.querySelector('.prev-review');
    const nextReview = document.querySelector('.next-review');
    const reviewSlides = document.querySelectorAll('.review-slide');
    const totalReviews = document.querySelector('.total');
    const currentReview = document.querySelector('.current');
    
    let currentSlide = 0;
    totalReviews.textContent = reviewSlides.length.toString().padStart(2, '0');
    
    function showSlide(n) {
        reviewSlides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + reviewSlides.length) % reviewSlides.length;
        reviewSlides[currentSlide].classList.add('active');
        currentReview.textContent = (currentSlide + 1).toString().padStart(2, '0');
    }
    
    if (prevReview && nextReview) {
        prevReview.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
        
        nextReview.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }
    
    // Animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .language, .stat, .project-type, .skill-highlight');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    // Add animation class for fade-in effect
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Call animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Call once on load
    
    // Enhance the floating animations with randomness
    const floatingShapes = document.querySelectorAll('.floating-shape');
    
    floatingShapes.forEach(shape => {
        // Add some randomness to the animation
        const randomDuration = 10 + Math.random() * 10; // Between 10-20s
        const randomDelay = Math.random() * 5; // Between 0-5s
        
        shape.style.animationDuration = `${randomDuration}s`;
        shape.style.animationDelay = `${randomDelay}s`;
    });
});