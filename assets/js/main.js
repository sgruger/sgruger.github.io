// Modal open/close
function openModal(title, desc, image, link) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent  = desc;
  document.getElementById('modalImage').src         = image;
  document.getElementById('modalImage').alt         = title;
  document.getElementById('modalLink').href         = link;
  document.getElementById('projectModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Close modal when clicking the dark overlay behind it
document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Slideshow
let currentSlide = 0;

function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('slideDots');
  if (!slides.length || !dotsContainer) return;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function moveSlide(direction) {
  goToSlide(currentSlide + direction);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initSlideshow);
