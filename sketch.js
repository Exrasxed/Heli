var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var flag;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	flag =1;
	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	leftSprite = createSprite(width/2-100,610,20,100)
	leftSprite.shapeColor = "orange"
	leftBody = Bodies.rectangle(width/2-100,610,20,100,{isStatic:true});
	
	World.add(world, leftBody);

	rightSprite = createSprite(width/2+100,610,20,100)
	rightSprite.shapeColor = "orange"
	rightBody = Bodies.rectangle(width/2+100,610,20,100,{isStatic:true});
	
	World.add(world, rightBody);
	
	baseSprite = createSprite(width/2,650,200,20)
	baseSprite.shapeColor = "orange"
	baseBody = Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	
	World.add(world, baseBody);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW && flag===1) {
  
		helicopterSprite.x=helicopterSprite.x-20;    
		translation={x:-20,y:0}
		Matter.Body.translate(packageBody, translation)
		
	
  }else if (keyCode === RIGHT_ARROW && flag===1) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(packageBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
	flag = 0;
    Matter.Body.setStatic(packageBody,false);
    
  }
}



