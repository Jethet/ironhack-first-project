'use strict'

function Game(){
    this.canvas = null;
    this.ctx = null;

    this.time = 0;
    this.score = 0;
    this.beverage = [];

    this.gameScreen = null;
    this.gameOver = false;
  };
  
  Game.prototype.start = function(){
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.gameScreen.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.timeElement = this.gameScreen.querySelector(".time .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

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
   
    var loop = function(){
      console.log("Game looping");

      if(!this.gameOver){
        window.requestAnimationFrame(loop);
        }
      }.bind(this);

      // this.time++;
      // // this.time.element.innerHTML = this.time;
      // this.score++;
      // this.scoreElement.innerHTML = this.score;

      // if (Math.random() > 0.98) {
      //   var newBeverage = new Beverage(this.canvas, 0, 5);
      //   this.beverage.push(newBeverage);
      // };

      // this.checkScreenCollision();

      // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
      // this.beverage.forEach(function(beverage){
      //   beverage.draw();
      // });

      window.requestAnimationFrame(loop);
  };
  
  Game.prototype.checkScreenCollision = function(){
    this.beverage.forEach(function(beverage){
      if (!beverage.isInsideScreen){
        this.score--;
      }
      if (this.score <= 0){
        this.gameOver();
      }
    }, this);
  };
  

  Game.prototype.checkCoffeeClicked = function(){
    if (this.beverage.isCoffee === true){
      this.score++;
    }
  };


  Game.prototype.updateScore = function(){
    this.updateGameStatus();
  };

  
  Game.prototype.gameOver = function(){
    this.gameOver = true;
    console.log("GAME OVER!")
  };


  Game.prototype.removeGameScreen = function(){

  };
  
  
  Game.prototype.checkTime = function(){
  
  };

  
  Game.prototype.printTime = function(){
  
  }
  
  
  
  