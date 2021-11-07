//  variables for the game
var bgImage,cat,cat1Image,cat2Image,cat3Image;
var mouse,mouse1Image,mouse2Image,mouse3Image;

function preload() {
// images for the game
    bgImage     = loadImage("images/garden.png");
    cat1Image   = loadAnimation("images/cat1.png");
    cat2Image   = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Image   = loadAnimation("images/cat4.png");
    mouse1Image = loadAnimation("images/mouse1.png");
    mouse2Image = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   
    cat = createSprite(870,680); 
    cat.addAnimation("catsleep",cat1Image);
    cat.scale = 0.2;

    mouse = createSprite(200,650);
    mouse.addAnimation("mousesleep",mouse1Image);
    mouse.scale = 0.2; 
    
    // collide functon for the same
    mouse.setCollider("rectangle",0,0,500,1200);
    cat.setCollider("rectangle",0,0,1300,1000);

    mouse.debug = false;
    cat.debug = false;
}

function draw() {
    background(bgImage);
   
     //condition here to evalute if tom and jerry collide
if (mouse.isTouching(cat)){
    
    cat.addAnimation("catCollide",cat3Image);
    cat.changeAnimation("catCollide");
    cat.velocityX = 0;

    mouse.addAnimation("mouseCollide",mouse3Image);
    mouse.changeAnimation("mouseCollide");
} 

    drawSprites();
}

// function to move the cat and mouse from left
function keyPressed(){

    if(keyCode === LEFT_ARROW){
        
    cat.velocityX = -5;
    cat.addAnimation("catWalk",cat2Image);
    cat.changeAnimation("catWalk");

    mouse.addAnimation("mouseWalk",mouse2Image);
    mouse.changeAnimation("mouseWalk");

    
  }

}
