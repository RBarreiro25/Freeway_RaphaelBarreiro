console.log("Welcome to Freeway, by Raphael Barreiro!");
console.log("To play, use the 'UP', 'DOWN', 'LEFT' and 'RIGHT' arrows. Have fun! ");

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  limitesDeX();
}
