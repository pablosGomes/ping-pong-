var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ea7624df-5b22-4bce-af5b-f14b2d89539b","b2da586a-9471-4754-9416-fef13d501d04","d8ab9688-a822-40e6-bcce-5706b870f84c"],"propsByKey":{"ea7624df-5b22-4bce-af5b-f14b2d89539b":{"name":"ball","sourceUrl":null,"frameSize":{"x":393,"y":394},"frameCount":4,"looping":true,"frameDelay":12,"version":"dx2I1CtdSILu3bRgvS3OfUddvA1vwG8K","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":786,"y":788},"rootRelativePath":"assets/ea7624df-5b22-4bce-af5b-f14b2d89539b.png"},"b2da586a-9471-4754-9416-fef13d501d04":{"name":"escudo","sourceUrl":null,"frameSize":{"x":232,"y":287},"frameCount":1,"looping":true,"frameDelay":12,"version":"XMWOqnTI1c3XXQ3nFSdpsL1pJf2VjDmL","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":287},"rootRelativePath":"assets/b2da586a-9471-4754-9416-fef13d501d04.png"},"d8ab9688-a822-40e6-bcce-5706b870f84c":{"name":"cajado","sourceUrl":null,"frameSize":{"x":258,"y":326},"frameCount":1,"looping":true,"frameDelay":12,"version":"kIpg6lYZaa4LHnU2cvkmatgul2nQWHvd","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":326},"rootRelativePath":"assets/d8ab9688-a822-40e6-bcce-5706b870f84c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Variaveis
var playerPaddle = createSprite(370, 200, 10,70);
playerPaddle.setAnimation("cajado");
var computerPaddle = createSprite(36, 200, 10,70);
computerPaddle.setAnimation("escudo");
var ball = createSprite(200, 200);
ball.setAnimation("ball");
ball.scale = 0.1;
computerPaddle.scale = 0.3;
playerPaddle.scale = 0.3;



//
playerPaddle.shapeColor="Blue";
computerPaddle.shapeColor="Red";

createEdgeSprites();

//Controle da bolinha - velocidade, movimento computerpaddle,teclas de start e movimento
function draw() {
 
 
 
 if (ball.bounceOff(playerPaddle)) {
 playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
  var pontos = pontos +1;  
   if (pontos>3)
 {  background("red");}
 
 }
 if ( ball.bounceOff(computerPaddle)) {
playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
      
 }

 
 
 
 
 
  background("white");
  
   
 if (ball.bounceOff(playerPaddle)) {
  var pontos = pontos +1;  
   if (pontos>3)
 {  background("red");}
 
 }
  
  
  if (keyDown("up")){
    playerPaddle.y=playerPaddle.y-10;
  }
  if (keyDown("down")){
    playerPaddle.y=playerPaddle.y+10;
  }
  if (keyDown ("space")){
    ball.velocityX = 2;
    ball.velocityY = 4; 
  }
  drawnet();
  computerPaddle.y=ball.y;
  ball.bounceOff(edges);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  drawSprites();
}
  
  
  
function drawnet(){
  for(var num=0; num<=400;num=num+20){
    line(200,num,200,num+10);
  } 
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
