var box;

function setup() {
  createCanvas(800,900);
  box = createSprite(600, 400, 40, 40); 
}

function draw() 
{
  box.shapeColor = "green";
  background(30);
  drawSprites();

  if (keyDown("RIGHT_ARROW")) {
    box.x += 3
  }
  
   if (keyDown("LEFT_ARROW")) {
    box.x -= 3
  }
  
  if (keyDown("UP_ARROW")) {
    box.y -= 2
  }
  
   if (keyDown("DOWN_ARROW")) {
    box.y += 2
  }
}




