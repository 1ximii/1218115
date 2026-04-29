document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for section reveal
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, revealOptions);

    document.querySelectorAll('section').forEach(section => {
        revealObserver.observe(section);
    });

    // 2. Navbar background change on scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Smooth scrolling & Active link highlighting
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // 4. Hero Parallax Effect
    const heroBg = document.querySelector('.hero-bg img');
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll < window.innerHeight) {
            heroBg.style.transform = `translateY(${scroll * 0.4}px) scale(1)`;
        }
    });

    // 5. Form Submission Handling
    const form = document.getElementById('reservation-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = '提交中...';
            btn.disabled = true;

            // Mock submission delay
            setTimeout(() => {
                btn.innerText = '預約成功！我們將盡快聯繫您';
                btn.style.background = '#53624f';
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '#755a28';
                    btn.disabled = false;
                }, 5000);
            }, 1500);
        });
    }

    // 6. Menu Modal Logic
    const menuModal = document.getElementById('menu-modal');
    const openMenuBtn = document.getElementById('open-menu');
    const closeModalBtn = document.querySelector('.close-modal');

    if (openMenuBtn && menuModal) {
        openMenuBtn.addEventListener('click', () => {
            menuModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (closeModalBtn && menuModal) {
        closeModalBtn.addEventListener('click', () => {
            menuModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close on click outside content
    window.addEventListener('click', (e) => {
        if (e.target === menuModal) {
            menuModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
