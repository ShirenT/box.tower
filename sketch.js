const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,height-55);
    box2 = new Box(920,height-55);
    box3 = new Box(800,height-125);
    box4 = new Box(920,height-125);
    box5 = new Box(860,height-190);
    ground = new Ground(600,height,1200,60)
    pig1 = new Pig(860,height-50);
    pig2 = new Pig(860,height-120);
    bird = new Bird(200,500);
    log1 = new Log(860,height-65,170,PI/2);
    log2 = new Log(860,height-140,170,PI/2);
    log3 = new Log(800,height-210,100,PI/7);
    log4 = new Log(920,height-210,100,-PI/7);
    
    

    // radians PI
    // PI = 180 degrees
    // 2PI = 360 degrees
    // PI/2 = 90 degrees
    // PI/4 = 45 degrees
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}