
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	var bobDiameter=50;
	var startX=width/2;
	var startY=height/4+500;

	//Create the Bodies Here.

	roof = new Roof(width/2,height/20,width/7,20);
    
	bobObject1 = new Bob(startX-100,startY,bobDiameter);
	bobObject2 = new Bob(startX-50,startY,bobDiameter);
	bobObject3 = new Bob(startX,startY,bobDiameter);
	bobObject4 = new Bob(startX+50,startY,bobDiameter);
	bobObject5 = new Bob(startX+100,startY,bobDiameter);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50})
	}
}



