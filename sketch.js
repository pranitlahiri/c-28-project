var paper,ground;
var basketBottom,basketLeft,basketRight;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

function preload(){}
 
function setup() {
	createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground (width/2,height-35,width,20);
  ball = new Ball (width/4,height-60,50)
  basketLeft = new Basket (width-250,height-190,20,300)
  basketRight = new Basket (width-0,height-190,20,300)
  launcher = new Launcher (300,500)
  
}


function draw() {
  background("white");
  ground.display();
  basketLeft.display();
  basketRight.display();
  ball.display();
  launcher.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:335,y:-585});
  }
}



