'use strict'

function Game(){
    this.canvas = null;
    this.ctx = null;

    this.time = 0;
    this.score = 0;
    this.beverage = [];
    this.bialetti = null;

    this.gameScreen = null;
    this.gameOver = false;
  };
  
  Game.prototype.start = function(){
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.timeElement = this.gameScreen.querySelector(".time .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.containerWidth = this.canvasContainer.offsetWidth;
    this.containerHeight = this.canvasContainer.offsetHeight;
    this.canvas.setAttribute("width", this.containerWidth);
    this.canvas.setAttribute("height", this.containerHeight);

    // this.bialetti = image, coordinates

    this.handleKeySpace = function(event) {
      if (event.key === "Space") {
        console.log("SPACE");
      }
    }; 

    window.addEventListener("keyspace", this.handleKeySpace.bind(this));

    this.startLoop();
  };

  
  Game.prototype.startLoop = function(){
    var loop = function(){
      console.log("Game looping");

    // 1. UPDATE THE STATE (game, beverages)
    // a. Create beverages randomly
      this.score++;
      this.scoreElement.innerHTML = this.score;
      
      if (Math.random() > 0.98) {
          var newBeverage = new Beverage(this.canvas, 0, 5);
          this.beverage.push(newBeverage);
        };

    // b. Check if the beverages are off screen (check all of the beverages)
      this.checkScreenCollision();

    // c. Move beverages
     // this.moveForward();

    // d. Check if coffee under bialetti and clicked
      //this.checkCoffeeClicked();
      

    // CLEAR CANVAS
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // UDATE CANVAS
    //  a. draw beverages
      this.beverage.forEach(function(beverage){
        beverage.draw();
      });

    // Terminate loop if game is over
      if(!this.gameOver){
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
      if (this.beverage.y === this.bialetti.y && this.handleKeySpace === true){
        this.score++;
      }
    } return this.score;
  };


  Game.prototype.updateScore = function(){
 //   checkCoffeeClicked();
    this.scoreElement.innerHTML = this.score;
  };

  
  Game.prototype.gameOver = function(){
    this.gameOver = true;
    console.log("GAME OVER!")
  };

  Game.prototype.passGameOverCallback = function(gameOver){  // I do not understand this
    this.onGameOverCallback = gameOver;
  }

  Game.prototype.gameOver = function(){  // I do not understand the callback
    this.gameIsOver = true;

    this.onGameOverCallback();
  }

  Game.prototype.removeGameScreen = function(){
    this.gameScreen.remove();
  };
  
  
  Game.prototype.checkTime = function(){
  
  };

  
  Game.prototype.printTime = function(){
  
  }
  
  
  
  