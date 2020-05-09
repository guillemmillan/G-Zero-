
let canvas;
let ctx;
let main;
let shipImg;
let lineImg;
let logoImg;
let winnerImg;
let losserImg;

const buildDom = (html)=> {
    const main = document.querySelector("#main")
    main.innerHTML = html;
}

function updatePage(){
    window.location.reload();
} 

const buildSplashScreen = () => {
    buildDom(`
    <section class="splash-screen">
    <h1>G-Zero</h1>
    <button onclick="buildGameScreen();" class="startb">Start game</button>
        <div class="howto"> 
            <h2>How to play G-Zero</h2>
                <p>You have to use the arrows to drive the ship through the circuit make 3 laps without losing all your life points and you will win the cup.</p>
                <img src="img/arrows.png" s>
                </div>
</section>`);
}
const buildGameScreen = () => {
    buildDom(` <section class="game-screen">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <canvas width="900px" height="900px" class="mainCanvas"></canvas>
                </section>`);
    myCanvas();
    myImage();
    setInterval(playGame(), 500);

}

const youWin = () => {
    buildDom(`<div class="winner">
    <h1 class="winner">Well done, you win this precious cup</h1>
    <img style="margin-top: 20px;"  class="winner" src="img/winner.jpg" width="500px;" height="500px;">
    <br>
    <button onclick="buildGameScreen();" class="startb">Play again</button>
  </div>`);
};

const youLose = () => {
    buildDom(`<div class="winner">
    <h1 class="winner">Ouch you lose all your life</h1>
    <img style="margin-top: 20px;"  class="winner" src="img/losser.jpg" width="500px;" height="500px;">
    <br>
    <button onclick="buildGameScreen();" class="startb">Play again</button>

  </div>`);
};

function myCanvas() {
    canvas = document.getElementsByClassName("maincanvas");
    ctx = canvas.getContext("2d");
    main = new Circuit(canvas.width , canvas.height);
    ship = new Ship(200, 200);

};

function makeCanvas(){
    canvas.width = 800;
    canvas.height = 800;
}

function myImage(){
    shipImg = new Image();
    shipImg.src ="img/g-ship.png";

    lineImg = new Image();
    lineImg.src ="img/line.png";

    logoImg = new Image();
    logoImg.src ="img/logo.png";
    winnerImg = new Image();
    winnerImg.src ="img/winner.jpg";

    losserImg = new Image();
    losserImg.src ="img/losser.jpg";
};

function playGame(){
    makeCanvas();
    canvas.draw();
    drawCircuit();
    ship.draw();
    ship.health();

};

window.onload=() =>{
    buildSplashScreen();
    document.onkeydown = event =>{
        switch(event.code) {
            case "ArrowRight":
                Ship.directionRigt();
                break;
            case "ArrowLeft":
                ship.directionLeft();
                break;
            case "ArrowUp":
                ship.directionUp();
                break;
            case "ArrowDown":
                ship.directionDown();
                break;

        };
    };

    document.onkeydoup = event =>{
        switch(event.code) {
            case "ArrowRight":
                ship.stopdirectionRigt();
                break;
            case "ArrowLeft":
                ship.stopdirectionLeft();
                break;
            case "ArrowUp":
                ship.stopdirectionUp();
                break;
            case "ArrowDown":
                ship.stopdirectionDown();
                break;
        };
    };
};




