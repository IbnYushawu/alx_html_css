// Select elements
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

// Toggle menu on click
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  nav.classList.toggle('show');
});


