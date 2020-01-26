'use strict'

function Beverage(canvas, y, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.size = Math.floor(20 + Math.random() * (100-20 + 1));
  //  this.direction = 0;
    this.speed = 5;
    this.x = canvas.width + this.size;
    this.y = y;
    this.isCoffee = false;
  };

   
  Beverage.prototype.draw = function(){
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.size, this.speed);
  };

  
  Beverage.prototype.moveForward = function(){
    this.x = this.x - this.speed;   // images move from right to left
  };

  Beverage.prototype.isInsideScreen = function(){
    return this.x + this.size / 2 > 0;
  }