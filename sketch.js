const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,box1,box2
var ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var options = {
    isStatic:true
  }
ground = Bodies.rectangle(200,365,400,35,options)
World.add(world,ground)
console.log(ground)
box1 = new box(155,155,50,70);
box2 = new box(145,245,50,70)
}

function draw() {
  background(255,25,55);
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,35)
  box1.display();
  box2.display();
}