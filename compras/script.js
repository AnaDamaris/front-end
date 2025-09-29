// Cria uma div "container" e adiciona ao body
const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

// ===== Estilos direto no JS =====
container.style.backgroundColor = '#70ecf0' // cor de fundo
container.style.border = '2px solid #ccc';  // borda
container.style.borderRadius = '40px';      // cantos arredondados
container.style.padding = '20px';           // epaçamento interno
container.style.maxWidth = '400px';               // largura máxima
container.style.margin = '20px auto';             // centraliza horizontalmente
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; //sombra

// Cria título
const título = document.createElement('h1');
título.textContent = 'Lista de Compras';
título.style.textAlign = 'center';
container.appendChild(título);

// Cria input de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
inputItem.style.textAlign = 'center';
inputItem.style.fontSize = '20px';
container.appendChild(inputItem);

// Cria botão de adicionar
const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.fontSize = '20px';
container.appendChild(btnAdd);

// Cria Lista
const lista = document.createElement('ul');
container.appendChild(lista);

// Função para adicionar item
function adicionarItem() {
    const valor = inputItem.value.trim();
    if (valor !== '') {
        const li = document.createElement('li');
        li.textContent = valor;
        lista.appendChild(li);
        inputItem.value ='';
        inputItem.focus(); // volta o foco para o campo
    }
}

// Evento do botão
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});
