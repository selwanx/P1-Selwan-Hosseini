let licht = 0;
let zon = 0;
let cloud1 = 900;
let cloud2 = 900;
let sunsize1 = 120;
let sunsize2 = 100;
let treemove1 = 0;
let treemove2 = 0;
let treemove3 = 0;
let treemove4 = 0;
let car1 = 0;
let carspeed1 = 3;
let car2 = 0;
let carspeed2 = 2.5;
let car3 = 0;
let carspeed3 = 2.5;
preload(function() {
  loadSound("carhorn1.mp3", function(sound) {
    carhorn1 = sound;
  });
});

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#7dafff");

//zon
  fill(254, 244, 113, 127)
  sunsize1 = 100 + Math.sin(frameCount * 0.05) * 20
  sunsize2 = 80 + Math.sin(frameCount * 0.05) * 20
   circle(zon + -120, 85, sunsize1)
  fill(254, 244, 113, 127)
   circle(zon + -120 - 0, 85, sunsize2)
  fill("#fdff94")
   circle(zon + -120, 85, 70)
zon = frameCount % 1040
 
  //clouds
  fill("#e0e0e0")
  circle(830 - cloud1, 97, 50)
  circle(875 - cloud1, 100, 70)
  circle(920 - cloud1, 110, 50)
    fill("#ffffff")
  circle(830 - cloud1, 107, 50)
  circle(875 - cloud1, 110, 70)
  circle(920 - cloud1, 120, 50)
cloud1 = frameCount % 950;
  
    fill("#e0e0e0")
  circle(1300 - cloud2, 147, 50)
  circle(1345 - cloud2, 150, 70)
  circle(1390 - cloud2, 160, 50)
    fill("#ffffff")
  circle(1300 - cloud2, 157, 50)
  circle(1345 - cloud2, 160, 70)
  circle(1390 - cloud2, 170, 50)
cloud2 = frameCount % 1850;
  
  //bergen
  stroke(1)
  fill("#3d3d3d")
  triangle(150, 590, 650, 590, 400, 150)
  fill("#737373")
  triangle(50, 590, 350, 590, 200, 300)
  fill("#575757")
   triangle(450, 590, 1000, 590, 695, 400)

  //grond & weg
  noStroke()
  fill("#184200")
  rect(0, 520, 800, 80)
  fill("#2b7500")
  rect(0, 525, 800, 80)
  fill("#545454")
  rect(0, 530, 800, 80)
  fill("#666666")
   rect(0, 535, 800, 80)
  fill("#dbdbdb")
  rect(-30, 565, 75, 10, 25)
   rect(75, 565, 75, 10, 25)
   rect(180, 565, 75, 10, 25)
   rect(285, 565, 75, 10, 25)
  rect(390, 565, 75, 10, 25);
  rect(495, 565, 75, 10, 25)
  rect(600, 565, 75, 10, 25)
   rect(705, 565, 75, 10, 25)

  //stoplicht
  noStroke()
  fill("#2e2e2e")
  rect(640, 350, 37, 100)
  rect(655, 435, 7, 100, 10)

  if (licht == 0) {
  fill("#ff0000")
  } else {
    fill("#570000")
  }
  circle(658, 370, 25)

   if (licht == 2) {
  fill("#ff6600")
  } else {
    fill("#753f00")
  }
  circle(658, 400, 25)

    if (licht == 1) {
  fill("#41d900")
  } else {
    fill("#00280c")
  }
  circle(658, 430, 25)
  
  
  //bomen
  fill("#523320")
  rect(80, 408, 17.5, 120)
  fill("#005e00")
  circle(treemove1 + 80, 365, 85)
   fill("#055705")
  circle(treemove2 + 75, 375, 85)
   fill("#004d00")
  circle(treemove3 + 83, 385, 85)
   fill("#004700")
  circle(treemove4 + 90, 380, 85)
    
  //boom 2
   fill("#523320")
  rect(210, 408, 17.5, 120)
  fill("#005e00")
  circle(treemove1 + 210, 365, 85)
   fill("#055705")
  circle(treemove2 + 205, 375, 85)
   fill("#004d00")
  circle(treemove3 + 213, 385, 85)
   fill("#004700")
  circle(treemove4 + 220, 380, 85)
    
   //boom 3
   fill("#523320")
  rect(460, 408, 17.5, 120)
  fill("#005e00")
  circle(treemove1 + 460, 365, 85)
   fill("#055705")
  circle(treemove2 + 455, 375, 85)
   fill("#004d00")
  circle(treemove3 + 463, 385, 85)
   fill("#004700")
  circle(treemove4 + 470, 380, 85)
    
  treemove1 = 0 + Math.sin(frameCount * 0.075) * 5
  treemove2 = 0 + Math.sin(frameCount * 0.05) * 4
  treemove3 = 0 + Math.sin(frameCount * 0.1) * 2
  treemove4 = 0 + Math.sin(frameCount * 0.05) * 3

