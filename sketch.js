var monkey;
var monkeyImage;
var banana;
var jungle,bakground;
var ground;

function preload(){
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
jungle=loadImage("jungle.jpg");
stone=loadImage("stone.png");
gameOver=loadImage("gameover (2).jpg");
bananaImage = loadImage("banana.png");
}




function setup() {
  createCanvas(800,600);
  bakground=createSprite(0,0,800,600);
  bakground.addImage ("bg",jungle);
  bakground.scale=2.5;
  bakground.velocity.x=-8;
  monkey=createSprite(125,550);
  ground=createSprite(400,600,800,5);
 monkey.addAnimation("monkey",monkeyImage);
 monkey.scale=0.15;
  rockGroup = createGroup();
   bananaGroup = createGroup();
 score=0;
}

function draw() {
  background(255);
  
  monkey.collide(ground);
  if(monkey.isTouching(rockGroup)){
  bakground.velocityX=0
  rockGroup.velocityX=0
  ground.velocityX=0
    monkey.x=400;
  monkey.y=300;
    monkey.depth=4
  monkey.addImage("monkey",gameOver);
monkey.velocityY = monkey.velocityY
    monkey.scale=0.9
  }
  if(keyDown("space")&&monkey.y>523){
  monkey.velocityY=-20
  }
    spawnRocks();
    spawnBanana();
  monkey.velocityY = monkey.velocityY + 0.8;

  if (bakground.x < 0){
      bakground.x =bakground.width/2;}

if(monkey.isTouching(bananaGroup)){
bananaGroup.destroyEach();
score=score+1


}


  
  drawSprites();
text("Score:"+score, 400,100);
}
function spawnRocks(){
 if (frameCount % 150 === 0){
   var rock= createSprite(800,550);
   rock.addImage(stone);
   rock.velocityX = -7
   rock.lifetime=300
   rock.scale=0.4;
    rockGroup.add(rock);
   //rock.debug = true;
   rock.setCollider("rectangle",0,0,400,350);
 }
}
function spawnBanana(){

  if (frameCount % 250 === 0) {
    var banana = createSprite(800,100,40,10);
    banana.y = random(500,500);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -7;
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    
    //add each banana to the group
    bananaGroup.add(banana);
  }
}