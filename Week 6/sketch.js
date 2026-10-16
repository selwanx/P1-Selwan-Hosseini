
let bedroom;
let kitchen;
let bathroom;
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
let mcfont;
let clean;
let leftButton;
let rightButton;
let selsit;
let room = 0;
let selwanlook;

let debug = true;

function setup() {
  createCanvas(1200, 600);

  // Create the buttons only once
  leftButton = createImg("actualrotateleft.png");
  leftButton.position(15, 550);
  leftButton.size(50, 50);
  leftButton.mousePressed(() => {
    room = (room + 2) % 3;
  });

  rightButton = createImg("actualrotateright.png");
  rightButton.position(1150, 550);
  rightButton.size(50, 50);
  rightButton.mousePressed(() => {
    room = (room + 1) % 3;
  });
}

function preload() {
  bedroom = debug
    ? loadImage("bedroom_small.gif")
    : loadImage("bedroom.gif");

  selStand = loadImage("seruwan.png");
  fullheart = loadImage("fullheart.png");
  halfheart = loadImage("halfheart.png");
  emptyheart = loadImage("emptyheart.png");
  container = loadImage("container.png");
  statscontainer = loadImage("statscontainer.png");
  fullhunger = loadImage("fullhunger.png");
  halfhunger = loadImage("halfhunger.png");
  emptyhunger = loadImage("emptyhunger.png");
  sellyface = loadImage("sellyface.png");
  mcfont = loadFont("mac's Extended Minecraft.otf");
  clean = loadImage("clean.png");
  kitchen = loadImage("kitchen.gif");
  bathroom = loadImage("bathroom.gif");
  selsit = loadImage("selwansit.png");
  selwanlook = loadImage("selwanlook.png");
}

function draw() {
  if (room === 0) {
    roombedroom();
  } else if (room === 1) {
    roomkitchen();
  } else if (room === 2) {
    roombathroom();
  }
}

function roombedroom() {
  background(bedroom);
  image(selStand, 300, 100, 600, 750);

  drawStats();
}

function roomkitchen() {
  background(kitchen);
  image(selsit, 250, 250, 325, 350);

  drawStats();
}

function roombathroom() {
  background(bathroom);
  image(selwanlook, 350, 150, 300, 400);

  drawStats();
}

function drawStats() {
  image(container, 0, 10, 450, 150);
  image(statscontainer, 900, 100, 300, 400);

  image(fullheart, 1005, 175, 30, 30);
  image(halfheart, 1035, 175, 30, 30);
  image(emptyheart, 1065, 175, 30, 30);

  image(fullhunger, 1000, 273, 40, 40);
  image(halfhunger, 1030, 273, 40, 40);
  image(emptyhunger, 1060, 273, 40, 40);

  image(clean, 990, 370, 60, 40);
  image(clean, 1020, 370, 60, 40);
  image(clean, 1050, 370, 60, 40);

  image(sellyface, 70, 58, 50, 50);

  textFont(mcfont);
  textSize(20);
  fill(255);
  text("Selwan", 185, 102);

  fill("#9f6bff");
  text("1", 360, 102);
}
