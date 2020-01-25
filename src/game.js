'use strict'

function Game(){
    this.canvas = null;
    this.ctx = null;

    this.time = 0;
    this.score = 0;
    this.beverage = null;

    this.gameScreen = null;
    this.gameOver = false;
  };
  
  Game.prototype.start = function(){
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.canvasContainer.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.timeElement = this.gameScreen.querySelector(".time .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    var containerWidth = this.canvasContainer.offsetWidth;
    var containerHeight = this.canvasContainer.offsetHeight;

    this.canvas.setAttribute("width", containerWidth);
    this.canvas.setAttribute("height", containerHeight);

    this.handleKeySpace = function(event) {
      if (event.key === "Space") {
        console.log("SPACE");
        this.updateScore();
      }
    }; 
    
    window.addEventListener("keyspace", this.handleKeySpace.bind(this));

    this.startLoop();
  };

  
  Game.prototype.startLoop = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateCanvas() {
        this.beverage.draw();
      };


      this.updateGameStatus(){
    };
};
  
  Game.prototype.checkScreenCollision = function(){
  };

  
  Game.prototype.updateScore = function(){
  };

  
  Game.prototype.setGameOver = function(){
  };

  
  Game.prototype.checkCoffeeClicked = function(){
  };

  
  Game.prototype.checkTime = function(){
  };

  
  Game.prototype.printTime = function(){
  };
  
  