var movingRect, fixedRect;

function setup() {

  createCanvas(1200,800);

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  
  fixedRect= createSprite(200,300,50,80);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(100,100, 50,50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityX=2;

   gameObject2 = createSprite(200,100, 50,50);
  gameObject2.shapeColor = "green";
   gameObject2.velocityY=3;
   gameObject3 = createSprite(300,100, 50,50);
  gameObject3.shapeColor = "green";

   gameObject4 = createSprite(400,100, 50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {

  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject2)){

   gameObject2.shapeColor= "blue";
   movingRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor= "green";
   gameObject2.shapeColor = "green";
  }
  bounceOff(fixedRect,gameObject2);
  console.log(movingRect.y- fixedRect.y);
  
  drawSprites();
  
}

