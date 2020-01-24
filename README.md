# ironhack-first-project
# GET YOUR COFFEE

## Description

GET YOUR COFFEE is designed for the true coffee lover who will not accept sub-standard quality like McBrownWater or Starbrew Diluted Stuff. Lemonade and alcohol, or something like tea, are out of the question. The true coffee lover only wants the best: top-quality five-star golden guaranteed high standard coffee!

GYC challenges the player to carefully watch the line-up of beverages and immediately press the space bar as soon as the Best Coffee cup moves under the coffee machine. If done correctly, the player earns a cup of coffee. If the player misses the coffee machine, the coffee cup moves off the screen and the score is reduced by one. 

If the player gets down to a count of zero coffee cups, the game is over.

There is a maximum time of one minute, and after that the game is over.


## MVP
The line-up of beverages are moving from right to left at a certain speed. The type of beverage is random.

There is a counter to keep track of the number of coffee cups scored. There is an option to play the game again.


## Backlog
Optional: 
* speed-o-meter
* save player's results in an overview
* increase speed to make game more challenging



## Data structure
#### main.js


buildSplashScreen(){  
}

buildGameScreen(){  
}

buildGameOverScreen(){  
}



#### game.js

Game(){  
  this.canvas;  
  this.ctx;  
  this.time;  
  this.score;  
  this.obstacles;  
}

Game.prototype.start = function(){  
}

Game.prototype.startLoop = function(){  
  this.clearCanvas()  
  this.updateCanvas()  
  this.updateGameStatus()  
}

Game.prototype.checkScreenCollisions = function(){  
}

Game.prototype.updateScore = function(){  
}

Game.prototype.setGameOver = function(){  
}

Game.prototype.checkCoffeeMade = function(){  
}

Game.prototype.checkTime = function(){  
}

Game.prototype.printTime = function(){  
}


#### obstacles.js

Obstacle(){  
  this.size;  
  this.direction;  
  this.speed;  
  this.x;  
  this.y;  
  }
  

Obstacle.prototype.draw = function(){  
}

Obstacle.prototype.moveForward = function(){  
}



### States and States Transitions

- splashScreen()
  - buildSplash()
  - addEventListener(startGame)
  
  
- startGame()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - buildGameOver()
  - addEventListener(startGame) 

### Tasks

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
    obstacle - create random obstacle
    obstacle - moveForward
    

### [Trello link: click here](https://trello.com/b/ihmt0jKI/ironhack-first-project-get-your-coffee)
