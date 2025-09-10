fuction calcularTabuada() {
    let numero = document.getElementByI("numero").value;
    let resultadoDiv = document.getElementById("resultado");

  if (numero === "") {
        resultadoDiv.innerHTML = "<p style='color:red'>Digite um número válido!</p>";
  } else {
    let resultadoHTML = "<h3>Tabuada do " +
    let i = 1;

 while (i <= 10) {
    resultadoHTML += "<p>" + numero + " x"
    i++;
 }

 resultadoDiv.innerHTML = resultadoHTML;
  }
}