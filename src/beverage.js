'use strict'

function Beverage(canvas, y, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = 20;
    // Math.floor(20 + Math.random() * (100-20 + 1));  this was intended to vary the size
  //  this.direction = 0;
    this.speed = speed;
    this.x = this.canvas.width + this.size;
    this.y = y;
    this.isCoffee = false;
  };

   
  Beverage.prototype.draw = function(){
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  };

  
  Beverage.prototype.moveForward = function(){
    this.x = this.x - this.speed;   // images move from right to left
  };

  Beverage.prototype.checkIfCoffee = function(){
    if (isCoffee === true){
      return true;
    }
  };

  Beverage.prototype.isInsideScreen = function(){
    return this.x + this.size / 2 > 0;
    //return this.x + this.size > 0;  THIS IS IN THE CODEALONG
  }