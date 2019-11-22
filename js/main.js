// ---------------------- GAME CONTROL FUNCTIONS ---------------------- //

// SCORE
const score= {

    best : parseInt(localStorage.getItem("best")) || 0,
    current : 0,
    
    draw : function(){

        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#000";
        
        if(state.current == state.play){

            ctx.lineWidth = 2;
            ctx.font = "55px Teko";
            // Display current score
            ctx.fillText(this.current, cvs.width/2, 50);
            ctx.strokeText(this.current, cvs.width/2, 50);

        }else if(state.current == state.over){

            ctx.lineWidth = 1.2;
            ctx.font = "35px Teko";
            // Display current score
            ctx.fillText(this.current, 338, 248);
            ctx.strokeText(this.current, 338, 248);
            // Display best score
            ctx.fillText(this.best, 338, 295);
            ctx.strokeText(this.best, 338, 295);
        }
    },

    reset : function(){
        this.current = 0;
    }

}

// RESTART GAME OBJECT
const restartGameBtn = {

    x : 221,
    y : 332,
    width : 84,
    height : 26
}

// ON CLICK EVENT
cvs.addEventListener("click", function(e){

    switch(state.current){
        case state.getReady: state.current = state.play;
                             break;
        case state.play: bird.flap();
                         break;
        case state.over: let rect = cvs.getBoundingClientRect();
                         let clickX = e.clientX - rect.left;
                         let clickY = e.clientY - rect.top;

                         if( clickX >= restartGameBtn.x 
                             && clickX <= restartGameBtn.x + restartGameBtn.width 
                             && clickY >= restartGameBtn.y 
                             && clickY <= restartGameBtn.y + restartGameBtn.height
                            ){
                            pipes.reset();
                            bird.speedReset();
                            score.reset();
                            state.current = state.getReady;
                         }
                         break;       
    }
});

// DRAW
function draw(){
    bg.draw();
    pipes.draw();
    fg.draw();
    bird.draw();
    getReady.draw();
    gameOver.draw();
    score.draw();
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
