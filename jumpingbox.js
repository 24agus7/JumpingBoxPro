var canvas;
var music;
var block1,block2,block3,block4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,600,390,50);
    block1.shapeColor="blue";
    block2=createSprite(300,600,190,50);
    block2.shapeColor="orange";
    block3=createSprite(500,600,190,50);
    block3.shapeColor="red";
    block4=createSprite(700,600,200,50);
    block4.shapeColor="green";



    //create box sprite and give velocity
    box=createSprite(750,50,50,50);
    box.shapeColor="white"
    box.velocityX=-5;
    box.velocityY=5;
;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor="blue";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(block2.isTouching(box) && box.bounceOff(block2)){
        box.shapeColor="orange";
        music.play();

    }
    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor="red";
    }
    if(block4.isTouching(box) && box.bounceOff(block4)){
        box.shapeColor="green";
    }
   
    drawSprites();
}
