const Engine=Matter.Engine;// engine is like universe 
const World=Matter.World; // world is like earth
const Bodies=Matter.Bodies;// bodies are the objects on earth

var engine1,world1,ground,ball; //creating variables for engine,world,ground,ball
var ball2,ball3;






function setup() {
  createCanvas(800,400);
  engine1=Engine.create(); //creating engine1 (universe)
  world1=engine1.world; // creating world1 inside engine1 (earth inside universe)
  var ground_options={ // giving properties to the ground
    isStatic:true
  }
  ground=Bodies.rectangle(400,390,400,20,ground_options);//creating ground using bodies
  World.add(world1,ground); //adding the ground into world1 (creating ground on the earth)
  var ball_options={
    restitution:0.9
  }
  ball=Bodies.circle(400,100,20,ball_options);
  World.add(world1,ball);
  var ball2_options={
    restitution:0.6
  } 
  ball2=Bodies.circle(500,100,20,ball2_options);
  World.add(world1,ball2);
  var ball3_options={
    restitution:1.5
  }
  ball3=Bodies.circle(300,100,20,ball3_options);
  World.add(world1,ball3);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine1); // starting engine1 (universe)
  rectMode(CENTER); // changing x,y to center point from top left point9
  rect(ground.position.x,ground.position.y,400,20);//drawing the ground
  circle(ball.position.x,ball.position.y,20);
  circle(ball2.position.x,ball2.position.y,20);
  circle(ball3.position.x,ball3.position.y,20);
  drawSprites();


}