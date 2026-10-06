let cirkels = [];
let punten = 0;
let minecraft;
let textX = 0
let textY = 350

function setup() {
  createCanvas(600, 600);
  minecraft = loadFont("mac's Minecraft.otf")
  for (let i = 0; i < 150; i++) {
    let c = {
      xPositie: random(250, 350),
      yPositie: random(250, 350),
      radius: random(10, 50),
      kleur: random(['#4d008b', '#8c00ff', '#ce93ff', '#e9ceff', '#7623b9']),
      snelheidX: random(-2, 2),
      snelheidY: random(-2, 2)
    }
    cirkels.push(c);
  }

}

function draw() {
  background("#876cff");
  fill("white")
  textFont(minecraft)
  textSize(150)
  text(punten, textX, textY)
  if (punten <= 10) {
    textX = 250
  }
  if (punten >= 10 && punten <= 100){
    textX = 200
  }
  if (punten >= 100 && punten <= 1000){
    textX = 150
  }
  for (let i = 0; i < cirkels.length; i++) {
    let cirkel = cirkels[i];

    fill(cirkel.kleur);
    circle(cirkel.xPositie, cirkel.yPositie, cirkel.radius);
    cirkel.xPositie = cirkel.xPositie + cirkel.snelheidX;
    cirkel.yPositie = cirkel.yPositie + cirkel.snelheidY;

    if (cirkel.xPositie < 0) {
      cirkel.snelheidX *= -1.0;
    }

    if (cirkel.yPositie < 0) {
      cirkel.snelheidY *= -1.0;
    }

    if (cirkel.xPositie > 600) {
      cirkel.snelheidX *= -1.0;
    }

    if (cirkel.yPositie > 600) {
      cirkel.snelheidY *= -1.0;
    }
  }

}

function mousePressed() {
  for (let i = 0; i < cirkels.length; i++) {
    let cirkel = cirkels[i]
    let d = dist(mouseX, mouseY, cirkel.xPositie, cirkel.yPositie)
    if (d <= cirkel.radius) {
      punten += 1;
    }
  }
}
