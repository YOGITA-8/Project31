const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;



function setup() {
   
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //creating ground 
  ground = new Ground(width/2,height,width,20);

  //creating 8 divisions
   for (var d = 0; d <=width; d = d + 80) {
     divisions.push(new Divisions(d, height-divisionHeight/2, 10, divisionHeight));
   }

   //1st row of plinkos
    for (var p = 40; p <=width; p=p+50) {
    
       plinkos.push(new Plinko(p,75));
    }

    //2nd row of plinkos
    for (var p = 15; p <=width-10; p=p+50) {
    
       plinkos.push(new Plinko(p,175));
    }

    //3rd row of plinkos 
     for (var p = 40; p <=width; p=p+50) {
    
       plinkos.push(new Plinko(p,275));
    }

    //4th row of plinkos 
     for (var p = 15; p <=width-10; p=p+50) {
    
       plinkos.push(new Plinko(p,375));
    }
 
}



function draw() {

   Engine.update(engine);

   background(0);

   //display ground 
   ground.display();
   
    //display divisions
    for (var m = 0; m < divisions.length; m++) {

      divisions[m].display();
   }

   //display plinkos
   for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
   }

   //particles wiil fall after framecount60%
   if(frameCount%60===0){
      particles.push(new Particles(random(width/2-10, width/2+10),10,10, 10,10));
   }
   
   //display particles
   for (var j = 0; j < particles.length; j++) {
      
      particles[j].display();
   }

   drawSprites();
  
}