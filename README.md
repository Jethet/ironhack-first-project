# ironhack-first-project
# GET YOUR COFFEE

## Description

GET YOUR COFFEE is designed for the true coffee lover who will not accept sub-standard quality like McBrownWater or Starbrew Diluted Stuff. Lemonade and alcohol, or something like tea, are out of the question. The true coffee lover only wants the best: top-quality five-star golden standard coffee!

GYC challenges the player to carefully watch the line-up of beverages and immediately click on the Best Coffee as soon as the this coffee cup enters the view. If clicked correctly, the player earns a cup of coffee. If wrong, the number of coffee cups earned is reduced by one. 

If the player gets down to a count of zero coffee cups, the game is over.

There is a maximum time of one minute, and after that the game is over.

CANVAS
The line-up of beverages are moving from right to left at a certain speed. The type of beverage is random.

There is a counter to keep track of the number of coffee cups scored. There is an option to play the game again.
(Optional: 
  speed-o-meter
  save player's results in an overview
  increase speed to make game more challenging)



Data structure
main.js


buildSplashScreen(){
}

buildGameScreen(){
}

buildGameOverScreen(){
}

game.js

Game(){
  this.canvas;
}

Game.prototype.startLoop(){
}

Game.prototype.checkCollisions{
}

Game.prototype.CheckIfFullLine{
}

Game.prototype.updateLevel{
}

Game.prototype.checkOverFlow = function(){
}

Game.prototype.displayNextSquare{
}

Game.prototype.clearCanvas = function(){
}

Game.prototype.updateCanvas = function(){
}

Game.prototype.drawCanvas = function(){ 
}

Game.prototype.setGameOver = function(){
}

movingSquare.js

MovingSquare(){
  this.camvas;
  this.x;
  this.y;
  this.size;
  this.direction;
  this.speed; 
  this.color;
}

MovingSquare.prototype.draw{
}

Character.prototype.setDirection(){
}

Character.prototype.goDown(){
}

Character.prototype.rush(){
}

staticSquare.js

StaticSquare(){
  this.camvas;
  this.x;
  this.y;
  this.size;
  this.color;
}

StaticSquare.prototype.draw{
}

States y States Transitions

- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 

Task

    Main - buildDom
    Main - buildSplashScreen
    Main - addEventListener
    Main - buildGameScreen
    Main - buildGameOverScreen
    Game - buildCanvas
    Game - clearCanvas
    Game - updateCanvas
    Game - drawCanvas
    Game - setGameOver
    Game - collision
    Game - addEventListener
    movingSquare - create
    movingSquare - goDown
    staticSquare - store
    staticSquare - remove if full line
    Game - checkOverFlow
    movingSquare - setDirection
    movingSquare - Rush
    movingSquare - SelectRandomSize

