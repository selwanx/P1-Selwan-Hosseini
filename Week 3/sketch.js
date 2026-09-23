let blockA = 0;
let blockB = 0;
let blockC = 0;
let blockD = 0;
let blockE = 0;
let blockF = 0;
let blockG = 0;
let blockH = 0;
let blockI = 0;
let players = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);

  fill("black")
  rect(75, 75, 240, 240, 15)

  if (blockA == 0) {
    fill("white")
    rect(80, 80, 70, 70, 15)
  }
  if (blockA == 1) {
    fill("#54a4ff")
    rect(80, 80, 70, 70, 15)
  }
  if (blockA == 2) {
    fill("#ff5274")
    rect(80, 80, 70, 70, 15)
  }
  if (blockB == 0) {
    fill("white")
    rect(160, 80, 70, 70, 15)
  }
  if (blockB == 1) {
    fill("#54a4ff")
    rect(160, 80, 70, 70, 15)
  }
  if (blockB == 2) {
    fill("#ff5274")
    rect(160, 80, 70, 70, 15)
  }
  if (blockC == 0) {
    fill("white")
    rect(240, 80, 70, 70, 15)
  }
  if (blockC == 1) {
    fill("#54a4ff")
    rect(240, 80, 70, 70, 15)
  }
  if (blockC == 2) {
    fill("#ff5274")
    rect(240, 80, 70, 70, 15)
  }
  if (blockD == 0) {
    fill("white")
    rect(80, 160, 70, 70, 15)
  }
  if (blockD == 1) {
    fill("#54a4ff")
    rect(80, 160, 70, 70, 15)
  }
  if (blockD == 2) {
    fill("#ff5274")
    rect(80, 160, 70, 70, 15)
  }
  if (blockE == 0) {
    fill("white")
    rect(160, 160, 70, 70, 15)
  }
  if (blockE == 1) {
    fill("#54a4ff")
    rect(160, 160, 70, 70, 15)
  }
  if (blockE == 2) {
    fill("#ff5274")
    rect(160, 160, 70, 70, 15)
  }
  if (blockF == 0) {
    fill("white")
    rect(240, 160, 70, 70, 15)
  }
  if (blockF == 1) {
    fill("#54a4ff")
    rect(240, 160, 70, 70, 15)
  }
  if (blockF == 2) {
    fill("#ff5274")
    rect(240, 160, 70, 70, 15)
  }
  if (blockG == 0) {
    fill("white")
    rect(80, 240, 70, 70, 15)
  }
  if (blockG == 1) {
    fill("#54a4ff")
    rect(80, 240, 70, 70, 15)
  }
  if (blockG == 2) {
    fill("#ff5274")
    rect(80, 240, 70, 70, 15)
  }
  if (blockH == 0) {
    fill("white")
    rect(160, 240, 70, 70, 15)
  }
  if (blockH == 1) {
    fill("#54a4ff")
    rect(160, 240, 70, 70, 15)
  }
  if (blockH == 2) {
    fill("#ff5274")
    rect(160, 240, 70, 70, 15)
  }
  if (blockI == 0) {
    fill("white")
    rect(240, 240, 70, 70, 15)
  }
  if (blockI == 1) {
    fill("#54a4ff")
    rect(240, 240, 70, 70, 15)
  }
  if (blockI == 2) {
    fill("#ff5274")
    rect(240, 240, 70, 70, 15)
  }

}

function mousePressed() {
  if (mouseButton == "left") {
    if (mouseX >= 80 && mouseX <= 150 && mouseY >= 80 && mouseY <= 150 && blockA == 0) {
      players = (players + 1) % 2;
      blockA = players + 1;
    }
    if (mouseX >= 160 && mouseX <= 230 && mouseY >= 80 && mouseY <= 150 && blockB == 0) {
      players = (players + 1) % 2;
      blockB = players + 1;
    }
    if (mouseX >= 240 && mouseX <= 310 && mouseY >= 80 && mouseY <= 150 && blockC == 0) {
      players = (players + 1) % 2;
      blockC = players + 1;
    }
    if (mouseX >= 240 && mouseX <= 310 && mouseY >= 80 && mouseY <= 150 && blockC == 0) {
      players = (players + 1) % 2;
      blockC = players + 1;
    }
    if (mouseX >= 240 && mouseX <= 310 && mouseY >= 80 && mouseY <= 150 && blockC == 0) {
      players = (players + 1) % 2;
      blockC = players + 1;
    }
    if (mouseX >= 80 && mouseX <= 150 && mouseY >= 160 && mouseY <= 230 && blockD == 0) {
      players = (players + 1) % 2;
      blockD = players + 1;
    }
    if (mouseX >= 160 && mouseX <= 230 && mouseY >= 160 && mouseY <= 230 && blockE == 0) {
      players = (players + 1) % 2;
      blockE = players + 1;
    }
    if (mouseX >= 240 && mouseX <= 310 && mouseY >= 160 && mouseY <= 230 && blockF == 0) {
      players = (players + 1) % 2;
      blockF = players + 1;
    }
    if (mouseX >= 80 && mouseX <= 150 && mouseY >= 240 && mouseY <= 310 && blockG == 0) {
      players = (players + 1) % 2;
      blockG = players + 1;
    }
    if (mouseX >= 160 && mouseX <= 230 && mouseY >= 240 && mouseY <= 310 && blockH == 0) {
      players = (players + 1) % 2;
      blockH = players + 1;
    }
    if (mouseX >= 240 && mouseX <= 310 && mouseY >= 240 && mouseY <= 310 && blockI == 0) {
      players = (players + 1) % 2;
      blockI = players + 1;
    }
  }
}

function keyPressed() {
  if (keyCode == 32) {
    blockA = 0
    blockB = 0
    blockC = 0
    blockD = 0
    blockE = 0
    blockF = 0
    blockG = 0
    blockH = 0
    blockI = 0
    players = 0
  }
}