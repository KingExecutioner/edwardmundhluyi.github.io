// Smooth scrolling for anchor links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add a class to highlight the active link based on scroll position
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('.nav-link');
    
    sections.forEach((section, index) => {
        if (window.scrollY >= section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        }
    });
});
