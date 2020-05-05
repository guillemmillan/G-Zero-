class Circuit {
  constructor(wall, circuit, ship){
    this.canvas = circuit;
    this.context = this.canvas.getContext("2d");
    this.walls = [];
    this.ship = imgShip;
    this.speed = shipSpeed;
    this.start();
  }
  start(){
    this.mainWalls();
  }

  mainWalls(){
    ctx.beginPath();
    ctx.moveTo(50,750);
    ctx.lineTo(1150, 750);
    ctx.moveTo(1150, 760);
    ctx.lineTo(1150, 50);
    ctx.moveTo(1160, 50);
    ctx.lineTo(40,50);
    ctx.moveTo(50,50);
    ctx.lineTo(50, 760);
    ctx.closePath();
    ctx.stroke();

    //pared interior
    ctx.beginPath();
    ctx.moveTo(200, 600);
    ctx.lineTo(1000, 600);
    ctx.moveTo(1000, 610);
    ctx.lineTo(1000, 200);
    ctx.moveTo(1010, 200);
    ctx.lineTo(200, 200);
    ctx.moveTo(195, 190);
    ctx.lineTo(200, 610);
    ctx.closePath();
    ctx.stroke();
      }
}


/*class Laps{
  constructor(canvas, laps) {
  this.ctx = this.canvas.getContext("2d");
  this.laps = 0;

  }, 

  let laps() {
    this.laps = Math.floor(frames / 20);
    ctx.font = "24px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Laps: " + this.laps, canvas.width - 200, 50);
  }
}*/
