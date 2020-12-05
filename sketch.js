var fixedRect, movingRect;

var object1, object2, object3,object4;
var aditya;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  object1 = createSprite(100,200,50,50)
  object2 = createSprite(200,200,50,50)
  object3 = createSprite(300,200,50,50)
  object4 = createSprite(400,200,50,50)
  object1.shapeColor="green";
  object2.shapeColor="green";
  object3.shapeColor="green";
  object4.shapeColor="green";

  aditya = createSprite(700,200,100,50);
  aditya.shapeColor= "orange"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
 

    if (isTouching(movingRect,aditya))  {
      movingRect.shapeColor = "red";
      aditya.shapeColor = "red";

    }
    else {
      movingRect.shapeColor = "green";
      aditya.shapeColor = "orange";

    }
  drawSprites();
}

