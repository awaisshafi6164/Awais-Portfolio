// Mouse follower circle
// const cursorFollower = document.querySelector('.cursor-follower');

// document.addEventListener('mousemove', (e) => {
//     cursorFollower.style.left = e.clientX + 'px';
//     cursorFollower.style.top = e.clientY + 'px';
// });

// Add hover effects for interactive elements
// const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-icon, .nav-link');

// interactiveElements.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         cursorFollower.style.width = '30px';
//         cursorFollower.style.height = '30px';
//         cursorFollower.style.background = 'rgba(236, 112, 99, 0.6)';
//     });

//     el.addEventListener('mouseleave', () => {
//         cursorFollower.style.width = '20px';
//         cursorFollower.style.height = '20px';
//         cursorFollower.style.background = 'rgba(108, 92, 231, 0.4)';
//     });
// });


const customCursor = document.querySelector('.custom-cursor');
const cursorCircle = document.querySelector('.cursor-circle');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    customCursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

    requestAnimationFrame(animateCursor);
}
animateCursor();

const interactiveElements = document.querySelectorAll('a, button, .project-card, .tech-icon, .nav-link');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        customCursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        customCursor.classList.remove('cursor-hover');
    });
});


// Special effect for profile picture
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
    profilePic.addEventListener('mouseenter', () => {
        cursorFollower.style.width = '50px';
        cursorFollower.style.height = '50px';
        cursorFollower.style.background = 'rgba(46, 204, 113, 0.6)';
    });

    profilePic.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '20px';
        cursorFollower.style.height = '20px';
        cursorFollower.style.background = 'rgba(108, 92, 231, 0.4)';
    });
}

// Initialize tilt.js effects
if (VanillaTilt) {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    VanillaTilt.init(tiltElements, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when a link is clicked
const mobileMenuLinks = document.querySelectorAll('.mobile-menu .nav-link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
