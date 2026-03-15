// script.js

// 1️⃣ Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('show');
  });

  // close menu when a nav link is clicked (smooth scroll still works)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('show');
    });
  });

  // close menu if clicked outside (optional)
  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
      navList.classList.remove('show');
    }
  });
}

// 2️⃣ Set current year in footer copyright
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// 3️⃣ (Optional) smooth scroll with additional offset for fixed header
//    We already use scroll-margin-top in CSS, but some browsers might need a nudge.
//    This is a gentle enhancement: prevent default anchor jump and use native smooth with offset?
//    Actually we keep CSS scroll-behavior: smooth, and scroll-margin-top handles the rest.
//    However we want to ensure any manual hash click works nicely – no extra js needed,
//    but we can optionally add a small adjustment for older browsers. We'll keep it minimal.

// 4️⃣ (optional) active nav highlight while scrolling – not required but adds polish.
//    we'll implement a simple intersection observer for fun (lightweight).
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav ul li a');

if (sections.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100; // offset for header
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Add a small style for active link (we'll inject dynamically or just add via CSS)
const styleActive = document.createElement('style');
styleActive.innerHTML = `
  .nav ul li a.active {
    color: #c49b63 !important;
    border-bottom: 2px solid #c49b63;
  }
`;
document.head.appendChild(styleActive);

// 5️⃣ Extra: click on any anchor with hash to apply smooth + offset (in case css not enough)
//    but modern browsers support scroll-margin. We'll keep it simple.

// Additionally, we can preload placeholder background idea? Not needed.
console.log('Jagdamb Ventures website — ready for your images!');