document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    FormData.forEach(value, key) => {
        data[key] = value;
    });

    console.log(data); // Adiciona esta linha para verificar os dados no console

    fetch('SEU LINK DA PLANILHA DO GOOGLE', {
        nethod: 'POST',
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.result === 'success') {
            alert('Dados enviados com sucesso!');
            event.target.reset(); // Limpa o formulário
        } else if (responseData.result === 'error' && responseData.message === 'Email already exists') { //LINHA QUEBRADA
        alert('Erro: 0 email já existe.');
    } 
    else {
        alert('Erro ao enviar os dados.');
        } 
    })
    .cath(error => console.error('Error:', error));

});