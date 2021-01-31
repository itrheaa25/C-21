var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(420,220,50,50);
  movingRect.shapeColor = "red";

  o1 = createSprite(300, 100, 50, 50);
  o1.shapeColor = "red";

  o2 = createSprite(500,100,50,50);
  o2.shapeColor = "red";

  var abc = "RHEAA";   //string variable
}

function draw() {
  background(27,123,12); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(isTouching(movingRect,o1)){           //these are called arguments.
    movingRect.shapeColor = "blue";
    o1.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "red";
    o1.shapeColor = "red";
  }
  drawSprites();
}



//Boolean variable : true or false 