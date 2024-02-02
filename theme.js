const toggleSwitch = document.querySelector('.toggle-switch');

function toggleTheme() {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');
}

toggleSwitch.addEventListener('click', toggleTheme);

