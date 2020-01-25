'use strict'

function Beverage(){
    this.canvas = canvas;
    this.size = 50;
    this.direction;
    this.speed = 5;
    this.x = canvas.width + this.size;
    this.y;
    this.isCoffee = false;
  };

  var beverageImage = [];
   
  Beverage.prototype.draw = function(){
    var randomBeverage =  Math.floor(Math.random() * beverageImage.length);
    var beverage = beverageImage[randomBeverage];
    this.ctx.fillStyle = beverage;
  };



  
  Beverage.prototype.moveForward = function(){
    this.x = this.x - this.speed;
  };