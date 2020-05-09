"use strict"

class Circuit {
    constructor(x, y){ 
    this.width = x;
    this.high = y;
    }
    draw(){
        ctx.myCanvas();
    };
};  

let linex = 50;
let liney = 50;

let wall = "rgba(255, 255, 255, 1)";
let clean = "rgba(0, 0, 0, 0)";

let circuit = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
            ];

  function  drawCircuit(){
        let object;
        for(let y=0; y < 17; y++){
            for (let x=0; x < 17; x++ ){
                switch(circuit[y][x]){
                    case 0: object = clean;
                        break;
                    case 1: ctx.fillstyle= wall;
                            ctx.fillRect(x*linex, y*liney, linex, liney);
                    break;
                    case 2: let line = new Line(x*linex, y*liney)
                    line.draw();
                }
            }
        }
    }
