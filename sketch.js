let cirX = 0
let cirY = 0
let speedX = 10
let speedY = 10

let bab_happy
let bab_lazey
let bab_smirk

let bab_active

function preload() {
  bab_happy = loadImage('https://i.ibb.co/F57h3zr/babylon.png')
  bab_lazer = loadImage('https://i.ibb.co/NTBF5qS/lazereye.png')
  bab_smirk = loadImage('https://i.ibb.co/TP41KHS/normal.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  bab_active = bab_happy
  imageMode(CENTER)
}

function draw() {
  background(40, 128, 125)
  image(bab_active, cirX, cirY)
  
  if (cirX > width - 100) {
    speedX = -10
  }
  
  else if (cirX < 1) speedX = 10
  else if (cirY > height - 100) speedY = -10
  else if (cirY < 0) speedY = 10
  
  if (dist(mouseX, mouseY, cirX, cirY) < 50 && mouseIsPressed) {
    cirX = mouseX
    cirY = mouseY
    bab_active = bab_lazer
  } else if (dist(mouseX, mouseY, cirX, cirY) < 100) {
    bab_active = bab_smirk
  } else {
    bab_active = bab_happy
  }
  
  cirX += speedX
  cirY += speedY
}