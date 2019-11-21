// ---------------------- GAME CONTROL FUNCTIONS ---------------------- //

// DRAW
function draw(){
    bg.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

// UPDATE
function update(){
}

// GAME
function game(){
    update();
    draw();
    frames++;
    requestAnimationFrame(game); // recursion
}
game();