// lege lijsten
let colors = [];

let rectTimers = [];
let circleTimers = [];
let diamondTimers = [];

let rectPositions = [];
let circlePositions = [];
let diamondPositions = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {

    // kleuren voor de vormen
    colors.push([random(147), random(107), random(255)]);

    // beginposities van de vormen
    rectPositions.push([
      random(0, 750),
      random(0, 500),
      random(50, 80),
      random(50, 80)
    ]);

    circlePositions.push([
      random(0, 800),
      random(0, 600),
      random(30, 70)
    ]);

    diamondPositions.push([
      random(0, 800),
      random(0, 600),
      50
    ]);

    // startwaarden van de timers
    rectTimers.push(random(0, 180));
    circleTimers.push(random(0, 180));
    diamondTimers.push(random(0, 180));
  }
}

function draw() {
  background("#0a0a0a");

  for (let i = 0; i < 6; i++) {
    fill(colors[i]);

    // timer van de rechthoek
    rectTimers[i]--;

    if (rectTimers[i] <= 0) {
      rectPositions[i][1] += 3;
    }

    // timer van de cirkel
    circleTimers[i]--;

    if (circleTimers[i] <= 0) {
      circlePositions[i][1] += 3;
    }

    // timer van de ruit
    diamondTimers[i]--;

    if (diamondTimers[i] <= 0) {
      diamondPositions[i][1] += 3;
    }

    // teken de rechthoek
    rect(...rectPositions[i]);

    // teken de cirkel
    circle(...circlePositions[i]);

    // punten van de ruit
    let x = diamondPositions[i][0];
    let y = diamondPositions[i][1];
    let size = diamondPositions[i][2];

    beginShape();
    vertex(x, y - size);
    vertex(x + size, y);
    vertex(x, y + size);
    vertex(x - size, y);
    endShape(CLOSE);

    // reset de rechthoek zodra deze uit beeld is
    if (rectPositions[i][1] > height) {
      rectPositions[i][0] = random(0, 750);
      rectPositions[i][1] = random(-100, 0);
      rectTimers[i] = random(60, 180);
    }

    // reset de cirkel als deze onderaan verdwijnt
    if (circlePositions[i][1] > 850) {
      circlePositions[i][0] = random(0, 750);
      circlePositions[i][1] = random(-100, 0);
      circleTimers[i] = random(60, 180);
    }

    // reset de ruit wanneer hij uit beeld gaat
    if (diamondPositions[i][1] > 850) {
      diamondPositions[i][0] = random(0, 750);
      diamondPositions[i][1] = random(-100, 0);
      diamondTimers[i] = random(60, 120);
    }
  }
}