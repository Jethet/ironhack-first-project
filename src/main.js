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
        <main class="splash-screen-container">
        <br>
        <h1 style="text-align:center">Get Your Coffee!</h1>
        <h2 style="text-align:center">A game for the True Coffee Lover</h2>
        <center>
        <button id="start-button">Get your coffee!!!</button>
        </center>
        </main>`);

        document.body.appendChild(splashScreen);
        var startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function(){
            startGame()
        });
        };

    
    function removeSplashScreen(){
        splashScreen.remove(); 
    };


    function createGameScreen(){
        var gameScreen = buildDom(`
        <body>
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
        </main>
        </body>`);

        document.body.appendChild(gameScreen);
        return gameScreen;
    };


    function removeGameScreen(){
        game.gameScreen.remove();
    }


    function createGameOverScreen(score){
        gameOverScreen = buildDom(`
        <main class="game-over-container">
            <br>
            <h1>Game over</h1>
            <p id="one">You scored <span>${score}</span> cups of Best Coffee!!</p>
            <br>
            <p id="two">Would you like to play again?</p>
            <div>
            <button id="restart-button">Play another game</button>
            </div>
        </main>
        `); 

        var button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);
        var span = gameOverScreen.querySelector('span');
        span.innerText = score;

        document.body.appendChild(gameOverScreen);
    };

    function removeGameOverScreen(){
        if (gameOverScreen !== undefined){
            gameOverScreen.remove();
        }
    }

    function startGame(){
        removeSplashScreen();
        removeGameOverScreen();

        game = new Game();
        game.gameScreen = createGameScreen();

        game.start();

        game.passGameOverCallback(function(){
            gameOver(game.score);
        });  // I do not understand this
    }

    function gameOver(score){
        removeGameScreen();
        createGameOverScreen(score);
    };

    // Initialize the start screen:
    createSplashScreen();
};

window.addEventListener('load', main);

//main();