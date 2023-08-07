const button = document.getElementById('hamburgerButton');
const mobileMenu = document.getElementById('mobileMenu');

button.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  // Tambahkan animasi saat menu muncul atau menghilang
  if (!mobileMenu.classList.contains('hidden')) {
    mobileMenu.style.animation = 'slideIn 0.5s forwards';
  } else {
    mobileMenu.style.animation = 'slideOut 0.5s forwards';
  }
});

