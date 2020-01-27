'use strict'

function Beverage(canvas, isCoffee, color, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 100;
    this.height = 200;
    //   this was intended to vary the size
  //  this.direction = 0;
    this.speed = speed;
    this.x = this.canvas.width + this.width;
    this.y = 400;
    this.isCoffee = isCoffee;
    this.color = color;
  };

   
  Beverage.prototype.draw = function(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  
  Beverage.prototype.moveForward = function(){
    this.x = this.x - this.speed;   // images move from right to left
  };

  Beverage.prototype.checkIfCoffee = function(){
    if (this.isCoffee === true){
      return true;
    }
  };

  Beverage.prototype.isInsideScreen = function(){
    return this.x + this.width / 2 > 0;
    //return this.x + this.size > 0;  THIS IS IN THE CODEALONG
  }