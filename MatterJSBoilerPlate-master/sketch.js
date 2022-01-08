const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;
var stone;
var slingshot;
var boy;

function preload(){
	boy = loadImage('../images/boy.png');
}

function setup(){
	engine = Engine.create();
	world = engine.world;
  	createCanvas(800,700);

	tree = new Tree(600,450,400,400);
	ground = new Ground(400,650,800,50);
	mango1 = new Mango(700,350,20,20);
	mango2 = new Mango(650,320,20,20);
	mango3 = new Mango(680,330,20,20);
	mango4 = new Mango(600,400,20,20);
	mango5 = new Mango(550,400,20,20);
	mango6 = new Mango(740,400,20,20);
	mango7 = new Mango(765,400,20,20);

	stone = new Stone(170,500,25,25);

	


	slingshot = new Sling(stone.body,{x:170, y:500});


}

function draw(){
	Engine.update(engine);
	background("grey");
	tree.display();
	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	image(boy,250,570,250,250);
	stone.display();
	slingshot.display();

	


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}