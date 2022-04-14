var backgroundImg
var snowGroup,snow1,snow2,snow3;
var birdimg,bird;





function preload(){
 
//loading all the images

 backgroundImg = loadImage("snow1.jpg");
 
  snow1 = loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");
  snow3 = loadImage("snow7.png");

  birdimg = loadImage("bird.png")

}


function setup() {
createCanvas(800,400);
bird.createSprite(400, 200, 50, 50);
bird.addImage("cutebird",birdimg);
bird.x=mouse.x;
bird.y=mouse.y;


}

function draw() {
  background(backgroundImg);
  
  drawSprites();
}