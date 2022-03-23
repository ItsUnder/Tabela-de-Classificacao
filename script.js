var rafa = { nome: "Matheus", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Bonisson", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "João", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);
var jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "<td><button onClick='resetar(" + i + ")'>Resetar</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.pontos--;
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function resetar(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

 function Vitoria() {
 var EmpateImagem = document.getElementById("Shrug")
 var TrofeuImagem = document.getElementById("Trofeu")
 var ResultadoFinal = document.getElementById("Resultado");
 htmlTrofeu = "";
 TrofeuImagem.innerHTML = htmlTrofeu;
 htmlShrug = "";
 EmpateImagem.innerHTML = htmlShrug;
 htmlResultado = "";
 ResultadoFinal.innerHTML = htmlResultado;
 htmlTrofeu = "<img src=https://www.freeiconspng.com/thumbs/trophy-png/trophy-png-23.png>"
  if (gui.pontos > paulo.pontos && gui.pontos > rafa.pontos) {
  htmlResultado = "<p class='resultado-final'>João venceu!</p>";
  TrofeuImagem.innerHTML = htmlTrofeu;
}
else if (paulo.pontos > gui.pontos && paulo.pontos > rafa.pontos) {
  htmlResultado = "<p class='resultado-final'>Bonisson venceu!</p>";
  TrofeuImagem.innerHTML = htmlTrofeu;
} 
else if (rafa.pontos > gui.pontos && rafa.pontos > paulo.pontos) {
  htmlResultado = "<p class='resultado-final'>Matheus venceu!</p>";
  TrofeuImagem.innerHTML = htmlTrofeu;
 } 
else if (gui.pontos == 0 && rafa.pontos == 0 && paulo.pontos == 0) {
 htmlTrofeu = "";
 TrofeuImagem.innerHTML = htmlTrofeu;
 htmlShrug = "";
 EmpateImagem.innerHTML = htmlShrug;
 htmlResultado = "";
} else {
 htmlResultado = "<p class='resultado-final'>Empate!</p>";
 htmlShrug = "<img src=https://img.icons8.com/ios/500/shrug-emoticon.png>"
 EmpateImagem.innerHTML = htmlShrug;
}
 ResultadoFinal.innerHTML = htmlResultado;
}