//Imagens e sons do jogo

let imagemDaEstrada;
let imagenDoAtor;
let imagemCarro;

let somDaTrilha;
let somDoPonto;
let somDaColisao;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  
  somDaTrilha = loadSound("trilha.mp3");
  somDoPonto = loadSound("pontos.waw");
  somDaColisao = loadSound("colidiu.mp3");
  
}
