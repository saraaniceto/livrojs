function adicionarTarefa() {
  let inTarefa = document.getElementById("inTarefa");
  let tarefa = inTarefa.value;

  if (tarefa == "") {
    alert("Informe a tarefa");
    inTarefa.focus();
    return;
  }

  let divQuadro = document.getElementById("divQuadro");
  //Cria o elemento h5
  let h5 = document.createElement("h5");
  //Cria o texto a ser inserido
  let texto = document.createTextNode(tarefa);
  // Define que o texto será filho do h5 e o h5 filho do divQuadro
  h5.appendChild(texto);
  divQuadro.appendChild(h5);

  inTarefa.value = "";
  inTarefa.focus();
}
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTarefa);

function selecionarTarefa() {
  let h5 = document.getElementsByTagName("h5");
  let numH5 = h5.length;

  if (numH5 == 0) {
    alert("Não há tarefas para selecionar");
    return;
  }

  //Cria uma variável auxiliar que representa a linha selecionada
  let aux = -1;
  for (let i = 0; i < numH5; i++) {
    if (h5[i].className == "tarefaSelecionada") {
      h5[i].className = "tarefaNormal";
      aux = i;
      break;
    }
  }
  //Volta pra primeira linha quando chega na última
  if (aux == numH5 - 1) {
    aux = -1;
  }
  //Muda o estilo da próxima linha
  h5[aux + 1].className = "tarefaSelecionada";
}
let btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionada() {
  let divQuadro = document.getElementById("divQuadro");
  let h5 = document.getElementsByTagName("h5");
  let numH5 = h5.length;

  //Percorre todas as tags e procura a selecionada
  let aux = -1;
  for (let i = 0; i < numH5; i++) {
    if (h5[i].className == "tarefaSelecionada") {
      aux = i;
      break;
    }
  }
  //Exibe alerta caso não haja tarefas
  if (aux == -1) {
    alert("Selecione uma tarefa para removê-la...");
    return;
  }
  //Remove a tarefa selecionada
  if (confirm(`Confirma Exclusão de "${h5[aux].textContent}"?`)) {
    divQuadro.removeChild(h5[aux]);
  }
}
let btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravarTarefas() {
  let h5 = document.getElementsByTagName("h5");
  let numH5 = h5.length;

  //Exibe alerta caso não haja tarefas
  if (numH5 == 0) {
    alert("Não há tarefas para serem salvas");
    return;
  }

  let tarefas = "";
  for (let i = 0; i < numH5; i++) {
    tarefas += `${h5[i].textContent};`;
  }

  // Grava as tarefas em localStorage, removendo o último ";"
  localStorage.setItem("tarefasDia", tarefas.substring(0, tarefas.length - 1));
  // Confere se dados foram armazenados em localStorage
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas Salvas");
  }
}
let btGravar = document.getElementById("btGravar");
btGravar.addEventListener("click", gravarTarefas);

function recuperarTarefasSalvas() {
    //Verifica se há tarefas salvas
  if (localStorage.getItem("tarefasDia")) {
    //Separa as tarefas num vetor
    let tarefas = localStorage.getItem("tarefasDia").split(";");
    
    //Adiciona cada tarefa na lista de filhos
    let divQuadro = document.getElementById("divQuadro");
    for (let i = 0; i < tarefas.length; i++) {
      let h5 = document.createElement("h5");
      let texto = document.createTextNode(tarefas[i]);
      h5.appendChild(texto);
      divQuadro.appendChild(h5);
    }
  }
}
recuperarTarefasSalvas();
