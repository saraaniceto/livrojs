//Função principal que recebe o input e exibe os resultados
function categorizarAtleta() {
  let inIdade = document.getElementById("inIdade");
  let idade = Number(inIdade.value);
  let inAtleta = document.getElementById("inAtleta");
  let atleta = inAtleta.value;
  let outAtleta = document.querySelector("pre#outAtleta");

  outAtleta.textContent = `${atleta}\n${retornarTracos(atleta)}\nCategoria: ${verCategoria(idade)}`;
}
let btCategorizar = document.getElementById("btCategorizar");
btCategorizar.addEventListener("click", categorizarAtleta);

//Função para criar a linha de "-"
function retornarTracos(nome) {
  //Validação
  if (nome == "") {
    alert("Digite o nome do atleta");
    inAtleta.focus();
    return;
  }
  let tracos = "";
  for (let i = 0; i < nome.length; i++) {
    tracos = nome.toLowerCase().replace(/[a-z]/g, "-");
  }
  return tracos;
}

//Função para determinar a categoria do atleta
function verCategoria(num) {
    //Validação
    if (num == 0 || isNaN(num)) {
        alert("Digite a idade do atleta");
        inIdade.focus();
        return;
    }

    if (num <= 12) {
        return "Infantil";
      } else if (num < 18) {
        return "Juvenil";
      } else {
        return "Adulto";
      }
}
