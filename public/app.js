document.addEventListener('DOMContentLoaded', () => {
    const notasDiv = document.getElementById('notas');
    const novaNotaBtn = document.getElementById('novaNota');
    const salvarNotaBtn = document.getElementById('salvarNota');
    const excluirSelecionadasBtn = document.getElementById('excluirSelecionadas');
    const tituloNotaInput = document.getElementById('tituloNota');
    const conteudoNotaInput = document.getElementById('conteudoNota');
    const dataFinalizacaoInput = document.getElementById('dataFinalizacao');
    const selecionarDataBtn = document.getElementById('selecionarData');

    novaNotaBtn.addEventListener('click', criarNovaNota);
    salvarNotaBtn.addEventListener('click', salvarNota);
    excluirSelecionadasBtn.addEventListener('click', excluirSelecionadas);
    selecionarDataBtn.addEventListener('click', aplicarDataFinalizacao);

    function criarNovaNota() {
        limparCampos();
    }

    function salvarNota() {
        const titulo = tituloNotaInput.value;
        const conteudo = conteudoNotaInput.value;
        const dataCriacao = new Date().toLocaleString();

        if (titulo.trim() === '' || conteudo.trim() === '') {
            alert('Por favor, preencha o título e o conteúdo da nota.');
            return;
        }

        const notaDiv = document.createElement('div');
        notaDiv.classList.add('nota');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('selecionarNota');

        const tituloNota = document.createElement('h3');
        tituloNota.textContent = titulo;

        const conteudoNota = document.createElement('p');
        conteudoNota.innerHTML = conteudo.replace(/\n/g, '<br>');

        const dataNota = document.createElement('p');
        dataNota.textContent = `Data de criação: ${dataCriacao}`;

        notaDiv.appendChild(checkbox);
        notaDiv.appendChild(tituloNota);
        notaDiv.appendChild(conteudoNota);
        notaDiv.appendChild(dataNota);

        notasDiv.appendChild(notaDiv);

        limparCampos();
    }

    function excluirSelecionadas() {
        const notasSelecionadas = document.querySelectorAll('.selecionarNota:checked');
        notasSelecionadas.forEach(nota => {
            nota.parentNode.remove();
        });
    }

    function aplicarDataFinalizacao() {
        const notasSelecionadas = document.querySelectorAll('.selecionarNota:checked');

        if (notasSelecionadas.length === 0) {
            alert('Por favor, selecione uma nota para aplicar a data de finalização.');
            return;
        }

        if (notasSelecionadas.length > 1) {
            alert('Apenas uma data de finalização é permitida por nota.');
            return;
        }

        const dataFinalizacao = new Date(dataFinalizacaoInput.value + 'T00:00:00'); // Adiciona o horário para evitar a diferença de fuso horário

        notasSelecionadas.forEach(nota => {
            if (nota.parentNode.querySelector('.data-finalizacao')) {
                alert('Esta nota já possui uma data de finalização.');
                return;
            }
            
            const dataFinalizacaoNota = document.createElement('p');
            const dataFinalizacaoFormatada = dataFinalizacao.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
            dataFinalizacaoNota.textContent = `Data de finalização: ${dataFinalizacaoFormatada}`;
            dataFinalizacaoNota.classList.add('data-finalizacao');
            nota.parentNode.appendChild(dataFinalizacaoNota);
        });
    }

    function limparCampos() {
        tituloNotaInput.value = '';
        conteudoNotaInput.value = '';
        dataFinalizacaoInput.value = '';
    }
});
