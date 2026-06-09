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
