// ---------------------- BIRD LOGIC ---------------------- //

// LOAD BIRD IMAGES
const birdImages = [];
const birdImageCollection = loadBirdImages(
    ["yellowBirdUp", "yellowBirdMid", "yellowBirdDown"],
    ["yellowbird-upflap", "yellowbird-midflap", "yellowbird-downflap"]
);

function loadBirdImages(names, files) {
    for (let i = 0; i < names.length; i++) {
        const img = birdImages[names[i]] = new Image;
        img.src = "assets/sprites/" + files[i] + ".png";
    }   
}

// BIRD OBJECT
const bird = {

    x : 80,
    y : 150,
    width : 34,
    height : 26,
    frame : 0,
    speed : 0,
    gravity : 0.25,
    jump : 4.6,
    rotation : 0,
    radius : 12,

    draw: function(){

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        if(this.frame == 0){
            ctx.drawImage(birdImages["yellowBirdUp"], -this.width/2, -this.height/2, this.width, this.height);
            // this.frame++;
        }
        if(this.frame == 1 || this.frame == 3){
            ctx.drawImage(birdImages["yellowBirdMid"], -this.width/2, -this.height/2, this.width, this.height);
            // this.frame++;
        }
        if(this.frame == 2){
            ctx.drawImage(birdImages["yellowBirdDown"], -this.width/2, -this.height/2, this.width, this.height);
            // this.frame++;
        }

        ctx.restore();

    },

    update: function(){
       
        if(state.current == state.getReady) // flap speed
            this.period = 10
        else
            this.period = 5;
        
        if(frames % this.period == 0) // frame increment
            this.frame += 1;
        this.frame = this.frame % 3;
        
        if(state.current == state.getReady){ // reinitialise
            this.y = 150; // Steady if not playing
            this.rotation = 0 * degree;
        }else{
            this.speed += this.gravity;
            this.y += this.speed;
            
            // Game Over check
            if(this.y + this.height/2 >= cvs.height - fg.height){ // bird touches ground
                this.y = cvs.height - fg.height - this.height/2; // keep bird on ground
                if(state.current == state.play){
                    state.current = state.over;
                }
            }
            
            if(this.speed >= this.jump){ // Fall Down
                this.rotation = 90 * degree; // rotate
                this.frame = 1; // stop flapping
            }else{
                this.rotation = -25 * degree; // move up
            }
        }
        
    },

    flap: function(){
        this.speed = -this.jump;
    },
    
    speedReset : function(){
        this.speed = 0;
    }

}

