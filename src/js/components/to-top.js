const toTopBtn = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    toTopBtn.style.display = 'block';
  }
  else toTopBtn.style.display = 'none';
},  { passive: true })

toTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
