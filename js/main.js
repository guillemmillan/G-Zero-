'use-strict'

var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';
var img = new Image();
img.src = "https://toppng.com/uploads/preview/spaceship-png-11552939067fqqgfhx8pn.png";
img.onload = function() { 
  ctx.drawImage(img, 10, 10, 50, 50); 
}
//canvas
/*const main = () => {
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