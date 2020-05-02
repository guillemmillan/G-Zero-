"use-strict"

class Circuit{
  constructor(canvas, live) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.wall;
    this.lap;

    var canvas = document.getElementById("canvas");
      var ctx    = canvas.getContext("2d");
      ctx.lineWidth= 20;
      ctx.strokeStyle=('white');

      //pared exterior
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