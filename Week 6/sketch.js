let bedroom;
let selStand;
let fullheart;
let halfheart;
let emptyheart;
let container;
let statscontainer;
let fullhunger;
let halfhunger;
let emptyhunger;
let sellyface;
let mcfont
let clean;

let debug = false;

function setup() {
  createCanvas(1200, 600);
}

function preload() {
  bedroom = debug ? loadImage("bedroom_small.gif") : loadImage("bedroom.gif");
  selStand = loadImage("seruwan.png")
  fullheart = loadImage("fullheart.png")
  halfheart = loadImage("halfheart.png")
  emptyheart = loadImage("emptyheart.png")
  container = loadImage("container.png")
  statscontainer = loadImage("statscontainer.png")
  fullhunger = loadImage("fullhunger.png")
  halfhunger = loadImage("halfhunger.png")
  emptyhunger = loadImage("emptyhunger.png")
  sellyface = loadImage("sellyface.png")
  mcfont = loadFont("mac's Extended Minecraft.otf")
  clean = loadImage("clean.png")
}

function room1() {
  background(bedroom);
  image(selStand, 300, 100, 600, 750);
  image(container, 0, 10, 450, 150);
  image(statscontainer, 900, 100, 300, 400);
  image(fullheart, 1005, 175, 30, 30);
  image(halfheart, 1035, 175, 30, 30);
  image(emptyheart, 1065, 175, 30, 30);
  image(fullhunger, 1000, 273, 40, 40);
  image(halfhunger, 1030, 273, 40, 40);
  image(clean, 990, 370, 60, 40);
  image(clean, 1020, 370, 60, 40);
  image(clean, 1050, 370, 60, 40);
  image(emptyhunger, 1060, 273, 40, 40);
  image(sellyface, 70, 58, 50, 50);
  textFont(mcfont);
  textSize(20);
  fill(255);
  text("Selwan", 185, 102);
  fill("#9f6bff");
  text("1", 360, 102);
}

function draw() {
  room1();
}
