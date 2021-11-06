
var antelopef1
var antelope

function preload() {
  antelopef1=loadImage("./images/Antelope-1.png")
}

function setup() {
  antelopef1= createSprite(500,100,0,0);
  createCanvas(800,400);
}

function draw() {
  background("yellow");  
  drawSprites();
}