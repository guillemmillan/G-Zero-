"use strict"

class Ship{
    constructor(x, y){
        this.x =x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.wall= true;
        this.health = 100;
        this.laps= 0;
        this.right = false;
        this.left = flase;
        this.up = false;
        this.wall = true;
        this.down = false;
        this.isGameOver = false;
        this.winner = flase;
        this.myLives = document.getElementsByClassName('.mylife');
        this.myLaps = document.getElementsByClassName('.mylaps');
        }
        shipIs(direction){
            switch(direction){
                case "down":
                    this.y = parseInt(this.y/liney) * liney;
                    break;
                case "up":
                     this.y = (parseInt(this.y/liney) + 1) * liney;
                    break;
                case "left":
                    this.y = parseInt(this.x/linex) * linex;
                    break;
                case "right":
                    this.y = parseInt(this.x/linex) * linex;
                    break;
            }
        }
        crash(x,y){
            let crash = false;

            if(circuit[parseInt(y/liney)][parseInt(x/linex)] == 1){
              crash = true;
            }
            return crash;
          }

          motion(){
            if(this.speedY > 0){
                if(this.crash(this.x + 1, this.y + liney) == true || this.crash(this.x + linex -1, this.y + liney) == true){
                  this.ground = true;
                  this.speedY = 0;
                  this.shipIs("down");
                } else {
                  this.wall = false;
                }
              }
              //arribacrash
              if(this.speedY < 0){
                if(this.crash(this.x + 1, this.y) == true || this.crash(this.x + linex -1, this.y) == true){
                  this.speedY = 0;
                  this.shipIs("up");
                }
              }
              //derechacrash
              if(this.speedX > 0) {
                if(
                  this.crash(this.x + linex + this.speedX, this.y + 1) == true || 
                  this.crash(this.x + linex + this.speedX, this.y + liney -1) == true ){
                    if(this.x != parseInt(this.x/linex) * linex){
                      this.shipIs("right");
                      this.right = false;
                    }
                    this.right = false;
                    this.speedX = 0;
                }
              }
              //izquierdacrash
              if(this.speedX < 0) {
                if(
                  this.crash(this.x + this.speedX, this.y + 1) || 
                  this.crash(this.x + this.speedX, this.y + liney - 1)){
                    if(this.x != parseInt(this.x/linex) * linex){
                      this.shipIs("left");
                      this.left = false;
                    }
                    this.left = false;
                    this.speedX = 0;
                }
              }
              //derecha
              if (this.right == true && 
                this.speedX <= this.maxSpeed){
                this.speedX += this.speed;
              }
              if(this.speedX > 0){
                this.speedX -= this.friction;
                this.wall = false;
                if(this.speedX < 0) {
                  this.speedX = 0;
                  this.wall = false;
                }
              }
              //izquierda 
              if(this.left == true && this.speedX >= 0-this.maxSpeed) {
                this.speedX -= this.speed;
              }
              if(this.speedX < 0) {
                this.speedX += this.friction;
                this.wall = false;

                if(this.speedX > 0) {
                  this.speedX = 0;
                  this.wall = false;
                }
              }
              this.y += this.speedY;
              this.x += this.speedX;
            
              //crashwall
              if(circuit[parseInt(this.y/liney)][parseInt(this.x/linex)] == 1){
                --this.health;
                circuit[parseInt(this.y/liney)][parseInt(this.x/linex)] = 0;
              }
              //crashline
              if(circuit[parseInt(this.y/liney)][parseInt(this.x/linex)] == 2){
                ++this.laps;
                circuit[parseInt(this.y/liney)][parseInt(this.x/linex)] = 0;
              }

              //gameover
              if (this.health === 0){ setTimeout(youLose, 1000)};
              //win
              if (this.laps === 4){ setTimeout(youWin,1000)};
            }

            directionRigt() {
                let moveShip = this;
                if(
                  moveShip.crash(moveShip.x + widthBox + moveShip.speedX, moveShip.y + 1) == true || moveShip.crash(moveShip.x + widthBox + moveShip.speedX, moveShip.y + heightBox -1) == true ){
                    moveShip.right = false;
                } else {
                  this.right = true;
                }
              }
              directionLeft() {
                let moveShip = this;
                if(
                  moveShip.crash(moveShip.x + moveShip.speedX, moveShip.y + 1) == true || moveShip.crash(moveShip.x + moveShip.speedX, moveShip.y + heightBox - 1) == true){
                    moveShip.left = false;
                } else {
                  moveShip.left = true;
                }
              }
              directionUp() {
                let moveShip = this;
                if(
                  moveShip.crash(moveShip.y + widthBox + moveShip.speedY, moveShip.x + 1) == true || moveShip.crash(moveShip.y + widthBox + moveShip.speedY, moveShip.x + heightBox -1) == true ){
                    moveShip.right = false;
                } else {
                  this.right = true;
                }
              }
              directionDown() {
                let moveShip = this;
                if(
                  moveShip.crash(moveShip.y + moveShip.speedY, moveShip.x + 1) == true || moveShip.crash(moveShip.y + moveShip.speedY, moveShip.x + heightBox - 1) == true){
                    moveShip.left = false;
                } else {
                  moveShip.left = true;
                }
              }
              stopdirectionRigt(){
                this.right = false;
              }
              stopdirectionLeft(){
                this.left = false;
              }
              stopdirectionUp(){
                this.up = false;
              }
              stopDown(){
                this.down = false;
              }
              draw(){
                  this.motion();
                  ctx.drawImage(shipImg, this.x, this,y, linex, liney);
                  if (this,y >= canvas.height -25){
                      this.wall = ture;
                  }
              }
}
