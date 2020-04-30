  var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
ctx.lineWidth= 20;
ctx.strokeStyle=('white');
ctx.beginPath();
ctx.moveTo(50,750);
ctx.lineTo(1150, 750);
ctx.moveTo(1150, 760);
ctx.lineTo(1150, 50);
ctx.moveTo(1160, 50);
ctx.lineTo(40,50);
ctx.moveTo(50,50);
ctx.lineTo(50, 750);
ctx.closePath();
ctx.stroke();


