function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  fill("white")
  for (let i = 0; i < 10; i++) {

    if (i == 6) {
      fill("blue");
    }
    else {
      fill("white");
    }

    rect(15 + i * 50, 15, 50, 50);

  }

  for (let i = 0; i < 5; i++) {
    fill(i * 70)

    rect(15, 100 + i * 50, 50, 50)
  }
}
