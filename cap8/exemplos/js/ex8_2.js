// Eventos DOM
let inputsRadio = document.getElementsByTagName("input");
// Percorre os elementos para associar a function ao evento change
for (let i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocarClube);
}

// SALVA/REMOVE O TIME
function trocarClube() {
  let imgClube = document.getElementById("imgClube");
  let divTitulo = document.getElementById("divTitulo");
  let clubes = ["Brasil", "Pelotas", "Farroupilha"];

  for (let i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) {
      var selecao = i;
      break;
    }
  }

  // Se selecao <= 2, tá dentro do array, else -> Selecionou "Nenhum"
  if (selecao <= 2) {
    // Altera a classe da div com as cores correspondentes
    divTitulo.className = `row cores${clubes[selecao]}`;
    // Modifica a imagem
    imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
    imgClube.className = "exibe";
    imgClube.alt = `Símbolo do ${clubes[selecao]}`;

    // Salva a seleção do clube no navegador
    localStorage.setItem("clube", clubes[selecao]);
  } else {
    // Reseta a classe da div
    divTitulo.className = "row";
    imgClube.className = "oculta";
    imgClube.alt = "";

    // Remove a seleção do clube no navegador
    localStorage.removeItem("clube");
  }
}

// VERIFICA O CLUBE SALVO
function verificarClube() {
  if (localStorage.getItem("clube")) {
    let clube = localStorage.getItem("clube");
     switch(clube){
        case 'Brasil':
            inputsRadio[0].checked = true;
            break
        case 'Pelotas':
            inputsRadio[1].checked = true;
            break
        default:
            inputsRadio[2].checked = true; 
    }
    //Chama a função pra trocar as cores
    trocarClube();
  }
}

// Chama a função verificar assim que a página carregar
verificarClube();
