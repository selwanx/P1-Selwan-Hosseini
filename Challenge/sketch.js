let dice = 0
let timer = 0
let randomizing = false

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (randomizing == true && frameCount % 5 == 0) {
    dice = floor(random(1, 7))
  }

  if(randomizing == true){
    timer = timer + deltaTime * 0.001;
  }

  if(timer >= 2.5) {
    randomizing = false;
  }

  if (dice == 1) {
      //dice (1)
  fill("#ffffff")
  stroke("#000000")
rect(150, 150, 80, 80, 10)
  fill("#000000")
  circle(190, 190, 20)
  }
  if (dice == 2) {
    //dice (2)
  fill("#ffffff")
  stroke("#000000")
rect(150, 150, 80, 80, 10)
  fill("#000000")
  circle(210, 170, 20)
  circle(170, 210, 20)
  }
  if (dice == 3) {
      //dice (3)
  fill("#ffffff")
  stroke("#000000")
rect(150, 150, 80, 80, 10)
  fill("#000000")
  circle(210, 170, 20)
  circle(190, 190, 20)
  circle(170, 210, 20)
  }
  if (dice == 4) {
  //dice (4)
  fill("#ffffff")
  stroke("#000000")
rect(150, 150, 80, 80, 10)
  fill("#000000")
  circle(210, 170, 20)
  circle(170, 170, 20)
  circle(210, 210, 20)
  circle(170, 210, 20)
  }
  if (dice == 5) {
   //dice (5)
  fill("#ffffff")
  stroke("#000000")
rect(150, 150, 80, 80, 10)
  fill("#000000")
  circle(210, 170, 20)
  circle(170, 170, 20)
  circle(190, 190, 20)
  circle(210, 210, 20)
  circle(170, 210, 20)
  }
  if (dice == 6) {
    //dice (6)
  fill("#ffffff")
  stroke("#000000")
rect(150, 150, 80, 80, 10)
  fill("#000000")
  circle(210, 165, 20)
  circle(170, 165, 20)
  circle(210, 190, 20)
  circle(170, 190, 20)
  circle(210, 215, 20)
  circle(170, 215, 20)
  }

  text("dice = " + dice, 10, 20)
}


function keyPressed(){
  if (keyCode == 32) {
    timer = 0
    dice = floor(random(1.5, 6.5))
    randomizing = true;
  }
}
