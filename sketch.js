var rect1,rect2;
var square1,square2;

function setup() {
  createCanvas(800,400);
  rect1=createSprite(500,200,50,50);
  rect1.shapeColor="brown";
  rect2=createSprite(700,300,20,20);
  rect2.shapeColor="brown";
  square1=createSprite(250,200,40,40);
  square1.shapeColor="red";
  square2=createSprite(350,50,25,70);
  square2.shapeColor="pink";
}

function draw() {
  background("green");
  //rect2.x=mouseX;
  //rect2.y=mouseY;
  square2.x=mouseX;
  square2.y=mouseY;
  //touching the two rectangles
  if (rect1.x-rect2.x < rect1.width/2+rect2.width/2 
    && rect2.x-rect1.x < rect2.width/2+rect1.width/2 
    && rect1.y-rect2.y < rect1.height/2+rect2.height/2
    && rect2.y-rect1.y < rect2.height/2+rect1.height/2){
      rect1.shapeColor="lightblue";
      rect2.shapeColor="lightblue";
    }
    else {
      rect1.shapeColor="brown";
      rect2.shapeColor="brown";
    }

    //touching the two squares
    if (square1.x-square2.x < square1.width/2+square2.width/2
      && square2.x-square1.x < square2.width/2+square1.width/2
      && square1.y-square2.y < square1.height/2+square2.height/2
      && square2.y-square1.y < square2.height/2+square1.height/2){
        square1.shapeColor="orange";
        square2.shapeColor="orange";
      }
      else {
        square1.shapeColor="red";
        square2.shapeColor="pink";
      }
  drawSprites();
}