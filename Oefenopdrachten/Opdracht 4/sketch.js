let score = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  fill(0);
text("Houd B in om een blokje te laten verschijnen.", 20, 15);
text("Druk op spatie om het getal op 0 te zetten.", 20, 150);
text("Druk op enter om van rood -> groen -> oranje te gaan.", 20, 300);
text("Beweeg de eightball met WASD of de pijltjestoetsen.", 500, 15);

if (keyIsDown(66)) {
  fill('white');
  rect(35, 35, 60, 60);
} 

  text("Score: " + score, 50, 200);
score = score + 1;
if (keyIsDown(32)) {
  score = 0;
}
if (score === 500) {
  score = 0;
}
}

