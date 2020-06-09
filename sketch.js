var  paperSprite;
var dustbinSprite;
var dustbin2Sprite;
var dustbin3Sprite;
var groundSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
    
}

function setup() {
	createCanvas(700,800);
	

	engine = Engine.create();
	world = engine.world;
    paper = new Paper(150,200,40);
    dustbin = new Dustbin(160,660,100,20);
    dustbin2 = new Dustbin(100,600,20,100);
    dustbin3 = new Dustbin(220,600,20,100)
    dustbin.debug=true
    



	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin.display()
  dustbin2.display()
  dustbin3.display();
  text(mouseX+";"+mouseY,600,30)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.setStatic(paperbody,false);
    
  }
}



