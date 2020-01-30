'use strict'

function Beverage(canvas, isCoffee, imagesrc, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 200;
    this.height = 200;
    this.speed = speed;
    this.x = this.canvas.width + this.width;
    this.y = 350;
    this.isCoffee = isCoffee;
    this.image = new Image();
    this.image.src = imagesrc;
  };

  Beverage.prototype.draw = function(){
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
  
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
  };