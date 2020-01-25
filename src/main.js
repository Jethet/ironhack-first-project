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

    function buildSplashScreen(){
        splashScreen = buildDom(`
        <main>
        <h1>Get Your Coffee</h1>
        <button>Get your coffee!!!</button>
        </main>`);

        document.body.appendChild(splashScreen);
        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function(){
            startGame();
        });
    };

    
    function removeSplashScreen(){
        splashScreen.remove(); 
    };


    function buildGameScreen(){
        var gameScreen = buildDom(`
        <main class="game container">
        <header>
            <div class="time">
            <span class="label">Time:</span>
            <span class="value"></span>
            </div>
            <div class="score">
            <span class="label">Score:</span>
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
        game.gameScreen.remove();
    }


    function buildGameOverScreen(score){
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
    buildSplashScreen()

};

main();