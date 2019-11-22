// ---------------------- PIPES LOGIC ---------------------- //

// LOAD PIPES IMAGES
const topPipe = new Image();
topPipe.src = "assets/sprites/top-pipe-green.png";

const bottomPipe = new Image();
bottomPipe.src = "assets/sprites/bottom-pipe-green.png";

// PIPES OBJECT
const pipes = {
    
    gap : 120,
    maxYPos : -150,
    width : 53,
    height : 400,
    position : [],
    dx : 2,
    
    draw : function(){

        for(let i  = 0; i < this.position.length; i++){

            let p = this.position[i];
            let topYPos = p.y;
            let bottomYPos = p.y + this.height + this.gap;
            
            ctx.drawImage(bottomPipe, p.x, topYPos, this.width, this.height); // top pipe
            ctx.drawImage(topPipe, p.x, bottomYPos, this.width, this.height); // bottom pipe
        }
    },
    
    update: function(){
    
        if(state.current !== state.play) // if not playing, exit
            return;
        
        if(frames % 150 == 0){ // add pipes to array
            this.position.push({
                x : cvs.width + 100,
                y : this.maxYPos * ( Math.random() + 1)
            });
        }
        
        for(let i = 0; i < this.position.length; i++){
            let p = this.position[i];
            let bottomPipeYPos = p.y + this.height + this.gap;
            
            // COLLISION DETECTION
            // Top Pipe
            if( bird.x + bird.radius > p.x // bird right > pipe left
                && bird.x - bird.radius < p.x + this.width // bird left < pipe right
                && bird.y + bird.radius > p.y // bird bottom > pipe top
                && bird.y - bird.radius < p.y + this.height // bird top < pipe bottom
            ){
                state.current = state.over; // game over
            }
            // Bottom Pipe
            if( bird.x + bird.radius > p.x // bird right > pipe left
                && bird.x - bird.radius < p.x + this.width // bird left < pipe right
                && bird.y + bird.radius > bottomPipeYPos // bird bottom > pipe top
                && bird.y - bird.radius < bottomPipeYPos + this.height // bird top < pipe bottom
            ){
                state.current = state.over; // game over
            }
            p.x -= this.dx; // shift pipes to the left
            
            if(p.x + this.width <= 0){ // pipe not visible
                this.position.shift(); // remove pipe from array
                score.current += 1; // update score
                score.best = Math.max(score.current, score.best); // update high score
                localStorage.setItem("best", score.best);
            }
        }
    },

    reset : function(){
        this.position = [];
    }
    
}
