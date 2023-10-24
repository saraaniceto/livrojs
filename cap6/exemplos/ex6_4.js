function gerarCracha() {
  var inNome = document.getElementById("inNome");
  var outCracha = document.getElementById("outCracha");
  var nome = inNome.value;

  // Validação
  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe o nome completo do participante...");
    inNome.focus();
    return;
  }

  var priEspaco = nome.indexOf(" "); // posição do primeiro espaço
  var ultEspaco = nome.lastIndexOf(" "); // posição do último espaço
  var cracha = nome.substring(0, priEspaco) + nome.substring(ultEspaco);
  outCracha.textContent = `Crachá: ${cracha}`;
}
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);
