"use strict"

class Line{
    constructor(x, y, speedX, speedY){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
    }

draw(){
    ctx.drawImage(lineImg, this.x, this.y, 30, 30);
    }
}

