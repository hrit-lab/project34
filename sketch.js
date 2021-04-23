
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var box,boxImg;
var ball;
var invisibleGround;
function preload()
{
	boxImg = loadImage("box.png");
}

function setup() {
  engine = Engine.create();
   world = engine.world;
	createCanvas(800, 600);

	//Create the Bodies Here.
   box = createSprite(400,550);
   box.addImage(boxImg);
   box.scale = 0.3;
  ball = new Ball(100,50,50,50);
  invisibleGround = new Ground(400,580,820,20);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  ball.display();
  invisibleGround.display();

  if(keyDown(LEFT_ARROW)){
    box.velocityX = -5;
  }
  if(keyDown(RIGHT_ARROW)){
    box.velocityX = 5;
  }
  drawSprites();
}
