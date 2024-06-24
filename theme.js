const moon = document.querySelector('.icone-lua')
const sun = document.querySelector('.icone-sol')
const body = document.querySelector('body');
const header = document.querySelector('header')
const footer = document.querySelector('footer')

function mudarParaTemaEscuro() {
  body.classList.remove('light');
  body.classList.add('dark');
  header.classList.remove('light');
  header.classList.add('dark');
  footer.classList.remove('light');
  footer.classList.add('dark');
  localStorage.setItem('temaPreferido', 'dark');
}

function mudarParaTemaClaro() {
  body.classList.remove('dark');
  body.classList.add('light');
  header.classList.remove('dark');
  header.classList.add('light');
  footer.classList.remove('dark');
  footer.classList.add('light');
  localStorage.setItem('temaPreferido', 'light');
}

moon.addEventListener('click', mudarParaTemaEscuro);
sun.addEventListener('click', mudarParaTemaClaro);