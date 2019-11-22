// ---------------------- GAME CONTROL FUNCTIONS ---------------------- //

// ON CLICK EVENT
cvs.addEventListener("click", function(evt){

    switch(state.current){
        case state.getReady: state.current = state.play;
                             break;
        case state.play: bird.flap();
                         break;
        case state.over: state.current = state.getReady;
                         break;
    }
});


// DRAW
function draw(){
    bg.draw();
    fg.draw();
    pipes.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
}

// UPDATE
function update(){
    bird.update();
    fg.update();
    pipes.update();
}

// GAME
function game(){
    update();
    draw();
    frames++;
    requestAnimationFrame(game); // recursion
}
game();