'use strict'

class Beverage{
  constructor(canvas, isCoffee, imagesrc, speed){
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

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
  
  moveForward() {
    this.x = this.x - this.speed;
  };

  checkIfCoffee() {
    if (this.isCoffee === true){
      return true;
    }
  };

  isInsideScreen() {
    return this.x + this.width / 2 > 0;
  };
};