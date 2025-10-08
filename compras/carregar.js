// Botão para carregar lista
const btnCarregar = document.createElement('button');
btnCarregar.textContent = 'Carregar Lista';
btnCarregar.style.display = 'block';
btnCarregar.style.margin = '10px auto';
btnCarregar.style.padding = '6px 12px';
btnCarregar.style.cursor = 'pointer';
container.appendChild(btnCarregar);

// Input de arquivo oculto
const inputArquivo = document.createElement('input');
inputArquivo.type = 'file';
inputArquivo.accept = '.txt'; // apenas arquivos de texto
inputArquivo.style.display = 'none';
document.body.appendChild(inputArquivo);

// Função para processar o arquivo selecionado
function carregarListaDoArquivo(file) {
    const reader = new FileReader()
    reader.onload = function () {
        // Limpa a lista atual (opcional)
        carregarListaDoArquivo.innerHTML = '';

        // Divide o conteúdo em linhas e adiciona cada uma como <link
        const linhas = reader.result.split(/\r?\n/).filter(l => l.trim() !== '');
        linhas.forEach(linha => {
            const li = document.createElement('li');
            li.textContent = linha;
            li.style.padding = '4px 0';

            li.style.borderBottom = '1px solid #ccc'; // linha fina cinza

            lista.appendChild(li);
        });
    };
reader.readAsText(file);
}

// Eventos
btnCarregar.addEventListener('click', () => inputArquivo.click());
inputArquivo.addEventListener('change', () => {
    const file = inputArquivo.files[0];
    if (file) {
        carregarListaDoArquivo(file);
        inputArquivo.value = ''; // permite reescolher 
        // o mesmo arquivo depois
    }
});

