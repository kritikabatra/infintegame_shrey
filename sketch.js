//zombie
var zombie ,zombie_running;
//boy
var boy, boy_running;
//backgorund
var background1, background_img;
//obstacles (rocks)
var rock1, rock2, obstacle
//obstacles (tombstone)
var gravestone_img, gravestone
//creating obstacles group
var obstaclesGroup;
//game states
var play = 1, end = 0;
var gameState = play;

//invisible ground
var invisibleGround;

var score=0;

function preload(){ // load images, animations and sound files
  
  //zombie images
  zombie_running = loadAnimation("zombie1.png", "zombie2.png", "zombie3.png", "zombie4.png", "zombie5.png", "zombie6.png",);

  //boy images
  boy_running = loadAnimation("boy1.png", "boy2.png", "boy3.png", "boy4.png", "boy5.png", "boy6.png", "boy7.png", "boy8.png", "boy9.png", "boy10.png");

  //background image
  background_img = loadImage("background.png")

  //rocks
  rock1 = loadImage("rock1.png");
  rock2 = loadImage("rock2.png");

  //gravestone
  gravestone_img = loadImage("gravestone.png");

}

function setup()
{ // create sprites, add animation and images, executes its st. only once
createCanvas(800,600)

 //creating a background sprite
 background1 = createSprite(200, 300)
 background1.addImage("background", background_img)
 background1.scale = 0.5;
 background1.velocityX = -2;

 //create a zombie sprite
 zombie = createSprite(60,440,40,80);
 zombie.addAnimation("running", zombie_running);
 zombie.scale = 1;

 //create a boy sprite
 boy = createSprite(200, 440, 40, 80);
 boy.addAnimation("running", boy_running);
 boy.scale = 0.5;

 //invisible ground
 invisibleGround = createSprite(400,498,800,10)
 invisibleGround.visible=false;

 //creating the obstcles group
 obstaclesGroup = new Group();

}

function draw(){
  background("brown")
  drawSprites();


  textSize(20)
  fill("white");
  text("Distance: "+score,650,50);


  if (gameState === play){
    
  //infinite background
  if (background1.x < 300)
  { 
    background1.x = 500;
  }

  //Jumping the hero
  if (keyDown("space") && boy.y >= 145) 
  {   
   boy.velocityY = -12;  
   //jump.play()
  } 
  boy.velocityY = boy.velocityY + 1

  //Calling function for obstacle
  spawnObstacles();
  }
  boy.collide(invisibleGround);

  //if (gameState === end){



  //}

 
}

// function spawn obstacles
function spawnObstacles()
{
  if (frameCount % 80 === 0)
  {
    obstacle = createSprite(600, 465, 10, 40);
    obstacle.velocityX = -6;

  //var num1 = Math.round(random(1,3));
  var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(rock1);
              obstacle.scale = 0.4  ;
              break;
      case 2: obstacle.addImage(rock2);
              obstacle.scale = 0.4;
              break;
      case 3: obstacle.addImage(gravestone_img);
              obstacle.scale = 0.15;
              break;
     default: break;
       
  }
  obstacle.lifetime = 107;
  obstaclesGroup.add(obstacle);
  }
  
}
