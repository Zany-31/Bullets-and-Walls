var bullet, wall, weight, speed;



function setup() {
  createCanvas(1600,400);
  weight = random(400,1500);
  speed = random(55,90);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}  
  }
    
  drawSprites();
  
}
function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge) {
       return true 
      }
        return false;
       }
