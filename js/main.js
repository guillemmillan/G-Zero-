'use-strict'
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
ctx.lineTo(50, 760);
ctx.closePath();
ctx.stroke();
var img = new Image();
img.src= "https://raw.githubusercontent.com/guillemmillan/G-Zero-/master/img/spaceship.png";
img.onload = function(){
    ctx.drawImage(img, 70, 650, 50, 50);
}




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