// ---------------------- INITIALIZE ---------------------- //

// CANVAS
let cvs = document.getElementsByTagName("canvas")[0]; // element
let ctx = cvs.getContext("2d"); // object

// VARIABLES
let frames = 0; // number of frames drawn
const degree = Math.PI/180; // rotation

// LOAD IMAGES
const bgDay = new Image();
bgDay.src = "assets/sprites/background-day.png";

const base = new Image();
base.src = "assets/sprites/base.png";

const getReadyMsg = new Image();
getReadyMsg.src = "assets/sprites/message.png";

const gameOverMsg = new Image();
gameOverMsg.src = "assets/sprites/gameover.png";

// Medals
const medalImages = [];
const medalImageCollection = loadBirdImages(
    ["bronzeMedal", "silverMedal", "goldMedal", "platinumMedal"],
    ["bronze", "silver", "gold", "platinum"]
);

function loadBirdImages(names, files) {
    for (let i = 0; i < names.length; i++) {
        const img = medalImages[names[i]] = new Image;
        img.src = "assets/sprites/" + files[i] + ".png";
    }   
}

console.log(medalImages);
// GAME STATE
const state = {
    current : 0,
    getReady : 0,
    play : 1,
    over : 2
}

// RESTART GAME OBJECT
const restartGameBtn = {

    x : 221,
    y : 332,
    width : 84,
    height : 26
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
    width: 258,
    height: 142,

    dx: 2, // for movement

    draw : function(){
        ctx.drawImage(base, this.x, this.y, this.width, this.height);
        ctx.drawImage(base, this.x, this.y, this.width + this.width, this.height);
        ctx.drawImage(base, this.x, this.y, this.width + 2*this.width, this.height);
    },

    update: function(){ 
        if(state.current == state.play){ // move during play state
            this.x = (this.x - this.dx) % (this.width/1.15);
        }
    }

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
