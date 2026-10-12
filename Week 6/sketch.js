let backgroundmenu;
let selStand;

function setup() {
  createCanvas(1200, 600);
}

function preload() {
 backgroundmenu = loadImage("purple.jpg")
 selStand = loadImage("seruwan.png")
}

function draw() {
  background(backgroundmenu);

  image(selStand, 300, 100, 600, 750)
}
