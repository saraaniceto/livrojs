const TAXA_MULTA = 2 / 100; // multa por atraso
const TAXA_JUROS = 0.33 / 100; // juros por dia de atraso

function calcularMultaJuros() {
  var inDataVenc = document.getElementById("inDataVenc");
  var inValor = document.getElementById("inValor");
  var outMulta = document.getElementById("outMulta");
  var outJuros = document.getElementById("outJuros");
  var outTotal = document.getElementById("outTotal");
  var dataVenc = inDataVenc.value;
  var valor = Number(inValor.value);

  // Validação
  if (dataVenc == "" || valor == 0 || isNaN(valor)) {
    alert("Informe corretamente os dados da conta...");
    inDataVenc.focus();
    return;
  }

  var hoje = new Date();
  var vencto = new Date();
  // Pega a data do input (aaaa-mm-dd) e altera a variável vencto
  var partes = dataVenc.split("-");
  vencto.setDate(Number(partes[2]));
  vencto.setMonth(Number(partes[1]) - 1);
  vencto.setFullYear(Number(partes[0]));

  // Calcula a diferença de dias entre as datas (em milissegundos)
  var atraso = hoje - vencto;
  // Inicializa multa e juros com 0
  var multa = 0;
  var juros = 0;

  if (atraso > 0) {
    // 1 dia = 24hor x 60min x 60seg x 1000mseg: 86400000mseg
    // round(): necessário para períodos envolvendo horário de verão
    var dias = Math.round(atraso / 86400000);
    console.log(atraso / 86400000);
    multa = valor * TAXA_MULTA;
    juros = valor * TAXA_JUROS * dias;
  }
  var total = valor + multa + juros; // calcula o total
  outMulta.value = multa.toFixed(2); // exibe os valores com 2 decimais;
  outJuros.value = juros.toFixed(2);
  outTotal.value = total.toFixed(2);
}
// cria referência ao botão e após associa function ao evento click
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularMultaJuros);

function limparCampos() {
  location.reload();
}
var btNovaConta = document.getElementById("btNovaConta");
btNovaConta.addEventListener("click", limparCampos);
