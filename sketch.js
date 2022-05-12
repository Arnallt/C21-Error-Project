
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ground,box1,box2;


var options;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_op = {
		restitution : 0.2
	}

	var ground_op = {
		collision : true,
		isStatic : true			
	}


	//Create the Bodies Here.
	ground = new Ground(400,670,800,15,ground_op);
	box1 = new Ground(560,640,15,50)
	box2 = new Ground(690,640,15,50)

	ball = Bodies.circle(200,300,30,ball_op);
	World.add(world,ball);
	
}


function draw() {
Engine.run(engine);
  rectMode(CENTER);
  background(0);

  fill("white");
  ellipse(ball.position.x, ball.position.y,30);

  ground.show();
  box1.show();
  box2.show();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
  
	}
}


