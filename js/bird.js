// ---------------------- BIRD CONTROL ---------------------- //

// LOAD BIRD IMAGES
const birdImages = [];
const birdImageCollection = loadBirdImages(
    ["yellowBirdUp", "yellowBirdMid", "yellowBirdDown"],
    ["yellowbird-upflap", "yellowbird-midflap", "yellowbird-downflap"],
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

    draw : function(){
        if(this.frame == 0){
            ctx.drawImage(birdImages["yellowBirdUp"], this.x - this.width/2, this.y + this.height/2, this.width, this.height);
            // this.frame++;
        }
        if(this.frame == 1 || this.frame == 3){
            ctx.drawImage(birdImages["yellowBirdMid"], this.x - this.width/2, this.y + this.height/2, this.width, this.height);
            // this.frame++;
        }
        if(this.frame == 2){
            ctx.drawImage(birdImages["yellowBirdDown"], this.x - this.width/2, this.y + this.height/2, this.width, this.height);
            // this.frame++;
        }
    }

}

