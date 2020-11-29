var santa,banta;

function setup() {
  createCanvas(800,400);
  santa=createSprite(600, 300, 50, 50);
  banta=createSprite(400,300,100,100);
  name1=createSprite(100,100,50,50);
  place=createSprite(300,100,50,50);
  animal=createSprite(500,100,50,50);
  thing=createSprite(700,100,50,50);

  santa.shapeColor="orange";
  banta.shapeColor="green";
  name1.shapeColor="blue";
  place.shapeColor="blue";
  animal.shapeColor="blue";
  thing.shapeColor="blue";

  santa.debug=true;
  banta.debug=true;
  name1.debug=true;
  place.debug=true;
  animal.debug=true;
  thing.debug=true;}

function draw() {
  background("black"); 
  
  santa.y=mouseY;
  santa.x=mouseX;

  if(touch(santa,animal)){
    santa.shapeColor="red";
    animal.shapeColor="red";
  }
  else{ 
    santa.shapeColor="orange";
    animal.shapeColor="blue";
  }

  drawSprites();

  /*fill("white");
  textSize(30);
  text("santa x "+santa.x,350,50)*/}


  function touch(o1,o2){
       
    if(o1.x-o2.x<o1.width/2+o2.width/2 && o2.x-o1.x<o1.width/2+o2.width/2 && 
      o1.y-o2.y<o1.height/2+o2.height/2 && o2.y-o1.y<o1.height/2+o2.height/2){
      return true;}
    else {
      return false;}

  }



