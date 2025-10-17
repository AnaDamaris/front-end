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
título.style.margin = '10px 0 20px';
container.appendChild(título)

// Cria input de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
inputItem.style.textAlign = 'center';
inputItem.style.fontSize = '20px';
container.appendChild(inputItem);

// Estilos do containerinputItem.placeholder = 'Digite um item';


const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.fontSize = '20px';
container.appendChild(btnAdd);

// Cria lista
const lista = document.createElement('h1');
titulo.textContent = 'lista de compras';
titulo.style.textAlign = 'center';
titulo.style.margin = '10px 0 20px';
container.appendChild(lista);

// Evento do botão
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});

