function Game(){
    this.canvas = null;
    this.ctx = null;
    this.time = 0;
    this.score = 0;
    this.beverage = [];
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
  };

  
  Game.prototype.startLoop = function(){
    this.clearCanvas()
    this.updateCanvas()
    this.updateGameStatus()
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
  