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
let happiness = 120;
let hunger = 120;
let cleanliness = 120;
let showerButton;
let eatButton;
let playButton;
let lastStatDecrease = 0;
let decreaseInterval = 1000;
let playimage;
let music;
let eatingSound;
let clickSound;
let deathScreenImage;
let deathSound;
let isDead = false;
let deathSoundPlayed = false;
let respawnButton;

let debug = true;

function setup() {
  createCanvas(1200, 600);

  userStartAudio();
  music.setVolume(0.5);
  music.loop();

  loadData();
  lastStatDecrease = millis();

  // Create the buttons only once
  leftButton = createImg("actualrotateleft.png");
  leftButton.position(15, 550);
  leftButton.size(50, 50);
  leftButton.mousePressed(() => {
    room = (room + 2) % 3;
    clickSound.play();
  });

  rightButton = createImg("actualrotateright.png");
  rightButton.position(1150, 550);
  rightButton.size(50, 50);
  rightButton.mousePressed(() => {
    room = (room + 1) % 3;
    clickSound.play();
  });

  // Shower button
  showerButton = createImg("shower.png");
  showerButton.position(80, 280);
  showerButton.size(150, 150)
  showerButton.mousePressed(() => {
    cleanliness = min(140, cleanliness + 20);
    saveData();
    clickSound.play();
  });

  // Eat button
  eatButton = createImg("eating.png");
  eatButton.size(150, 150)
  eatButton.position(80, 280);
  eatButton.mousePressed(() => {
    hunger = min(140, hunger + 20);
    saveData();
    eatingSound.play();
    clickSound.play();
  });

  // Play button
  playButton = createImg("playbutton.png");
  playButton.position(80, 280);
  playButton.size(150, 150)
  playButton.mousePressed(() => {
    happiness = min(140, happiness + 20);
    saveData();
    clickSound.play();
  });

  respawnButton = createButton("RESPAWN");
  respawnButton.position(width / 2 - 75, height * 0.75);
  respawnButton.size(150, 50);
  respawnButton.hide();

  respawnButton.mousePressed(() => {
    happiness = 120;
    hunger = 120;
    cleanliness = 120;

    isDead = false;
    deathSoundPlayed = false;

    lastStatDecrease = millis();

    saveData();
    respawnButton.hide();

    leftButton.show();
    rightButton.show();

    updateActionButtons();

    if (music && !music.isPlaying()) {
      music.loop();
    }
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
  music = loadSound("ost.mp3");
  eatingSound = loadSound("eating.mp3");
  clickSound = loadSound("clicksound.mp3")
  deathScreenImage = loadImage("deathscreen.png");
  deathSound = loadSound("death.mp3");
}

function deathScreen() {
  // Stop the background music and play the death sound once
  if (!deathSoundPlayed) {
    if (music && music.isPlaying()) {
      music.stop();
    }

    deathSound.play();
    deathSoundPlayed = true;

    // Hide all game buttons
    leftButton.hide();
    rightButton.hide();
    showerButton.hide();
    eatButton.hide();
    playButton.hide();

    respawnButton.show();
  }

  // Display the death screen
  image(deathScreenImage, 0, 0, width, height);
}

function updateActionButtons() {
  showerButton.hide();
  eatButton.hide();
  playButton.hide();

  if (room === 0) {
    playButton.show();
  } else if (room === 1) {
    eatButton.show();
  } else if (room === 2) {
    showerButton.show();
  }
}

function saveData() {
  localStorage.setItem("happiness", happiness);
  localStorage.setItem("hunger", hunger);
  localStorage.setItem("cleanliness", cleanliness);
}

function loadData() {
  if (localStorage.getItem("happiness") !== null) {
    happiness = Number(localStorage.getItem("happiness"));
  }

  if (localStorage.getItem("hunger") !== null) {
    hunger = Number(localStorage.getItem("hunger"));
  }

  if (localStorage.getItem("cleanliness") !== null) {
    cleanliness = Number(localStorage.getItem("cleanliness"));
  }
}

function decreaseStats() {
  if (millis() - lastStatDecrease >= decreaseInterval) {
    hunger = max(0, hunger - 1);
    happiness = max(0, happiness - 1);
    cleanliness = max(0, cleanliness - 1);

    saveData();

    lastStatDecrease = millis();

    console.log("Hunger:", hunger);
    console.log("Happiness:", happiness);
    console.log("Cleanliness:", cleanliness);

  }
}

function drawHearts() {
  let positions = [1005, 1035, 1065];

  for (let i = 0; i < 3; i++) {
    let value = happiness - i * 40;

    if (value >= 40) {
      image(fullheart, positions[i], 175, 30, 30);
    } else if (value >= 20) {
      image(halfheart, positions[i], 175, 30, 30);
    } else {
      image(emptyheart, positions[i], 175, 30, 30);
    }
  }
}

function drawHunger() {
  let positions = [1000, 1030, 1060];

  for (let i = 0; i < 3; i++) {
    let value = hunger - i * 40;

    if (value >= 40) {
      image(fullhunger, positions[i], 273, 40, 40);
    } else if (value >= 20) {
      image(halfhunger, positions[i], 273, 40, 40);
    } else {
      image(emptyhunger, positions[i], 273, 40, 40);
    }
  }
}

function drawCleanliness() {
  let positions = [993, 1023, 1053];

  for (let i = 0; i < 3; i++) {
    let value = cleanliness - i * (100 / 3);

    if (value >= 100 / 3) {
      image(clean, positions[i], 370, 50, 40);
    }
  }
}

function draw() {
  // Check if all stats have reached zero
  if (happiness <= 0 && hunger <= 0 && cleanliness <= 0) {
    isDead = true;
  }

  // Show only the death screen when dead
  if (isDead) {
    deathScreen();
    return;
  }

  decreaseStats();

  if (room === 0) {
    roombedroom();
  } else if (room === 1) {
    roomkitchen();
  } else if (room === 2) {
    roombathroom();
  }

  updateActionButtons();
  drawHearts();
  drawHunger();
  drawCleanliness();
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

  image(sellyface, 70, 58, 50, 50);

  textFont(mcfont);
  textSize(20);
  fill(255);
  text("Selwan", 185, 102);

  fill("#9f6bff");
  text("1", 360, 102);
}
