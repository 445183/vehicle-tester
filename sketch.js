var mercedes,ferari,bugati;
var wall1,wall2,w1,w2,w3;
var weight,d1,d2,d3;

function setup(){
  createCanvas(1000,600);
  
  wall1=createSprite(500,200,1600,20);
  wall2=createSprite(500,400,1600,20);

  mercedes=createSprite(100,100,30,30);
  ferari=createSprite(100,300,30,30);
  bugati=createSprite(100,500,30,30);

  w1=createSprite(900,100,15,175);
  w2=createSprite(900,300,15,175);
  w3=createSprite(900,500,15,175);
}

function draw(){
  background("black");
  drawSprites();

  mercedes.collide(w1);
  ferari.collide(w2);
  bugati.collide(w3);
  
  d1=mercedes.velocityX*mercedes.velocityX*weight*0.5/22500;
  d2=ferari.velocityX*ferari.velocityX*weight*0.5/22500;
  d3=bugati.velocityX*bugati.velocityX*weight*0.5/22500;

  if(keyDown("space")){
    mercedes.velocityX=random(55,90);
    ferari.velocityX=random(55,90);
    bugati.velocityX=random(55,90);
    weight=random(400,1500);
  }
  if(d1<80 ){
    mercedes.shapeColor="green";
  }
  if(d1<180 && d1>80){
    mercedes.shapeColor="yellow";
  }
  if(d1>180 ){
    mercedes.shapeColor="red";
  } 

  if(d2<80 ){
    ferari.shapeColor="green";
  }
  if(d2<180 && d2>80){
    ferari.shapeColor="yellow";
  }
  if(d2>180 ){
    ferari.shapeColor="red";
  }  

  if(d3<80 ){
    bugati.shapeColor="green";
  }
  if(d3<180 && d3>80){
    bugati.shapeColor="yellow";
  }
  if(d3>180 ){
    bugati.shapeColor="red";
  }


}