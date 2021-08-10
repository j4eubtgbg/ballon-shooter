var bow , arrow,  background;
var bowImage, arrowImage, GI, RI, PI ,BI, backgroundImage;
var s = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  RI = loadImage("red_balloon0.png");
  BI = loadImage("blue_balloon0.png");
  PI = loadImage("pink_balloon0.png");
  GI = loadImage("green_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 //background(0);
 

  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(3,4));
  
  if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
       redBalloon();
       }else if(select_balloon ==2){
          blueBalloon();
            }else if(select_balloon ==3){
              pinkBalloon();
               }else if(select_balloon == 4){
                     greenBalloon();
                     }
  }
  
  drawSprites();
  text('SCORE='+ s,270,30);
 
  //s = s+ Math.round(frameCount/100);
  s++
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(RI);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(BI);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  //write code for spwaning green balloons
  var greene = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greene.addImage(GI);
  greene.velocityX = 3;
  greene.lifetime = 150;
  greene.scale = 0.1;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink1.addImage(PI);
  pink1.velocityX = 3;
  pink1.lifetime = 150;
  //pink1.scale = 1;
}
