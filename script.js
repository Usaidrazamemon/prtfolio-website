

// Helper selectors
const $ = (q) => document.querySelector(q);
const $$ = (q) => document.querySelectorAll(q);

// Dynamic Year in Footer
$('#year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
menuBtn?.addEventListener('click', () => {
    document.querySelector('.links')?.classList.toggle('open');
});

// ================
// GSAP Animations
// ================
window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // NAVBAR slide from top
    gsap.from('.nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // ABOUT section timeline
    let aboutTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none reset'
        }
    });
    const themeBtn = document.getElementById('theme-toggle');

    themeBtn.addEventListener('click', () => {
        // Toggle body class
        document.body.classList.toggle('dark');

        // Change button icon
        if (document.body.classList.contains('dark')) {
            themeBtn.textContent = '☀️';
        } else {
            themeBtn.textContent = '🌙';
        }

        // Smooth GSAP color transition
        gsap.to("body", {
            backgroundColor: document.body.classList.contains('dark') ? "#121212" : "#ffffff",
            color: document.body.classList.contains('dark') ? "#f1f1f1" : "#222",
            duration: 0.6,
            ease: "power2.out"
        });
    });

    aboutTl.from('.about-text', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
        .from('.about-media', {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.about-pic', {
            borderRadius: '50%',
            rotate: 360,
            duration: 1.2,
            ease: 'power2.inOut'
        }, '-=0.5');

    // SERVICES cards
    gsap.from('.service', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.services',
            start: 'top 85%',
            toggleActions: 'play none none reset'
        }
    });

    // PROJECTS cards
    gsap.from('.project', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            toggleActions: 'play none none reset'
        }
    });

    // PROJECT hover smooth scale
    $$('.project').forEach(card => {
        const img = card.querySelector('.thumb img');
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { scale: 1.04, duration: 0.3, ease: 'power2.out' });
            gsap.to(img, { scale: 1.1, duration: 0.4, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { scale: 1, duration: 0.35, ease: 'power2.inOut' });
            gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.inOut' });
        });
    });

    // SKILLS pop-in
    gsap.from('.skill', {
        y: 40,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 85%',
            toggleActions: 'play none none reset'
        }
    });

    // CONTACT cards
    gsap.from('.contact-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 85%',
            toggleActions: 'play none none reset'
        }
    });

    // ABOUT glowing ring loop
    gsap.to('.ring', {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: 'linear'
    });
});
