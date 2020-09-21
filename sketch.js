
var player,ground
var banana
var playerimg,bananaimg,obstaclesimg
var rand
var ObstaclesGroup 
var bananaGroup 
var backGround,backgroundimg
var score 

function preload(){

  playerimg=loadAnimation("Monkey01.png","Monkey02.png","Monkey03.png","Monkey04.png","Monkey05.png","Monkey06.png","Monkey07.png","Monkey08.png","Monkey09.png","Monkey10.png")

  bananaimg=loadImage("banana.png")
  
  obstaclesimg=loadImage("stone.png")
  
  backgroundimg=loadImage("jungle.jpg")
}


function setup() {
  createCanvas(600, 400);
  backGround=createSprite(300,70,20,20)
  backGround.addImage(backgroundimg)
  player=createSprite(50,290,20,20)
  player.addAnimation("running",playerimg)
  player.scale=0.1
   
  ground=createSprite(300,370,800,20)

  ObstaclesGroup = createGroup();
  bananaGroup = createGroup();
  score=0
}

function draw() {
  background(220);
  
  player.velocityY=player.velocityY+0.8;
  if (keyDown("space")&& player.y >=330){
    player.velocityY=-13
    
  }
   if (keyDown("space")&& player.y >=324){
    player.velocityY=-13
    
  }
   if (keyDown("space")&& player.y >=318){
    player.velocityY=-13
    
  }
   if (keyDown("space")&& player.y >=306){
    player.velocityY=-13
    
  }
      if(player.isTouching(bananaGroup)){
        bananaGroup.destroyEach()
    score=score+2
  }
   
  player.collide(ground)
  
  if (ObstaclesGroup.collide(player)){
    ObstaclesGroup.destroyEach()
    player.scale=0.1
    
  }
  drawSprites();
  spawnbanana();
  spawnObstacles();
  console.log(player.y)
  ground.visible=false
  backGround.scale=1.5
  if (backGround.x==0){
  backGround.x =300
  }
  backGround.velocityX=-6

  stroke("white")
  textSize(20)
  fill("white")
  text("score:"+score,500,50)
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20:player.scale=0.14;
      break;
    case 30:player.scale=0.16;
      break;
    case 40:player.scale=0.18;
      break;
      default:break;
  }
  
}
function spawnbanana() {
 
  if (World.frameCount % 150 === 0) 
  {
    banana = createSprite(600,320,40,10);
    rand=random(225 ,320);
    banana.y =rand;
    banana.addImage(bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 134;
    bananaGroup.add(banana);
  
  }

}

function spawnObstacles() 
{
  if(World.frameCount % 200 === 0) {
    var obstacle = createSprite(610,345,10,40);
    obstacle.velocityX = -6
  
    obstacle.addImage(obstaclesimg);
    
    obstacle.scale = 0.1;
    obstacle.lifetime = 170;
    
    ObstaclesGroup.add(obstacle);
  }
}
