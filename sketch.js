var paper, ground, dustbin;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	paper = new Paper(100, 700, 70);
	dustbin = new Dustbin (500, 600, 10, 20);
	ground = new Ground(0, 780, 800, 10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();

  drawSprites();
	dustbin.display();
	ground.display();
	paper.display();
}



