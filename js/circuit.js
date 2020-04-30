"use strict"
function multiplicaPor(x) {
    return function(y){
      return x * y;
    };
  };
  
  var duplicar = multiplicaPor(2);
  var triplicar = multiplicaPor(3);
  
  console.log(duplicar(10));
  console.log(triplicar(30));/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.linewidth= 20;
ctx.strokeStyle=('white'):
ctx.fillStyle='green';
ctx.fillRect(10,10,100,100)
ctx.beginPath();


ctx.closePath();
ctx.stroke();*/
