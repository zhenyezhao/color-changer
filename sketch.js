
function setup() {
  
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
  background("red")
}


function draw() 
{
  if(keyDown("RIGHT_ARROW")){
    background("green")

  }
  if(keyDown("LEFT_ARROW")){
    background("blue")
    
  }
  if(keyDown("DOWN_ARROW")){
    background("red")

  }
  if(keyDown("UP_ARROW")){
    background("yellow")
  }
  
drawSprites();
}




