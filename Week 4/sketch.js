let colors = [];

let rectTimers = [];
let circleTimers = [];
let diamondTimers = [];

let rectPositions = [];
let circlePositions = [];
let diamondPositions = [];

let abstractArt = false;
let backgroundColor = "#fad8ff";

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {

    colors.push([random(147), random(107), random(255)]);

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

    rectTimers.push(random(0, 180));
    circleTimers.push(random(0, 180));
    diamondTimers.push(random(0, 180));
  }
}

function draw() {
  background(backgroundColor);

  if (abstractArt == false) {

    for (let i = 0; i < 6; i++) {
      fill(colors[i]);

      rectTimers[i]--;

      if (rectTimers[i] <= 0) {
        rectPositions[i][1] += 3;
      }

      circleTimers[i]--;

      if (circleTimers[i] <= 0) {
        circlePositions[i][1] += 3;
      }

      diamondTimers[i]--;

      if (diamondTimers[i] <= 0) {
        diamondPositions[i][1] += 3;
      }

      rect(...rectPositions[i]);
      circle(...circlePositions[i]);

      let x = diamondPositions[i][0];
      let y = diamondPositions[i][1];
      let size = diamondPositions[i][2];

      beginShape();
      vertex(x, y - size);
      vertex(x + size, y);
      vertex(x, y + size);
      vertex(x - size, y);
      endShape(CLOSE);

      if (rectPositions[i][1] > height) {
        rectPositions[i][0] = random(0, 750);
        rectPositions[i][1] = random(-100, 0);
        rectTimers[i] = random(60, 180);
      }

      if (circlePositions[i][1] > 850) {
        circlePositions[i][0] = random(0, 750);
        circlePositions[i][1] = random(-100, 0);
        circleTimers[i] = random(60, 180);
      }

      if (diamondPositions[i][1] > 850) {
        diamondPositions[i][0] = random(0, 750);
        diamondPositions[i][1] = random(-100, 0);
        diamondTimers[i] = random(60, 120);
      }
    }

  } else {

    // cirkels
    for (let i = 0; i < 10; i++) {
      fill(colors[i]);

      circle(
        circlePositions[i][0],
        circlePositions[i][1],
        circlePositions[i][2]
      );

      circlePositions[i][1] += 2;

      if (circlePositions[i][1] > height + 50) {
        circlePositions[i][0] = random(width);
        circlePositions[i][1] = random(-200, -50);
        circlePositions[i][2] = random(20, 100);
        colors[i] = [random(255), random(255), random(255)];
      }
    }

    // rechthoeken
    for (let i = 0; i < 10; i++) {
      fill(colors[i + 10]);

      rect(
        rectPositions[i + 10][0],
        rectPositions[i + 10][1],
        rectPositions[i + 10][2],
        rectPositions[i + 10][3]
      );

      rectPositions[i + 10][1] += 2;

      if (rectPositions[i + 10][1] > height + 80) {
        rectPositions[i + 10][0] = random(width);
        rectPositions[i + 10][1] = random(-200, -50);
        rectPositions[i + 10][2] = random(30, 80);
        rectPositions[i + 10][3] = random(30, 80);
        colors[i + 10] = [random(255), random(255), random(255)];
      }
    }

    // ruiten
    for (let i = 0; i < 10; i++) {
      fill(colors[i + 20]);

      let x = diamondPositions[i + 20][0];
      let y = diamondPositions[i + 20][1];
      let size = diamondPositions[i + 20][2];

      beginShape();
      vertex(x, y - size);
      vertex(x + size, y);
      vertex(x, y + size);
      vertex(x - size, y);
      endShape(CLOSE);

      diamondPositions[i + 20][1] += 2;

      if (diamondPositions[i + 20][1] > height + 60) {
        diamondPositions[i + 20][0] = random(width);
        diamondPositions[i + 20][1] = random(-200, -50);
        diamondPositions[i + 20][2] = random(30, 60);
        colors[i + 20] = [random(255), random(255), random(255)];
      }
    }
  }
}

function keyPressed() {
  if (keyCode == BACKSPACE) {

    abstractArt = true;

    // nieuwe achtergrondkleur
    backgroundColor = color(
      random(255),
      random(255),
      random(255)
    );

    for (let i = 0; i < 30; i++) {

      colors[i] = [
        random(255),
        random(255),
        random(255)
      ];

      circlePositions[i][0] = random(width);
      circlePositions[i][1] = random(-600, 600);
      circlePositions[i][2] = random(20, 100);

      rectPositions[i][0] = random(width);
      rectPositions[i][1] = random(-600, 600);
      rectPositions[i][2] = random(30, 80);
      rectPositions[i][3] = random(30, 80);

      diamondPositions[i][0] = random(width);
      diamondPositions[i][1] = random(-600, 600);
      diamondPositions[i][2] = random(30, 60);
    }
  }
}