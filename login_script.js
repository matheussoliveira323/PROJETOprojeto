// Função para exibir o modal de criação de conta
function showSignupModal() {
  const signupModal = document.getElementById('signupModal');
  signupModal.style.display = 'block';
}

// Função para fechar o modal de criação de conta
function closeSignupModal() {
  const signupModal = document.getElementById('signupModal');
  signupModal.style.display = 'none';
}

// Função para redirecionar o usuário para a tela de login
function redirectToLogin() {
  closeSignupModal(); // Fecha o modal de criação de conta
  const loginModal = document.getElementById('loginModal');
  loginModal.style.display = 'block';
}

// Função para validar o login
function validateLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Verificar se o email e a senha são válidos (adicionar sua lógica de validação aqui)
  if (email === 'usuario@example.com' && password === 'senha123') {
    // Login válido, redirecionar para a página principal
    alert('Login bem-sucedido! Redirecionando para a página principal.');
    // Redirecionar para a página principal
    window.location.href = 'pagina_principal.html';
  } else {
    // Login inválido, exibir mensagem de erro
    alert('Email ou senha incorretos. Por favor, tente novamente.');
  }
}

// Captura o link "Criar Conta"
const signupLink = document.getElementById('signupLink');

// Adiciona um evento de clique ao link "Criar Conta"
signupLink.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que o link recarregue a página
  // Exibe o modal de criação de conta
  showSignupModal();
});

// Captura o botão de fechar do modal de criação de conta
const signupClose = document.querySelector('.signup-close');

// Adiciona um evento de clique ao botão de fechar
signupClose.addEventListener('click', closeSignupModal);

// Captura o formulário de criação de conta
const signupForm = document.getElementById('signupForm');

// Adiciona um evento de submit ao formulário de criação de conta
signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que o formulário recarregue a página
  
  // Pega os valores dos campos do formulário
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  const languages = document.querySelectorAll('input[name="language"]:checked');

  // Verifica se os campos obrigatórios foram preenchidos
  if (!username || !email || !password) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Verifica se o nome é o padrão fictício
  if (username === 'Seu Nome') {
    alert('Por favor, insira seu nome real.');
    return;
  }

  // Verifica se o email é o padrão fictício
  if (email === 'seuemail@example.com') {
    alert('Por favor, insira seu email real.');
    return;
  }

  // Verifica se a senha é o padrão fictício
  if (password === 'suaSenha') {
    alert('Por favor, insira sua senha real.');
    return;
  }

  // Verifica se pelo menos uma linguagem de programação foi selecionada
  if (languages.length === 0) {
    alert('Por favor, selecione pelo menos uma linguagem de programação.');
    return;
  }
  
  // Aqui você pode adicionar o código para enviar os dados para o servidor e realizar outras ações necessárias.
  console.log('Nome de usuário:', username);
  console.log('Email:', email);
  console.log('Senha:', password);
  console.log('Linguagens de programação selecionadas:');
  languages.forEach(language => {
    console.log(language.value);
  });

  // Após processar o cadastro, redireciona o usuário para a tela de login
  redirectToLogin();
});

// Captura o formulário de login
const loginForm = document.getElementById('loginForm');

// Adiciona um evento de submit ao formulário de login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que o formulário recarregue a página
  // Valida o login
  validateLogin();
});
