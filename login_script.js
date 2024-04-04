// Captura o link "Criar Conta"
const signupLink = document.getElementById('signupLink');

// Adiciona um evento de clique ao link "Criar Conta"
signupLink.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que o link recarregue a página
  // Exibe a janela modal para criar conta
  const signupModal = document.getElementById('signupModal');
  signupModal.style.display = 'block';
});

// Captura o botão de fechar do modal de criação de conta
const signupClose = document.querySelector('.signup-close');

// Adiciona um evento de clique ao botão de fechar
signupClose.addEventListener('click', () => {
  // Fecha a janela modal de criação de conta
  const signupModal = document.getElementById('signupModal');
  signupModal.style.display = 'none';
});

// Captura o cabeçalho da janela modal para permitir o arrasto
const modalHeader = document.querySelector('.signup-modal-content');

let isDragging = false, offsetX, offsetY;

// Adiciona evento de clique no cabeçalho para iniciar o arrasto
modalHeader.addEventListener('mousedown', startDrag);

// Função para iniciar o arrasto
function startDrag(e) {
  if (e.target === modalHeader) {
    isDragging = true;
    offsetX = e.clientX - signupModal.offsetLeft;
    offsetY = e.clientY - signupModal.offsetTop;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
  }
}

// Função para arrastar a janela modal
function drag(e) {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    signupModal.style.left = x + 'px';
    signupModal.style.top = y + 'px';
  }
}

// Função para parar o arrasto
function stopDrag() {
  isDragging = false;
  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
}
