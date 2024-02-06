const checkboxTema = document.querySelector('#tema-escuro');
const body = document.querySelector('body');

function mudarTema() {
  // Verifica o tema atual
  const temaAtual = body.classList.contains('dark') ? 'dark' : 'light';

  // Altera o tema
  body.classList.toggle('light');
  body.classList.toggle('dark');

  // Salva a preferência do usuário no localStorage
  localStorage.setItem('temaPreferido', temaAtual === 'dark' ? 'light' : 'dark');
}

// Adiciona o evento de clique ao checkbox
checkboxTema.addEventListener('change', mudarTema);

// Verifica a preferência do usuário salva no localStorage
const temaPreferido = localStorage.getItem('temaPreferido');
if (temaPreferido) {
  body.classList.add(temaPreferido);
  checkboxTema.checked = temaPreferido === 'dark';
}
leSwitch.addEventListener('click', toggleTheme);

