let image1;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(220);

  //naam
   noStroke()
   fill(0, 0, 0);
  text("Selwan Hosseini", 20, 50);

  //nl vlag
  fill(255, 0, 0);
  rect(20, 70, 100, 20);
  
  fill(255, 255, 255);
  rect(20, 90, 100, 20);

  fill(0, 0, 255);
  rect(20, 110, 100, 20);

  //schaakmat
  stroke("#00000")
  fill(0, 0, 0);
  rect(20, 150, 80)
  fill(255, 255,255);
  rect(47,150,27);
  rect(46,203,27);
  rect(20,177,27);
  rect(73,177,27);

  //huis
  noFill()
  strokeWeight(3)
  rect(20, 280, 65)
  triangle(21, 279, 84, 279, 53, 250)

  //stoplicht
  noStroke()
  fill("#808080")
  rect(180, 50, 37, 100)
  rect(190, 80, 18.5, 100)

  fill("#ff0100")
  circle(198.5, 70, 25)
  fill("#ff8000")
  circle(198.5, 103, 25)
  fill("#00ff01")
  circle(198.5, 134, 25)

  //dobbelsteen
  fill("#ffffff")
  stroke("#000000")
rect(180, 200, 85, 85, 10)
  fill("#000000")
  circle(198, 220, 20)
  circle(222, 243, 20)
  circle(247, 265, 20)

//mario, 1 px in og = 10 px hier
fill("#ff0100")
  noStroke()
rect(315, 30, 60, 10)
rect(305, 40, 100, 10)
  fill("#ffc89f")
rect(315, 50, 60, 50)
  rect(375, 60, 30, 20)
  rect(305, 60, 10, 20)
  rect(405, 70, 10, 10)
  rect(375, 60, 20, 40)
  rect(285, 130, 120, 30)
  fill("#000000")
  rect(365, 50, 10, 20)
  rect(375, 70, 10, 10)
  rect(365, 80, 40, 10)
  fill("#984039")
   rect(305, 50, 30, 10)
  rect(315, 50, 10, 30)
  rect(315, 70, 20, 10)
  rect(295, 60, 10, 30)
  rect(295, 80, 20, 10)
fill("#ff0100")
  rect(305, 100, 70, 10)
  rect(295, 110, 100, 10)
  rect(285, 120, 120, 10)
  rect(305, 130, 80, 10)
  fill("#0000ff")
   rect(325, 100, 10, 70)
  rect(355, 110, 10, 60)
  rect(345, 120, 10, 40)
  rect(335, 120, 10, 40)
  rect(315, 130, 10, 40)
  rect(365, 130, 10, 40)
  rect(375, 150, 10, 20)
  rect(305, 150, 10, 20)
  fill("#984039")
  rect(295, 170, 30, 10)
  rect(285, 180, 40, 10)
  rect(365, 170, 30, 10)
  rect(365, 180, 40, 10)
  fill("#ffff00")
  rect(355, 130, 10, 10)
  rect(325, 130, 10, 10)

  //mn eigen pixelart ding bla bla
image(image1, 300, 250, 200, 200)
}

function preload() {
  image1 = loadImage("umbeo.jpg");
}