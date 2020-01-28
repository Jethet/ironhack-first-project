'use strict'

function Beverage(canvas, isCoffee, imagesrc, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 100;
    this.height = 100;
    this.speed = speed * 2;
    this.x = this.canvas.width + this.width;
    this.y = 300;
    this.isCoffee = isCoffee;
    this.image = new Image();
    this.image.src = imagesrc;
  };

  Beverage.prototype.draw = function(){
   // this.ctx.fillStyle = this.color;
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  
  Beverage.prototype.moveForward = function(){
    this.x = this.x - this.speed;
  };

  Beverage.prototype.checkIfCoffee = function(){
    if (this.isCoffee === true){
      return true;
    }
  };

  Beverage.prototype.isInsideScreen = function(){
    return this.x + this.width / 2 > 0;
  }