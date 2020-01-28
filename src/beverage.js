'use strict'

function Beverage(canvas, isCoffee, image, speed){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 100;
    this.height = 200;
    this.speed = speed;
    this.x = this.canvas.width + this.width;
    this.y = 300;
    this.isCoffee = isCoffee;
    this.imageSource = image;
  };

  Beverage.prototype.draw = function(){
    var pushDrink = true;
    this.imageSource = [];
    var newBeverage = new Beverage(this.canvas, true, imageSource, 10);
      this.beverage.forEach(function(drink){
        if (drink.y === newBeverage.y && drink.x < newBeverage.x + newBeverage.width + 50){
          pushDrink = false;
        }
      });
      if (pushDrink === true){
        this.beverage.push(newBeverage);
    this.ctx.fillStyle = this.image;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    return newBeverage;
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
  }