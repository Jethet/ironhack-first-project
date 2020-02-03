'use strict'

// Create the DOM
const buildDom = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
};

const main = () => {
    let game;
    let splashScreen;
    let gameOverScreen;

    const createSplashScreen = () => {
        splashScreen = buildDom(`
        <main class="splash-screen-container">
            <div>
                <img class="splash-bialetti" src="images/coffee-percolator.png">
            </div>
            <div>
                <center>
                <br>
                <h1 style="text-align:center">Get Your Coffee!</h1>
                <h2 id="first" style="text-align:center">A game for the True Coffee Lover</h2>
                <button id="start-button">Get your coffee!!!</button>
                    <div id="second">
                        <p>Click the spacebar when the coffee cup passes under the Bialetti coffee maker to gain a point. If you click another beverage, you lose a point. You get 5 points to start with. Use + and - buttons to increase or decrease the speed of the beverages. You have 60 seconds to play.</p>
                    </div>
                </center>
            </div>
        </main>`);

        document.body.appendChild(splashScreen);
        const startButton = splashScreen.querySelector('button');
        startButton.addEventListener('click', function(){
            startGame();
        });
        };

    const removeSplashScreen = () => {
        splashScreen.remove(); 
    };

    const createGameScreen = () => { 
        const gameScreen = buildDom(`
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
                <span class="label">Speed</span>
                <span class="value"></span>
            </div>
            <div>
                <button id="plus-button">+</button>
            </div>
            <div>
                <button id="minus-button">-</button>
            </div>
        </header>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
        </main>
        </body>`);

        const speedButton = gameScreen.querySelector('#plus-button');
        speedButton.addEventListener('click', function(){
            game.increaseGameSpeed();
        });

        const decreaseSpeedButton = gameScreen.querySelector('#minus-button');
        decreaseSpeedButton.addEventListener('click', function(){
            game.decreaseGameSpeed();
        });
        
        document.body.appendChild(gameScreen);
        return gameScreen;
    };

    const removeGameScreen = () => {
        game.gameScreen.remove();
    }

    const createGameOverScreen = (score) => {
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
            <center>
            <footer>
            <p id="footer">Credits for images:</p>
            <a href="https://pixabay.com/users/AnnaliseArt-7089643/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4515401">Annalise Batista</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4515401">Pixabay / </a>
            <a href="https://pixabay.com/users/Clker-Free-Vector-Images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=42560">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=42560">Pixabay</a><br/>
            <a href="https://pixabay.com/users/Redhead_Pueppi-6697213/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2951894">Jennifer R.</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2951894">Pixabay / </a>
            <a href="https://pixabay.com/users/OpenClipart-Vectors-30363/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=157876">OpenClipart-Vectors</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=157876">Pixabay</a><br/>
            </footer>
            </center>
        </main>
        `); 

        const button = gameOverScreen.querySelector('button');
        button.addEventListener('click', startGame);
        const span = gameOverScreen.querySelector('span');
        span.innerText = score;

        document.body.appendChild(gameOverScreen);
    };

    const removeGameOverScreen = () => {
        if (gameOverScreen !== undefined){
            gameOverScreen.remove();
        }
    }

    const startGame = () => {
        removeSplashScreen();
        removeGameOverScreen();

        game = new Game();
        game.gameScreen = createGameScreen();
        game.start();

        game.passGameOverCallback(function(){
            gameOver(game.score);
        });  // I do not understand this
    }

    const gameOver = (score) => {
        removeGameScreen();
        createGameOverScreen(score);
    };

    // Initialize the start screen:
    createSplashScreen();
};

window.addEventListener('load', main);
