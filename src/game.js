'use strict'

class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;

    this.time = 0;
    this.loopCount = 0;
    this.score = 5;
    this.speed = 25;
    this.beverage = [];
    this.bialetti = 200;

    this.gameScreen = null;
    this.gameIsOver = false;

    this.backImg = new Image();
    this.backImg.src = 'images/border-4515401_1280.png';
    this.bialettiImage = new Image();
    this.bialettiImage.src = 'images/coffee-percolator.png';

    this.slurpSound = new Audio('audio/slurpSound.wav');
    this.shortBurp = new Audio('audio/shortBurp.wav');
    this.pourCoffee = new Audio('audio/pourCoffee.wav');
  };

    start() {
    // Get the canvas element, create ctx, save canvas and ctx in the game object
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.timeElement = this.gameScreen.querySelector(".time .value");
    this.scoreElement = this.gameScreen.querySelector(".score .value");

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.handleKeySpace = (event) => {
      if (event.keyCode === 32) {
        this.checkCoffeeClicked();
        this.shortBurp.play();
        this.shortBurp.currentTime = 0;
      }
    }; 
    window.addEventListener("keydown", this.handleKeySpace); 
    this.startLoop();
  };

  startLoop() {
    let loop = () => {
      console.log("Game looping");
      
    // CLEAR CANVAS
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // UPDATE THE STATE create background
    this.ctx.drawImage(this.backImg, 0, 0, this.canvas.width, this.canvas.height);
   
    // Create beverages randomly  
    if (Math.random() > 0.92) {
      this.createBeverage(true, "images/coffee-cup.png");
      this.pourCoffee.play();
      this.pourCoffee.currentTime = 0;
    } 
    else if (Math.random() > 0.97){
    this.createBeverage(false, "images/beer-jar.png");
    }
    else if (Math.random() > 0.97){
      this.createBeverage(false, "images/smoothie.png");
    }
    else if (Math.random() > 0.95){
      this.createBeverage(false, "images/caribbean.png");
    }
    else if (Math.random() > 0.96){
      this.createBeverage(false, "images/juice.png");
    }
    else if (Math.random() > 0.96){
      this.createBeverage(false, "images/beer.png");
    }
    else if (Math.random() > 0.95){
      this.createBeverage(false, "images/lemonade.png");
    }
    else if (Math.random() > 0.97){
      this.createBeverage(false, "images/wine.png");
    }
    else if (Math.random() > 0.94){
      this.createBeverage(false, "images/soft-drink.png");
    }
    else if (Math.random() > 0.97){
      this.createBeverage(false, "images/cocktail.png");
    }
    else if (Math.random() > 0.96){
      this.createBeverage(false, "images/bottle.png");
    }

//Add less than zero figure for creation time
    this.beverage = this.beverage.filter = (oneBeverage) => {
      oneBeverage.moveForward();
      return oneBeverage.isInsideScreen();
    };

    // Check if the beverages are off screen (check all of the beverages)
      this.checkScreenCollision();

    // UDATE CANVAS - add sound, draw beverages
      this.slurpSound.play();

      this.beverage.forEach = (beverage) => {
        beverage.draw();
      };

      this.ctx.drawImage(this.bialettiImage, this.bialetti, 40, 272, 300);

    // Check if counter down to zero:
       this.checkIfGameOver();  
       this.checkTime();
       this.printTime();
    // Terminate loop if game is over
      if(!this.gameIsOver){
        window.requestAnimationFrame(loop);
        }
        this.updateScore();
      };  // The 'window' object invokes the loop, that is why 'this' is used
                     // to bind the function: to point to 'game' object
                     // Syntax: var loop = function(){}.bind(this);

      this.scoreElement.innerHTML = this.score;
      window.requestAnimationFrame(loop);
    };

  createBeverage(isCoffee, imagesrc) {
    let pushDrink = true;
    let newBeverage = new Beverage(this.canvas, isCoffee, imagesrc, this.speed);
      this.beverage.forEach = (drink) => {
        if (drink.y === newBeverage.y && drink.x < newBeverage.x + newBeverage.width + 50){
          pushDrink = false;
        }
      };
      if (pushDrink === true){
          this.beverage.push(newBeverage);
      }
  };
  
  checkScreenCollision() {
    this.beverage.forEach = (beverageCollide) => {
        if (beverageCollide.x === 1 && beverageCollide.isCoffee === true){
          this.score--;
      }
    };
  };

  checkCoffeeClicked() {
      const beverageToClick = this.beverage.filter = (oneBeverage) => {
        return oneBeverage.x > (this.bialetti - oneBeverage.width / 2)
         && oneBeverage.x < (this.bialetti + 200 + oneBeverage.width / 2);
      };
      console.log("Array", beverageToClick);
      if(beverageToClick.length > 0) {
        if (beverageToClick[0].isCoffee === true) {
          this.score ++;
        } else {
            this.score--;
        };
      };
      console.log(this.score);  
  };

  increaseGameSpeed() {
      this.speed += 10;
      this.speedElement = document.body.querySelector(".speed .value");
      this.speedElement.innerHTML = this.speed;
  };

  decreaseGameSpeed() {
    this.speed -= 10;
    this.speedElement = document.body.querySelector(".speed .value");
    this.speedElement.innerHTML = this.speed;
};
  
  updateScore() {
    this.scoreElement.innerHTML = this.score;    
  };

  checkIfGameOver() {
    if (this.score <= 0){
      this.gameOver();
    };
  };

  passGameOverCallback(gameOver) {  
    this.onGameOverCallback = gameOver;
  };

  gameOver(){ 
    this.gameIsOver = true;
    this.onGameOverCallback();
  };

  removeGameScreen() {
    this.gameScreen.remove();
  };
  
  checkTime() {
    if (this.time === 60){
      this.gameOver();
    };
  };

  printTime() {
    this.loopCount++;
    if (this.loopCount % 60 === 0) {
      this.time = Math.floor(this.loopCount / 60);
      this.timeElement.innerHTML = this.time;
    };
  };
};
  
  

  
  
  