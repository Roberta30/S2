var path,boy,leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
boyImg=loadAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-2.png");

pathImg = loadImage("path.png");
}

function setup(){
   createCanvas(400,400);
    
 // Movendo o fundo 
   path=createSprite(200,200);
   path.addImage(pathImg);
   path.velocityY = 4;
   path.scale=1.2;

 //Criando menino que corre 
 //O MENINO NAO TA APARECENDO NA NOSSA TELA, A GENTE ACHA QUE TA CERTO, SO QUE NAO VAI, OBG S2
   boy=createSprite(210,330,70,70);
   boy.addAnimation("running", boyImg);
   boy.scale= 1.;


 // Criando Boundary (Limite) esquerdo  
   leftBoundary=createSprite(20,330,50,400);
   leftBoundary.visible = false;

 //Crie Boundary direito 
   rightBoundary=createSprite(385,330,50,400);
   rightBoundary.visible = false;
}


function draw() {
 background(0);
 path.velocityY = 4;


 // Menino se movendo no eixo X com o mouse
 boy.x = World.mouseX;
 
 edges= createEdgeSprites();
 boy.collide(edges[3]);
 boy.collide(leftBoundary);
 boy.collide(rightBoundary);

 //Reiniciar o fundo
 if(path.y > 444){
   path.y = path.width;
 }



 drawSprites();

}




