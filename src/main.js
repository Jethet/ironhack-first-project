'use strict'

// Create the DOM (not sure what is happening here)
function buildDom(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;

    return div.children[0];
};

function main(){
    console.log("This is supposed to be a game");

    var game;
    var splashScreen;
    var gameOverScreen;

    function createSplashScreen(){
        splashScreen = buildDom(`
        <main>
        <h1>Get Your Coffee!</h1>
        <h2>A game for the True Coffee Lover</h2>
        <button id="start-button">Get your coffee!!!</button>
        </main>`);

        document.body.appendChild(splashScreen);
        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', startGame);
        };
    };

    
    function removeSplashScreen(){
        splashScreen.remove(); 
    };


    function createGameScreen(){
        var gameScreen = buildDom(`
        <main class="game-container">
        <header>
            <div class="time">
            <span class="label">Your time:</span>
            <span class="value"></span>
            </div>
            <div class="score">
            <span class="label">Your score:</span>
            <span class="value"></span>
            </div>
        </header>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
        </main>`);

        document.body.appendChild(gameScreen);
        return gameScreen;
    };


    function removeGameScreen(){
        game.removeGameScreen();
    }


    function createGameOverScreen(score){
        gameOverScreen = buildDom(`
        <main>
            <h1>Game over</h1>
            <p>You scored <span>${score}</span> cups of Best Coffee!! Would you like to play again?</p>
            <button>Restart</button>
        </main>
        `); // this button needs an event listener

        document.body.appendChild(gameOverScreen);
        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);

    };

    function removeGameOverScreen(){
        if (gameOverScreen !== undefined){
            gameOverScreen.remove();
        }
    }

    function startGame(){
        removeSplashScreen();
        removeGameOverScreen();

        var game = new Game();
        game.gameScreen = createGameScreen();

        game.start();

        game.passGameOverCallback(gameOver);  // I do not understand this
    }

    function gameOver(score){
        removeGameScreen();
        createGameOverScreen();
    };

    // Initialize the start screen:
    //createSplashScreen();
//};

window.addEventListener('load', main);

//main();