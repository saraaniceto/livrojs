var pacientes = [];

//ADICIONAR PACIENTES
function adicionar() {
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");
  var nome = inPaciente.value;
  // Validação do nome
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }
  
  // Adiciona o nome no FINAL do vetor
  pacientes.push(nome);
  var lista = "";
  // Exibe o resultado
  for (i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}.  ${pacientes[i]}\n`;
  }
  outLista.textContent = lista;
  // Limpa campo e reposiciona cursor
  inPaciente.value = "";
  inPaciente.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionar);

//ADICIONAR PACIENTES DE URGÊNCIA
function urgencia() {
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");
  var nome = inPaciente.value;
  // Validação do nome
  if (nome == "") {
    alert("Informe o nome do paciente");
    inPaciente.focus();
    return;
  }
  // Adiciona o nome no INÍCIO do vetor
  pacientes.unshift(nome);
  // Exibe o resultado
  var lista = "";
  for (i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}.  ${pacientes[i]}\n`;
  }
  outLista.textContent = lista;
  // Limpa campo e reposiciona cursor
  inPaciente.value = "";
  inPaciente.focus();
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", urgencia);

//REMOVER PACIENTE ATENDIDO
function atender() {
  var outAtendimento = document.getElementById("outAtendimento");
  // Verifica se vetor pacientes está vazio
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de espera");
    return;
  }
  // Remove o primeiro nome da lista
  var atender = pacientes.shift();
  // Exibe nome do paciente em atendimento
  outAtendimento.textContent = atender;
  // string para concatenar pacientes
  // Exibe o resultado
  lista = "";
  for (i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}.  ${pacientes[i]}\n`;
  }
  outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atender);
