let score = 0;
let happy;
let smile;
let meh;
let mad;


function preload() {
  happy = loadImage("happy.png");
  smile = loadImage("smile.png");
  meh = loadImage("meh.png");
  mad = loadImage("mad.png");
}


function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  if (score >= 90) {
    fill(0, 255, 0);
    text("Uitstekend!", 10, 100);
    image(happy, 10, 120, 50, 50);
  }   else if (score <= 89 && score >= 70) {
    fill(255, 255, 0);
    text("Goed Gedaan!", 10, 100);
    image(smile, 10, 120, 50, 50);
  }   else if (score <= 69 && score >= 50) {
    fill('orange');
    text("Voldoende", 10, 100); 
    image(meh, 10, 120, 50, 50);
  }  else if (score <= 49) {
    fill(255, 0, 0);
    text("Onvoldoende", 10, 100);
    image(mad, 10, 120, 50, 50);
}
}

function keyPressed() {
  if (keyCode == 32) {
    score = random(0, 100); 
  }
}

