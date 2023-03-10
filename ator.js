//Código do ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeSeMover()) {
    yAtor += 3;
    }
}
    if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i=0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarros, alturaCarros, xAtor, yAtor, 10);
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255, 240, 60));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366; 
}

function limitesDeX(){
  if (xAtor < 0) {
    xAtor = 0;
  }
  if (xAtor > width - 30) {
    xAtor = width - 30;
  }
}
  