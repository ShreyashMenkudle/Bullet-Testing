var bullet,speed,weight;
var wall,thickness;
var damage;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  wall=createSprite(1200, 200,random(22,83), height/2);

  speed=random(223,321);
  weight=random(30,52); 
  thickness=random(22,83);
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  bullet = createSprite(50,200,50,10);
  bullet.velocityX=speed;
}

function draw() {
  background("white");
  
  if (hasCollided(bullet,wall)) {

    bullet.velocityX=0;
    

    if (damage>10) {

      wall.shapeColor="red";
    }

    if (damage<10) {

      wall.shapeColor="green";
    }



  }


  drawSprites();
}


function hasCollided(bullet,wall) {

  bulletRightEdge=bullet.x + bullet.width;
  wallRightEdge=wall.x + wall.width;
  wallLeftEdge=wall.x;
 
  if (bulletRightEdge >=wallRightEdge) {

    return true;
  }

     return false;
   }







