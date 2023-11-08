function contarVisitas() {
  let outContador = document.getElementById("outContador");
  // Inicializa o número de visitas
  let visitas = 0;
  // Pega o número de visitas armazenado e faz o acréscimo
  if (localStorage.getItem("contador")) {
    visitas = Number(localStorage.getItem("contador"));
  }
  visitas++;
  // Salva o número de visitas
  localStorage.setItem("contador", visitas);

  // Exibe o número de visitas
  if (localStorage.getItem("contador") == 1) {
    outContador.textContent = `Seja bem-vinde! Essa é a sua primeira visita ao nosso site.`;
  } else {
    outContador.textContent = `Que bom que você voltou! Essa é sua ${visitas}ª visita ao nosso site.`;
  }
}
contarVisitas();

// SALVA O CLUBE
function trocarClube() {
  let imgClube = document.getElementById("imgClube");
  let divTitulo = document.getElementById("divTitulo");

  // Define o clube
  let clube;
  if (rbBrasil.checked) {
    clube = "Brasil";
  } else if (rbPelotas.checked) {
    clube = "Pelotas";
  } else {
    clube = "Farroupilha";
  }
  // Altera a classe da div com as cores correspondentes
  divTitulo.className = `row cores${clube}`;
  // Modifica a imagem
  imgClube.src = `img/${clube.toLowerCase()}.png`;
  imgClube.className = "exibe";
  imgClube.alt = `Símbolo do ${clube}`;

  // Salva a seleção do clube no navegador
  localStorage.setItem("clube", clube);
}
//Eventos DOM
let rbBrasil = document.getElementById("rbBrasil");
let rbPelotas = document.getElementById("rbPelotas");
let rbFarroupilha = document.getElementById("rbFarroupilha");
rbBrasil.addEventListener("change", trocarClube);
rbPelotas.addEventListener("change", trocarClube);
rbFarroupilha.addEventListener("change", trocarClube);

//VERIFICA O CLUBE SALVO
function verificarClube() {
  if (localStorage.getItem("clube")) {
    let clube = localStorage.getItem("clube");
    // Auto-preenche o clube no reload da página
    if (clube == "Brasil") {
      rbBrasil.checked = true;
    } else if (clube == "Pelotas") {
      rbPelotas.checked = true;
    } else {
      rbFarroupilha.checked = true;
    }
    //Chama a função pra trocar as cores
    trocarClube();
  }
}
// Chama a função verificar assim que a página carregar
verificarClube();
