// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    // Basic mobile menu logic (could be expanded with a full mobile overlay)
    alert('Мобилното меню ще бъде налично скоро!');
  });
}

// Fade-in Animations on Scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Elements to animate
document.querySelectorAll('.fade-in, .product-card, .gallery-item, .business-card, .upcoming-banner').forEach(el => {
  el.classList.add('fade-in'); // Ensure they have the class
  observer.observe(el);
});

// "Notify" Button Interactivity
const notifyBtn = document.getElementById('notifyBtn');
if (notifyBtn) {
  notifyBtn.addEventListener('click', () => {
    const originalText = notifyBtn.innerText;
    notifyBtn.innerText = 'Благодарим ви! Ще ви информираме.';
    notifyBtn.classList.add('btn-success');
    notifyBtn.style.backgroundColor = '#10B981';
    notifyBtn.style.color = 'white';
    
    setTimeout(() => {
      notifyBtn.innerText = originalText;
      notifyBtn.style.backgroundColor = '';
      notifyBtn.style.color = '';
    }, 3000);
  });
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Product Suggestion Form Logic
const suggestionForm = document.getElementById('suggestionForm');
if (suggestionForm) {
  suggestionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = document.getElementById('productInput').value;
    const submitBtn = suggestionForm.querySelector('button');
    const originalText = submitBtn.innerText;
    
    submitBtn.innerText = 'Изпратено! Благодарим.';
    submitBtn.style.backgroundColor = '#10B981';
    
    // Clear form
    suggestionForm.reset();
    
    setTimeout(() => {
      submitBtn.innerText = originalText;
      submitBtn.style.backgroundColor = '';
    }, 3000);
    
    console.log(`New product recommendation: ${product}`);
  });
}

console.log('The Corner website initialized successfully.');
