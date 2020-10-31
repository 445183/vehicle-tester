var mercedes,ferari,bugati;
var wall1,wall2,w1,w2,w3;
var weight,d1,d2,d3,s1,s2,s3;

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

  s1=mercedes.velocityX;
  s2=ferari.velocityX;
  s3=bugati.velocityX;
  
  mercedes.collide(w1);
  ferari.collide(w2);
  bugati.collide(w3);
  
  d1=s1*s1*weight*0.5/22500;
  d2=s2*s2*weight*0.5/22500;
  d3=s3*s3*weight*0.5/22500;

  if(keyDown("space")){
    mercedes.velocityX=random(55,90);
    ferari.velocityX=random(55,90);
    bugati.velocityX=random(55,90);
    weight=random(400,1500);
  }
  if(w1.x-mercedes.x<=mercedes.width/2+w1.width/2 ){
      if(d1<80 ){
        mercedes.shapeColor="green";
      }
      if(d1<180 && d1>80){
        mercedes.shapeColor="yellow";
      }
      if(d1>180 ){
        mercedes.shapeColor="red";
      } 
  }
  if(w2.x-ferari.x<=ferari.width/2+w2.width/2){
      if(d2<80 ){
        ferari.shapeColor="green";
      }
      if(d2<180 && d2>80){
        ferari.shapeColor="yellow";
      }
      if(d2>180 ){
        ferari.shapeColor="red";
      }  
  }
  if(w3.x-bugati.x<=bugati.width/2+w3.width/2){
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
}
