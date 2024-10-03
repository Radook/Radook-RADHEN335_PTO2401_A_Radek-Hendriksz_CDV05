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
        const x = e.clientX - img.offsetLeft - width / 2; // Corrected to use img.offsetLeft
        const y = e.clientY - img.offsetTop - height / 2; // Corrected to use img.offsetTop
        const tiltX = (y / height) * 20; // Increased tilt strength for more movement
        const tiltY = -(x / width) * 20; // Increased tilt strength for more movement
        img.style.transition = 'transform 0.1s ease'; // Faster transition for tilt
        img.style.transform = `scale(1.05) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`; // Apply tilt
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset transform on mouse leave
    });