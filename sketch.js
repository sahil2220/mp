var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ghost
var coincollected =0;

function preload() {
  cmotuimg=loadImage("moto card.png")
  cpatluimg=loadImage("patlu card.png")
  fbgimg=loadImage("fbg.jpg")
  chosingimg=loadImage("download-removebg-preview.png")
  patlu=loadImage("oie_7LOmhag3B60B-removebg-preview.png")
  motu=loadImage("oie_esKppndcKGWm-removebg-preview.png")
  bgimg=loadImage("bg.jpg")
  g=loadImage("g-removebg-preview.png")
  groundImg=loadImage("g-removebg-preview-1.png")
  bgmusic=loadSound("Motu Patlu - Cartoon Song.mp3")
  motusimg=loadImage("motuselect.jpg")
  playimg=loadImage("play.png")
  patlusimg=loadImage("patluselect.jpg")
  carstart=loadSound("salamisound-3482788-start-mb-100-mercedes-benz.mp3")
  jcarImg=loadImage("jcar.png")
  gsimg=loadImage("GS-removebg-preview.png")
  restartimg=loadImage("download-removebg-preview (2).png")
  jhonwgimg=loadImage("iwg.png")
  goimg=loadImage("go-removebg-preview.png")
  coinImage=loadImage("Coin-Game-Icon-PNG-Image-Jpeg-removebg-preview.png")
}

function setup(){
  
  createCanvas(800,500)
  
  patluselc=createSprite(400,250)
  patluselc.addImage(patlusimg)
  patluselc.scale=1.7
  patluselc.visible=false
  
  motuselc=createSprite(400,250)
  motuselc.addImage(motusimg)
  motuselc.scale=1.7
  motuselc.visible=false
  
   play=createSprite(490,450)
  play.addImage(playimg)
  play.visible=false
  
  bg=createSprite(450,250)
  bg.addImage(bgimg)
  bg.scale=5.5
  bg.velocityX=-2
  bg.visible=false
  
  ground=createSprite(450,150)
  ground.addImage(groundImg)
  ground.scale=2.5
  ground.velocityX=-2
  ground.visible=false
  
  inground=createSprite(250,500,800,10)
  inground.visible=false
  
  main=createSprite(100,400)
  main.visible=false
  
  d=createSprite(250,500,20,10)
  d.visible=false
  
  firstbg=createSprite(400,250)
  firstbg.addImage(fbgimg)
  firstbg.scale=1.5
  
  cground1=createSprite(300,380)
  cground1.addImage(g)
  cground1.scale=0.3
  
  cground2=createSprite(600,385)
  cground2.addImage(g)
  cground2.scale=0.3
  
  cmotu=createSprite(300,280)
  cmotu.addImage(cmotuimg)
  cmotu.scale=0.6;
 
  cpatlu=createSprite(600,280)
  cpatlu.addImage(cpatluimg)
  cpatlu.scale=0.5;
  
  choose=createSprite(380,380)
  choose.addImage(chosingimg)
  choose.scale=1.5;

  leftwall=createSprite(10,250,10,500)
  leftwall.visible=false
  rightwall=createSprite(790,250,10,500)
  rightwall.visible=false
  bgmusic.play();
 
 v=createSprite(600,450,10,500)
 v.addImage(gsimg)
 v.scale=2
 v.visible=false
  
  restart=createSprite(450,250,10,500)
  restart.addImage(restartimg)
  restart.scale=0.2
  restart.x=1000
  
  
  gameover=createSprite(450,200,10,500)
  gameover.addImage(goimg)
  gameover.scale=1
  gameover.x=1000
  
  
   gwj=createSprite(250,430,20,10)
   gwj.addImage(jhonwgimg)
   gwj.visible=false
  
  
  
 coincollected=0
  
  johncarGroup = new Group();
}

function draw(){
  background(245)
drawSprites();
  
   main.collide(inground)
   main.collide(leftwall)
   main.collide(rightwall)
  d.x=main.x;
  d.y=main.y
  
  
  
  if(d.isTouching(johncarGroup)){
    bg.velocityX=0
    ground.velocityX=0
    main.x=1000
    gwj.visible=true
    gwj.scale=0.5
    gwj.x=400
    restart.x=450;
    gameover.x=450
    
   
  }
  
   if(mousePressedOver(restart)) {
       bg.velocityX=-2
    ground.velocityX=-2
    main.x=100
    main.y=400
    gwj.visible=false
    gwj.x=1000
    gwj.scale=0.5
    restart.x=1000;
    gameover.x=1000
     
   }
  
  
  
   if (gameState===PLAY){
     
    spawnjohncar();
     
     
    if(keyDown("space") && main.y >= 400) {
      main.velocityY = -14;
    }
     if(keyDown("left") ) {
      main.x = main.x-5;
    }
     
      if(keyDown("right") ) {
      main.x= main.x+5;
    }
     
  
     
     
    main.velocityY = main.velocityY + 0.7
     
      if(mousePressedOver(play)) {
        bg.visible=true
        main.visible=true
        ground.visible=true
        motuselc.destroy()
        play.destroy()
        carstart.play()
        v.visible=true
        v.lifetime=40
      }
     
    if(mousePressedOver(cmotu)) {
      firstbg.destroy()
      cmotu.y=1000
      cpatlu.y=1000
      choose.destroy()
      main.y=420
      main.scale=0.8
      main.addImage(motu)
      cground1.destroy();
      cground2.destroy();
      bgmusic.stop();
      motuselc.visible=true
      play.visible=true
    }
        if(mousePressedOver(cpatlu)) {
      firstbg.destroy()
      cmotu.y=1000
      cpatlu.y=1000
      choose.destroy()
      main.y=420
      main.addImage(patlu)
      main.scale=0.3
      cground1.destroy();
      cground2.destroy();
      bgmusic.stop();
      patluselc.visible=true
      play.visible=true
    }
     
   
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
     
   }
  
  
  if (gameState === END) {}
  
  
  
  
}
function spawnjohncar() {
  if(frameCount % 500 === 0) {
    var jcar = createSprite(800,430,10,40);
    jcar.x = random(800,1011)
    jcar.velocityX = -6
    jcar.scale=0.4
    jcar.addImage(jcarImg);
    johncarGroup.add(jcar);
  }}
    