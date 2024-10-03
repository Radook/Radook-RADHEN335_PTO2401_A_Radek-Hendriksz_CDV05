document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project'); // Select all project elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add animation class
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is in view
    });

    projects.forEach(project => {
        observer.observe(project); // Observe each project
    });
});

const img = document.querySelector('.about-image img');

    img.addEventListener('mousemove', (e) => {
        const { width, height } = img.getBoundingClientRect();
        const x = e.clientX - (img.getBoundingClientRect().left + width / 2); // Centered calculation
        const y = e.clientY - (img.getBoundingClientRect().top + height / 2); // Centered calculation
        const tiltX = -(y / (height / 2)) * 20; // Adjusted tilt for y-axis
        const tiltY = (x / (width / 2)) * 20; // Tilt based on half width for more pronounced effect
        img.style.transition = 'transform 0.1s ease'; // Faster transition for tilt
        img.style.transform = `scale(1.05) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`; // Apply tilt
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset transform on mouse leave
    });