// lege arrays
let kleuren = [];

let tellersRect = [];
let tellersCircle = [];
let tellersRuit = [];

let positionRect = [];
let positionCircle = [];
let positionRuit = [];

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 100; i++) {
    kleuren.push([random(147), random(107), random(255)]);

    // postities van vormen
    positionRect.push([random(0, 750), random(0, 500), random(50, 80), random(50, 80)]);
    positionCircle.push([random(0, 800), random(0, 600), random(30, 70)]);
    positionRuit.push([random(0, 800), random(0, 600), 50]);

    // tellers van vormen
    tellersRect.push(random(0, 180));
    tellersCircle.push(random(0, 180));
    tellersRuit.push(random(0, 180));
  }
}


function draw() {
  background("#fad8ff");

  for (let i = 0; i < 6; i++) {
    fill(kleuren[i]);

    // rect teller
    tellersRect[i]--;

    if (tellersRect[i] <= 0) {
      positionRect[i][1] += 3;
    }

    // cirkel teller
    tellersCircle[i]--;

    if (tellersCircle[i] <= 0) {
      positionCircle[i][1] += 3;
    }

    // Ruit teller
    tellersRuit[i]--;

    if (tellersRuit[i] <= 0) {
      positionRuit[i][1] += 3;
    }

    // Vormen tekenen
    rect(...positionRect[i]); // 
    circle(...positionCircle[i]);

    // ruit vorm
    let x = positionRuit[i][0];
    let y = positionRuit[i][1];
    let grootte = positionRuit[i][2];

    beginShape();
    vertex(x, y - grootte);
    vertex(x + grootte, y);
    vertex(x, y + grootte);
    vertex(x - grootte, y);
    endShape(CLOSE);


    // rect onder scherm
    if (positionRect[i][1] > height) {
      positionRect[i][0] = random(0, 750);
      positionRect[i][1] = random(-100, 0);

      tellersRect[i] = random(60, 180);
    }

    // cirkel onder scherm
    if (positionCircle[i][1] > 850) {
      positionCircle[i][0] = random(0, 750);
      positionCircle[i][1] = random(-100, 0);

      tellersCircle[i] = random(60, 180);
    }

    // ruit onder scherm
    if (positionRuit[i][1] > 850) {
      positionRuit[i][0] = random(0, 750);
      positionRuit[i][1] = random(-100, 0);

      tellersRuit[i] = random(60, 120);
    }
  }
}