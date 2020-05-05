'use-strict'
var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
ctx.lineWidth= 20;
ctx.strokeStyle=('white');


//Circuito
ctx.beginPath();
ctx.moveTo(50,750);
ctx.lineTo(1350, 750);
ctx.moveTo(1350, 760);
ctx.lineTo(1350, 50);
ctx.moveTo(1360, 50);
ctx.lineTo(40,50);
ctx.moveTo(50,50);
ctx.lineTo(50, 760);
//interior
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



//ship model
var logo = new Image();
logo.src="https://raw.githubusercontent.com/guillemmillan/G-Zero-/master/img/logo.png";
logo.onload = function(){
    ctx.drawImage(logo, 500, 350, 200, 100);
}
var img = new Image();
img.src= "https://raw.githubusercontent.com/guillemmillan/G-Zero-/master/img/g-ship.png";
img.onload = function(){
    ctx.drawImage(img, 600, 100, 50, 50);
}

let ship ={
    x:600,
    y:100,
    speedX:30,
    speedY:30, 
    laps: 0,
  
} 

    
function updateRace(){
    ctx.restore();
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(img, ship.x, ship.y, 50, 50);
    ctx.save();
    ctx();
}

function keyInput(event){
    console.log(event);
    if (event.code == "ArrowRight"){
        ship.x = ship.x + ship.speedX;
    }
    if (event.code == "ArrowLeft"){
        ship.x = ship.x -ship.speedX;
    }
    if (event.code == "ArrowUp"){
        ship.y = ship.y - ship.speedY;
    }
    if (event.code == "ArrowDown"){
        ship.y = ship.y + ship.speedY;
    }
    updateRace();
}
document.onkeydown = keyInput;



/*
class Circuit{
    constructor()
}
const main = () => {
    
    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        
    };

    const buildSplashScreen = () => {
       buildDom(`
        <section class="splash-screen">
            <h1>Eternal Enemies</h1>
            <button>Start</button>
        </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);

    };

    const buildGameScreen = () => {
        buildDom(`
            <section class="game-screen">
                <canvas></canvas>
            </section>
            
        `);

        const width = document.querySelector('.game-screen').offsetWidth;
        const height = document.querySelector('.game-screen').offsetHeight;

        const canvasElement = document.querySelector('canvas');

        canvasElement.setAttribute('width', width);
        canvasElement.setAttribute('height', height);

        const game = new Game(canvasElement);
        game.gameOverCallback(buildGameOver);
        
        game.startLoop();

        const setPlayerDirection = (event) => {
            if(event.code === 'ArrowUp'){
                game.player.setDirection(-1)
            } else if(event.code === 'ArrowDown'){
                game.player.setDirection(1)
            };
        };

        document.addEventListener('keydown', setPlayerDirection);

    };

    const buildGameOver = () => {
        buildDom(`
            <section class="game-over">
                <h1>Game Over Screen</h1>
                <button>Restart</button>
            </section>
        `);

        const restartButton = document.querySelector('button');
        restartButton.addEventListener('click', buildGameScreen);
    };

    buildSplashScreen();

};

window.addEventListener('load', main);
/*
var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';
var img = new Image();
img.src = "https://raw.githubusercontent.com/guillemmillan/G-Zero-/master/img/spaceship.png";
img.onload = function() { 
  ctx.drawImage(img, 10, 10, 50, 50); 
}

//canvas
const main = () => {
    const main = document.querySelector('main');
    main.innerHTML = html;
};

const buildSplashScreen = () => {
    buildDom(`
    <section class="splash-screen">
        <h1>G-ZERO</h1>
            <p>Press start and use arrows to move your ship without touching any border</p>
        <button>START</button>
    </section>
    `);
    const startButton = document.querySelector('button');
    startButton.addEventListener('click', buildGameScreen);
};

const buildGameScreen = () => {
    buildDom(`
    <section class="game-screen">
        <canavas></canvas>
    </section>
    `)
    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.gameOverCallback(buildGameOver);
    
    game.startLoop();

    const setPlayerDirection = (event) => {
        if(event.code === 'ArrowUp'){
            game.player.setDirectionX(-1)
        } else if(event.code === 'ArrowDown'){
            game.player.setDirectionX(1)
        } else if(event.code === 'ArrowRight'){
            game.player.setDirectionY(-1)
        }else if(event.code === 'ArrowLeft'){
            game.player.setDirectionY(1);
        }
    };
}*/