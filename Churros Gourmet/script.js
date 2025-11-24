function rolarParaSabores() {
    document.getElementById("sabores").scrollIntoView({ behavior: "smooth" });
}

function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const status = document.getElementById("status");

    status.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    status.style.color = "green";

    // limpa o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}