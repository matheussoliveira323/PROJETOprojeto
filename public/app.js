document.addEventListener('DOMContentLoaded', () => {
    const notasDiv = document.getElementById('notas');
    const novaNotaBtn = document.getElementById('novaNota');
    const salvarNotaBtn = document.getElementById('salvarNota');
    const excluirSelecionadasBtn = document.getElementById('excluirSelecionadas');
    const tituloNotaInput = document.getElementById('tituloNota');
    const conteudoNotaInput = document.getElementById('conteudoNota');

    novaNotaBtn.addEventListener('click', criarNovaNota);
    salvarNotaBtn.addEventListener('click', () => {
        if (tituloNotaInput.value.trim() === '' || conteudoNotaInput.value.trim() === '') {
            alert('Preencha o título e o conteúdo da nota antes de salvar.');
        } else {
            salvarNota();
        }
    });
    excluirSelecionadasBtn.addEventListener('click', excluirSelecionadas);

    function criarNovaNota() {
        limparCampos();
    }

    function salvarNota() {
        const titulo = tituloNotaInput.value;
        const conteudo = conteudoNotaInput.value;
        const dataCriacao = new Date().toLocaleString();

        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('selecionarNota');

        const tituloNota = document.createElement('h3');
        tituloNota.textContent = titulo;

        const conteudoNota = document.createElement('p');
        conteudoNota.innerHTML = conteudo.replace(/\n/g, '<br>'); // Substitui quebras de linha por <br>

        const dataNota = document.createElement('p');
        dataNota.textContent = `Data de criação: ${dataCriacao}`;

        notaDiv.appendChild(checkbox);
        notaDiv.appendChild(tituloNota);
        notaDiv.appendChild(conteudoNota);
        notaDiv.appendChild(dataNota);

        notaDiv.addEventListener('click', () => {
            habilitarEdicaoNota(conteudoNota);
        });

        notasDiv.appendChild(notaDiv);

        limparCampos();
    }

    function habilitarEdicaoNota(elemento) {
        elemento.contentEditable = true; // Habilita a edição do conteúdo da nota
        elemento.focus(); // Dá foco ao elemento para começar a edição
    }

    function excluirSelecionadas() {
        const notasSelecionadas = document.querySelectorAll('.selecionarNota:checked');
        notasSelecionadas.forEach(nota => {
            nota.parentNode.remove();
        });
    }

    function limparCampos() {
        tituloNotaInput.value = '';
        conteudoNotaInput.value = '';
    }
});
