function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("#7dafff");

//zon
   fill(254, 244, 113, 127)
   circle(475, 85, 120)
  fill(254, 244, 113, 127)
   circle(475, 85, 100)
  fill("#fdff94")
   circle(475, 85, 70)
  
  //clouds
  fill("#e0e0e0")
  circle(130, 97, 50)
  circle(175, 100, 70)
  circle(220, 110, 50)
    fill("#ffffff")
  circle(130, 107, 50)
  circle(175, 110, 70)
  circle(220, 120, 50)

    fill("#e0e0e0")
  circle(600, 147, 50)
  circle(645, 150, 70)
  circle(690, 160, 50)
    fill("#ffffff")
  circle(600, 157, 50)
  circle(645, 160, 70)
  circle(690, 170, 50)
    
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

  fill("#420000")
  circle(658, 370, 25)
  fill("#3d1f00")
  circle(658, 400, 25)
  fill("#00ff01")
  circle(658, 430, 25)

  //bomen
  fill("#523320")
  rect(80, 408, 17.5, 120)
  fill("#005e00")
  circle(80, 365, 85)
   fill("#055705")
  circle(75, 375, 85)
   fill("#004d00")
  circle(83, 385, 85)
   fill("#004700")
  circle(90, 380, 85)

  //boom 2
   fill("#523320")
  rect(210, 408, 17.5, 120)
  fill("#005e00")
  circle(210, 365, 85)
   fill("#055705")
  circle(205, 375, 85)
   fill("#004d00")
  circle(213, 385, 85)
   fill("#004700")
  circle(220, 380, 85)

   //boom 3
   fill("#523320")
  rect(460, 408, 17.5, 120)
  fill("#005e00")
  circle(460, 365, 85)
   fill("#055705")
  circle(455, 375, 85)
   fill("#004d00")
  circle(463, 385, 85)
   fill("#004700")
  circle(470, 380, 85)

   //boom 4
   fill("#523320")
  rect(330, 525, 17.5, 120)
  fill("#005e00")
  circle(330, 482, 85)
   fill("#055705")
  circle(325, 492, 85)
   fill("#004d00")
  circle(333, 502, 85)
   fill("#004700")
  circle(340, 497, 85)

  //auto 1
  fill("#5c21d1")
  rect(80, 490, 100, 75)
   rect(95, 520, 115, 45, 15, 15, 1, 1)
  fill("#1f1f1f")
  circle(100, 570, 40)
  circle(190, 570, 40)
}