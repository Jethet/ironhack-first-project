'use strict'

function Game(){
    this.canvas = null;
    this.ctx = null;

    this.time = 0;
    this.loopCount = 0;
    this.score = 5;
    this.beverage = [];
    this.bialetti = 200;

    this.gameScreen = null;
    this.gameIsOver = false;
  };
  
  Game.prototype.start = function(){
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.timeElement = this.gameScreen.querySelector(".time .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.maxWidth = "800px";
    this.canvas.style.maxHeight = "600px";

    // this.bialetti = image, coordinates

    this.handleKeySpace = function(event) {
      if (event.keyCode === 32) {
        this.checkCoffeeClicked();
      }
    }; 

    window.addEventListener("keydown", this.handleKeySpace.bind(this));

    this.startLoop();
  };

  Game.prototype.startLoop = function(){
    var loop = function(){
      console.log("Game looping");
      
    // CLEAR CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 1. UPDATE THE STATE (game, beverages)
    

    // a. Create beverages randomly  
    if (Math.random() > 0.99) {
      var pushBeverage = this.beverage.x += 3;
      if (pushBeverage > 2 && pushBeverage < 5){
        this.beverage.push(new Beverage(this.canvas, false, "red", 10));
      } else if (Math.random() > 0.995){
        this.beverage.push(new Beverage(this.canvas, true, "brown", 10));
      };
    }
      this.beverage = this.beverage.filter(function(oneBeverage){
        oneBeverage.moveForward();
        return oneBeverage.isInsideScreen();
      });

    // b. Check if the beverages are off screen (check all of the beverages)
      this.checkScreenCollision();

    // c. Move beverages
     // this.moveForward();

    // UDATE CANVAS
    //  a. draw beverages
      this.beverage.forEach(function(beverage){
        beverage.draw();
      });

      this.ctx.fillStyle = "black";
      this.ctx.fillRect(this.bialetti, this.canvas.height -20, 200, 100);
    // d. Check if counter down to zero:
       this.checkIfGameOver();  
       this.checkTime();
       this.printTime();
    // Terminate loop if game is over
      if(!this.gameIsOver){
        window.requestAnimationFrame(loop);
        }
        this.updateScore();
      }.bind(this);  // The 'window' object invokes the loop, that is why 'this' is used
                     // to bind the function: to point to 'game' object
                     // Syntax: var loop = function(){}.bind(this);

      this.scoreElement.innerHTML = this.score;

      window.requestAnimationFrame(loop);
    };
  
  Game.prototype.checkScreenCollision = function(){
    this.beverage.forEach(function(beverage){
        if (this.beverage.isInsideScreen > this.canvas.width){
        this.count--;
      }
    }, this);
  };

  Game.prototype.checkCoffeeClicked = function(){
      this.beverage = this.beverage.filter(function(oneBeverage){
        return oneBeverage.x > this.bialetti - oneBeverage.width || oneBeverage.x < this.bialetti + oneBeverage.width;
      }, this);

      if(this.beverage.length > 0) {
        if (this.beverage[0].isCoffee === true) {
          this.score ++;
        } else {
            this.score--;
        };
      };
      console.log(this.score);  
  };

  Game.prototype.updateScore = function(){
    this.scoreElement.innerHTML = this.score;
  };

  Game.prototype.checkIfGameOver = function(){
    if (this.score <= 0){
      this.gameOver();
    };
  };

  Game.prototype.passGameOverCallback = function(gameOver){  // I do not understand this
    this.onGameOverCallback = gameOver;
  };

  Game.prototype.gameOver = function(){  // I do not understand the callback
    this.gameIsOver = true;
    this.onGameOverCallback();
  };

  Game.prototype.removeGameScreen = function(){
    this.gameScreen.remove();
  };
  
  Game.prototype.checkTime = function(){
    if (this.time === 60){
      this.gameOver();
    };
  };

  Game.prototype.printTime = function(){
    this.loopCount++;
    if (this.loopCount % 60 === 0) {
      this.time = Math.floor(this.loopCount / 60);
      this.timeElement.innerHTML = this.time;
    };
  };
  
  
  
  