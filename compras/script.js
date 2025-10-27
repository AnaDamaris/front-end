// ===== Container =====
const container = document.createElement('div');
container.id = 'lista-container';
document.body.appendChild(container);

container.style.backgroundColor = '#70ecf0' // cor de fundo
container.style.border = '2px solid #ccc';  // borda
container.style.borderRadius = '40px';      // cantos arredondados
container.style.padding = '20px';           // epaçamento interno
container.style.maxWidth = '400px';               // largura máxima
container.style.margin = '20px auto';             // centraliza horizontalmente
container.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'; //sombra
container.style.fontFamily = 'Arial, sans-serif';

// ===== Título =====
const título = document.createElement('h1');
título.textContent = 'Lista de Compras';
título.style.textAlign = 'center';
título.style.marginBottom = '15px';
container.appendChild(título)

// Cria input de texto
const inputItem = document.createElement('input');
inputItem.type = 'text';
inputItem.placeholder = 'Digite um item';
inputItem.style.textAlign = 'center';
inputItem.style.width = '70%';
inputItem.style.padding = '6px'
container.appendChild(inputItem);


const btnAdd = document.createElement('button');
btnAdd.textContent = 'Adicionar';
btnAdd.style.marginLeft = '10px';
btnAdd.style.padding = '6px 12px';
btnAdd.style.cursor = 'pointer';
btnAdd.style.border = 'none';
btnAdd.style.borderRadius = '5px';
btnAdd.style.backgroundColor = '#4CAF50';
btnAdd.style.color = '#fff';
btnAdd.style.fontWeight = 'bold';
container.appendChild(btnAdd);

// ===== lista =====
const lista = document.createElement('h1');
lista.style.marginTop = 'lista de compras';
lista.style.textAlign = 'center';
lista.style.margin = '10px 0 20px';
container.appendChild(lista);

// ===== Função criar item com lixeira vermelha =====
function criarItemComLixeira(texto) {
    const li = document.createElement('li');
    li.style.position = 'relative';
    li.style.paddingRight = ''  (terminar...)
}











// Evento do botão
btnAdd.addEventListener('click', adicionarItem);

// Evento para tecla Enter no input
inputItem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarItem();
    }
});

