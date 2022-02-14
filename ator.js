//Código do ator

let xAtor = 85;
let yAtor = 366;
let tamanhoAtor = 30;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, tamanhoAtor, tamanhoAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 4;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(atorPodeSeMover()){
      yAtor += 4;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
      if(colisao){
        voltaAtorPosicaoInicial();
        somDaColisao.play();
          if(meusPontosMaiorQueZero()){
            meusPontos -= 1;
          }
      }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 245, 60));
  text(meusPontos, width / 6, 27)
}

function somaPontos(){
  if(yAtor < 15){
    meusPontos++;
    somDoPonto.play();
    voltaAtorPosicaoInicial();    
  }
}

function meusPontosMaiorQueZero(){
  return meusPontos > 0;
}

function atorPodeSeMover(){
  return yAtor < 366;
}