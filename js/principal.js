'use-strict'

const main = () => {
    
    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        
    };

    const buildSplashScreen = () => {
       buildDom(`
       <section class="splash-screen">
       <h1>G-Zero</h1>
       <button class="startb">Start game</button>
       <div class="howto"> 
       <h2>How to play G-Zero</h2>
       <p>You have to use the arrows to drive the ship through the circuit make 3 laps without losing all your life points and you will win the cup.</p>
        </div>
       </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);

    };

    const buildGameScreen = () => {
        buildDom(`
            <section class="game-screen">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
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
/*'use-strict'

const main = () => {
    
    const buildDom = (html) => {
        const main = document.querySelector('main');
        main.innerHTML = html;
        
    };

    const buildSplashScreen = () => {
       buildDom(`
       <section class="splash-screen">
       <h1>G-Zero</h1>
       <button>Start</button>
   </section>
        `);
        const startButton = document.querySelector('button');
        startButton.addEventListener('click', buildGameScreen);

    };

    const buildGameScreen = () => {
        buildDom(`
            <section class="game-screen">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
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

window.addEventListener('load', main);*/