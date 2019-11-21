// ---------------------- INITIALIZE ---------------------- //

// CANVAS
let cvs = document.getElementsByTagName("canvas")[0]; // element
let ctx = cvs.getContext("2d"); // object

// VARIABLES
let frames = 0; // number of frames drawn

// LOAD IMAGES
const bgDay = new Image();
bgDay.src = "assets/sprites/background-day.png";

const base = new Image();
base.src = "assets/sprites/base.png";

const getReadyMsg = new Image();
getReadyMsg.src = "assets/sprites/message.png";

const gameOverMsg = new Image();
gameOverMsg.src = "assets/sprites/gameover.png";

// GAME STATE
const state = {
    current : 0,
    getReady : 0,
    play : 1,
    over : 2
}


// ---------------------- DRAW ON CANVAS ---------------------- //

// BACKGROUND OBJECT
const bg = {

    x : 0,
    y : 0,
    width : 275,
    height : 630,
    
    draw : function(){
        ctx.drawImage(bgDay, this.x, this.y, this.width, this.height);
        ctx.drawImage(bgDay, this.x, this.y, this.width + this.width, this.height);
    }
    
}

// FOREGROUND OBJECT
const fg = {
    
    x: 0,
    y: cvs.height - 142,
    width: 264,
    height: 142,
    
    draw : function(){
        ctx.drawImage(base, this.x, this.y, this.width, this.height);
        ctx.drawImage(base, this.x, this.y, this.width + this.width, this.height);
    },
}

// GET READY MESSAGE
const getReady = {

    x : cvs.width/2 - 173/2,
    y : 50,
    width : 173,
    height : 252,
    
    draw: function(){
        if(state.current == state.getReady){
            ctx.drawImage(getReadyMsg, this.x, this.y, this.width, this.height);
        }
    }
    
}

// GAME OVER MESSAGE
const gameOver = {

    x : cvs.width/2 - 275/2,
    y : 120,
    width : 275,
    height : 252,

    draw: function(){
        if(state.current == state.over){
            ctx.drawImage(gameOverMsg, this.x, this.y, this.width, this.height);   
    
        }
    }
}