if (licht == 0 && car1 == 300 ) {
  carspeed1 = 0
} if (licht == 0 && car2 == 300 + 100 )  {
  carspeed2 = 0
} if (licht == 0 && car3 == 300 - 75 ) {
  carspeed3 = 0
}
  
if (licht == 2) {
  carspeed1 = 2.5
} if (licht == 2)  {
  carspeed2 = 2.5
} if (licht == 2) {
  carspeed3 = 2.5
}

if (licht == 1) {
  carspeed1 = 3.5
} if (licht == 1)  {
  carspeed2 = 3.5
} if (licht == 1) {
  carspeed3 = 4.5
}

//auto 1
  fill("#cb4967")
  rect(car1 + 300, 470, 100, 75)
   rect(car1 + 315, 500, 115, 45, 15, 15, 1, 1)
  fill("#1f1f1f")
  circle(car1 + 320, 550, 40)
  circle(car1 + 410, 550, 40)
  car1 = car1 + carspeed1
  if (car1 >= 950) {
    car1 = -450
  }
  
  //auto 2
  fill("#5c21d1")
  rect(car2 + -100, 490, 100, 75)
   rect(car2 + -85, 520, 115, 45, 15, 15, 1, 1)
  fill("#1f1f1f")
  circle(car2 + -80, 570, 40)
  circle(car2 + 10, 570, 40)
car2 = car2 + carspeed2
  if (car2 >= 950) {
    car2 = -350
  }

  //auto 3
    fill("#57ffb6")
  rect(car3 + 280, 490, 100, 75)
   rect(car3 + 295, 520, 115, 45, 15, 15, 1, 1)
  fill("#1f1f1f")
  circle(car3 + 300, 570, 40)
  circle(car3 + 390, 570, 40)
car3 = car3 + carspeed3
  if (car3 >= 950) {
    car3 = -450
  }

  

//boom 4
   fill("#523320")
  rect(330, 525, 17.5, 120)
  fill("#005e00")
  circle(treemove1 + 330, 482, 85)
   fill("#055705")
  circle(treemove2 + 325, 492, 85)
   fill("#004d00")
  circle(treemove3 + 333, 502, 85)
   fill("#004700")
  circle(treemove4 + 340, 497, 85)
  treemove1 = 0 + Math.sin(frameCount * 0.075) * 5
  treemove2 = 0 + Math.sin(frameCount * 0.05) * 4
  treemove3 = 0 + Math.sin(frameCount * 0.1) * 2
  treemove4 = 0 + Math.sin(frameCount * 0.05) * 3




  
}

function keyPressed () {
  if (keyCode == ENTER) {
    licht = licht + 1
    if (licht > 2) {
      licht = 0
    }
    }

  if (keyCode == SPACE) {
    playSound("carhorn1.mp3") 
  }
}

function keyPressed () {
  if (keyCode == ENTER) {
    licht = licht + 1
    if (licht > 2) {
      licht = 0
    }
    }
  }