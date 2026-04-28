// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle Logic
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const closeNav = document.getElementById('closeNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  });

  const closeMenu = () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  };

  if (closeNav) closeNav.addEventListener('click', closeMenu);
  
  // Close menu when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
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

// Product Suggestion Form Logic with Formspree (AJAX)
const suggestionForm = document.getElementById('suggestionForm');
if (suggestionForm) {
  suggestionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = suggestionForm.querySelector('button');
    const originalText = submitBtn.innerText;
    
    // Prepare data
    const formData = new FormData(suggestionForm);
    
    try {
      submitBtn.innerText = 'Изпращане...';
      submitBtn.disabled = true;

      const response = await fetch(suggestionForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        submitBtn.innerText = 'Изпратено! Благодарим.';
        submitBtn.style.backgroundColor = '#10B981';
        suggestionForm.reset();
      } else {
        throw new Error('Грешка при изпращане');
      }
    } catch (error) {
      submitBtn.innerText = 'Грешка. Пробвай пак.';
      submitBtn.style.backgroundColor = '#ef4444';
    } finally {
      submitBtn.disabled = false;
      setTimeout(() => {
        submitBtn.innerText = originalText;
        submitBtn.style.backgroundColor = '';
      }, 4000);
    }
  });
}

console.log('The Corner website initialized successfully.');
