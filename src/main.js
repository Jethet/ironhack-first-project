'use strict'

// Create the DOM
function buildDom(htmlString){
    var div = document.createElement('div');
    div.innerHTML = htmlString;

    return div.children[0];
};

function main(){
    var game;
    var splashScreen;
    var gameOverScreen;

    function createSplashScreen(){
        splashScreen = buildDom(`
        <main class="splash-screen-container">
            <center>
            <br>
            <h1 style="text-align:center">Get Your Coffee!</h1>
     
            <h2 id="first" style="text-align:center">A game for the True Coffee Lover</h2>
            <button id="start-button"> Get your coffee!!! </button>
            <div id="second">
                <p>Click the spacebar when the coffee cup moves under the Bialetti coffee maker and you gain a point. If you click another beverage, you lose a point. You have 60 seconds to play and you get 5 points to start with.</p>
            </div>
            </center>
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


    function createGameScreen(){    // I ADDED class="speed" etc.
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
            <div class="speed">
            <span class="label">Increase speed</span>
            <span class="value"></span>
            </div>
        </header>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
        </main>
        </body>`);

        var speedButton = gamescreen.querySelector('button'); // I ADDED BUTTON
        speedButton.addEventListener('click', function(){
            increaseGameSpeed();
        });
        };
        document.body.appendChild(gameScreen);
        return gameScreen;



    function removeGameScreen(){
        game.gameScreen.remove();
    }


    function createGameOverScreen(score){
        gameOverScreen = buildDom(`
        <main class="game-over-container">
            <br>
            <center>
            <h1 id="game-over">Game over</h1>
            <br>
            <div id="three">
            <p id="text-game-over">You scored <span>${score}</span> cups of Best Coffee!! Would you like to play again?</p>
            </div>
            <div>
            <button id="restart-button">Click to play again</button>
            </div>
            </center>
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