const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bg, ground, bground;
var form;

var start, play;

var playerAnime, player;

var screw, screwdriver, fuel, oxygen, wings, thruster, stand;
var screwImg, driverImg, fuelImg, oxygenImg, wingsImg, thrusterImg;

var gameState = 0;

function preload() {
  playerAnime = loadAnimation("./anime/30.png", "./anime/31.png", "./anime/32.png", "./anime/33.png", "./anime/34.png",
   "./anime/35.png", "./anime/36.png", "./anime/37.png", "./anime/38.png", "./anime/39.png", "./anime/40.png",
    "./anime/41.png", "./anime/42.png");

  bg = loadImage("./images/ground.png");
  
  bground = loadImage("./images/backgro.jpg");

  start = loadImage("./images/start.png");
  play = loadImage("./images/play3.png");

  screwImg = loadImage("./images/screw.png");
  driverImg = loadImage("./images/screwdriver.png");
  fuelImg = loadImage("./images/fuel.png");
  oxygenImg = loadImage("./images/oxygen.png");
  wingsImg = loadImage("./images/wings.png");
  thrusterImg = loadImage("./images/thruster.png");
}

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);
  
  ground = createSprite(displayWidth/2,displayHeight/2, displayWidth, displayHeight);
 
  engine = Engine.create();
  world = engine.world;

  form = new Form();

  player = new Player(displayWidth/2, displayHeight/2);

  screw = createSprite(random(0, displayWidth), displayHeight/7+450, 50, 50);
  // screwdriver = createSprite(random(0, displayWidth), displayHeight/7+450, 50, 50);
  // fuel = createSprite(random(0, displayWidth), displayHeight/7+450, 50, 50);
}

function draw() {
  background(bground);  
  
  Engine.update(engine);

  if(ground.x < 510){
    ground.x = ground.width/2;
  }

  ground.addImage(bg, displayWidth/2, 300, displayWidth, 500);
  ground.velocityX = -15;
 
  if(gameState === 0){
    form.display();
  }

  if(gameState === 1){
    form.hide();
  }

  spawnParts();

  drawSprites();
}

function spawnParts() {
   var rand = Math.round(random(1, 7));
   switch(rand){
     case 1: screwdriver();
     break;
     case 2: screw();
     break;
     case 3: fuel();
     break;
     case 4: oxygen();
     break;
     case 5: wings();
     break;
     case 6: thruster();
     break;
     case 7: stand();
     default: break;
   }
}

function screwdriver() {
  if(frameCount % 1500 === 0){
  screwdriver = createSprite(random(0, displayWidth), displayHeight/7+450, 50, 50);
  screwdriver.addImage("screwdriver", driverImg);
  //screwdriver.Visibility = 255;

  // if(screwdriver.isTouching(player.body)){
  //   screwdriver.destroy();
  //   screwdriver.lifetime = 0;
  // }
  }
}

function screw() {
  if(frameCount % 35 === 0){
  screw = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  screw.addImage("screw", screwImg);

  if(screw.isTouching(player)){
    screw.destroy();
  }
 }
}

function fuel() {
  if(frameCount % 45 === 0){
  fuel = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  fuel.addImage("fuel", fuelImg);

  if(fuel.isTouching(player)){
    fuel.destroy();
  }
 }
}

function oxygen() {
  if(frameCount % 55 === 0){
  oxygen = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  oxygen.addImage("oxygen", oxygenImg);

  if(oxygen.isTouching(player)){
    oxygen.destroy();
  }
 }
}

function wings() {
  if(frameCount % 65 === 0){
  wings = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  wings.addImage("wings", wingsImg);

  if(wings.isTouching(player)){
    wings.destroy();
  }
 }
}

function thruster() {
  if(frameCount % 65 === 0){
  thruster = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  thruster.addImage("thruster", thrusterImg);

  if(thruster.isTouching(player)){
    thruster.destroy();
  }
 }
}

function stand() {
  if(frameCount % 65 === 0){
  stand = createSprite(displayWidth/2+100, displayHeight/7+450, 50, 50);
  stand.addImage("stand", standImg);

  if(stand.isTouching(player)){
    stand.destroy();
  }
 }
}
