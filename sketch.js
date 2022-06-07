var fundo
var stitche
var imagemdostitche
var lilo
var coLILO
var bandidomau
var bandido1
var bandidobom
var bandido2
var tirinhos
var trombadinha

function preload(){
fundo=loadImage("fundo.png")
imagemdostitche=loadAnimation("s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png")
coLILO=loadAnimation("l1.png", "l2.png", "l3.png", "l4.png", "l5.png", "l6.png", "l7.png")
bandidomau=loadAnimation("b1.png", "b2.png", "b3.png")
bandidobom=loadAnimation("b4.png", "b5.png", "b6.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  stitche=createSprite(50, 500)
  stitche.addAnimation("imagemdostitche", imagemdostitche)
  lilo=createSprite(1380, 500)
  lilo.addAnimation("coLILO", coLILO)
  lilo.scale=1.5
  tirinhos = new Group()
  trombadinhas = new Group()
}

function bandido(){
if(frameCount%50 == 0){
  bandido1=createSprite(1300, 500)
  bandido1.addAnimation("bandidomau", bandidomau)
  bandido1.scale=2.5
  bandido2=createSprite(1200, 500)
  bandido2.addAnimation("bandidobom", bandidobom)
  bandido2.scale=2.5
  bandido1.velocityX = -5
  bandido2.velocityX = -5
  trombadinhas.add(bandido1)
  trombadinhas.add(bandido2)
  bandido1.lifetime = 500
  bandido2.lifetime = 500
}
}

function policia(){
 tirinhos.overlap(trombadinhas, function(colector, colected){
  colected.remove()
 })

}

function reizinho(){
if(trombadinhas.isTouching(stitche)){
  textSize(50)
  text("game over", width/2-100, height/2)
}
}

function liloandstitche(){
if(stitche.isTouching(lilo)){
  textSize(50)
  text("you won the game", width/2-200, height/2)
}
}

function draw() {
 if(keyDown("w")){
 stitche.y -= 10
 }
 
if(keyDown("s")){
  stitche.y += 10
}

if(keyDown("d")){
stitche.x += 10
}

if(keyDown("a")){
  stitche.x -= 10
}

if(keyDown("e")){
  if(frameCount%10 == 0){
  var shoot = createSprite(stitche.x, stitche.y, 10, 5)
  shoot.velocityX = 10
  tirinhos.add(shoot)
  shoot.lifetime = 50
}
}
    background(fundo);  
  
  bandido()
  policia()
  reizinho()
  liloandstitche()
  drawSprites();
}
