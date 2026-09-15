let score = 0;
let licht = 0;
let xBall = 0;
let yBall = 0;

function keyPressed () {
  if (keyCode == ENTER) {
    licht = licht + 1
    if (licht > 2) {
      licht = 0
    }
    }
  }

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  textSize(15);
  fill(0);
text("Houd B in om een blokje te laten verschijnen.", 20, 15);
text("Druk op spatie om het getal op 0 te zetten.", 20, 150);
text("Druk op enter om van rood -> groen -> oranje te gaan.", 20, 300);
text("Beweeg de eightball met WASD of de pijltjestoetsen.", 450, 15);

if (keyIsDown(66)) {
  fill('white');
  rect(35, 35, 60, 60);
} 

fill(0);
  text("Score: " + score, 50, 200);
score = score + 1;
if (keyIsDown(32)) {
  score = 0;
}
if (score === 500) {
  score = 0;
}

  noStroke()
  fill("#2e2e2e")
  rect(100, 350, 37, 100)
  rect(115, 435, 7, 100, 10)

  if (licht == 0) {
  fill("#ff0000")
  } else {
    fill("#570000")
  }
  circle(118, 370, 25)

   if (licht == 2) {
  fill("#ff6600")
  } else {
    fill("#753f00")
  }
  circle(118, 400, 25)

    if (licht == 1) {
  fill("#41d900")
  } else {
    fill("#00280c")
  }
  circle(118, 430, 25)

  fill(0);
circle(600 + xBall, 200 + yBall, 150);
fill(255);
circle(600 + xBall, 200 + yBall, 100);
fill(0);
textSize(50);
text("8", 587 + xBall, 215 + yBall);

  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    xBall = xBall - 10;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    xBall = xBall + 10;
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    yBall = yBall - 10;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    yBall = yBall + 10;
  }   

}
