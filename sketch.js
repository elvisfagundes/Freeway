function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro()
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPlacar();
  somaPontos();
}
