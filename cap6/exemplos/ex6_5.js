function gerarEmail() {
  var inFuncionario = document.getElementById("inFuncionario");
  var outEmail = document.getElementById("outEmail");
  var funcionario = inFuncionario.value;

  // Validação
  if (funcionario == "" || funcionario.indexOf(" ") == -1) {
    alert("Informe o nome completo do funcionário...");
    inFuncionario.focus();
    return;
  }
  // Coloca as partes do nome em um vetor;
  var partes = funcionario.split(" ");
  var email = "";
  var tam = partes.length;
  // Percorre os itens do vetor (exceto o último sobrenome)
  for (var i = 0; i < tam - 1; i++) {
    email += partes[i].charAt(0);
  }
  // Concatena as iniciais com o último sobrenome e o domínio;
  email += `${partes[tam - 1]}@empresa.com.br`;
  email = email.toLowerCase()
  outEmail.textContent = `E-mail: ${email}`;
}
// cria referência ao botão e após associa function ao evento click
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarEmail);
