"use strict"

class Ship{
    constructor(canvas){
        this.canavs = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.size = 50;
        this.player;
        this.speed;
        this.direction;
        this.lives = 100;
        this.wall;
        this.isGameOver = false;

        const img = new Image();
        img.src= "https://raw.githubusercontent.com/guillemmillan/G-Zero-/master/img/g-ship.png";
        img.onload = function(){
            ctx.drawImage(img, 600, 670, 50, 50);
            this.x = 50;
            this.y= 50;
        }
        
        
        checkCollisionWall(wall){
            const collisionOfRight = this.x + this.size / 2 > wall.x -wall.size /2;
            const collisionOfLeft = this.x - this.size / 2 <  wall.x + wall.size /2;
            const collisionOfTop = this.y + this.size / 2 > wall.y - wall.size /2;
            const collisionOfBottom = this.y - this.size / 2 < wall.y + wall.size /2;
        }
        loseLive(){
            this.live--;
        }     

    }




}

