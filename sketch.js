const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var ground


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  //createSprite(400, 200, 50, 50);
  Ball_options={
    restitution:1,
  }
Ball=Bodies.circle(200,100,20,Ball_options)
  World.add(world,Ball)
  var ground_options={
    isStatic:true,
  }
  ground=Bodies.rectangle(350,390,400,20,ground_options)
  World.add(world,ground)

}

function draw() {
  background(0,200,0);
  Engine.update(engine)  
  // drawSprites();
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,20)
 ellipseMode(RADIUS)
 ellipse(Ball.position.x,Ball.position.y,20,20)
}