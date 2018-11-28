function Ball(id) {
    this.div = id;
    this.top = 240;
    this.left = 490;
    this.speedX = 3;
    this.speedY = 3;
}

Ball.prototype.begin = function(paddleL, paddleR, game) {
    this.left += this.speedX;
    this.top += this.speedY;

    if (this.left <= -20) {
        game.stop();
        game.points(2);
    }
    if (this.left >= windowWidth) {
        game.stop();
        game.points(1);
    }

    if(this.left > 27 && this.left <= 36 && this.top > paddleL[0]-10 && this.top < paddleL[1]+10) {
        this.speedX *= -1;
    }

    if(this.left < 953 && this.left >= 944 && this.top > paddleR[0]-10 && this.top < paddleR[1]+10) {
        this.speedX *= -1;
    }

    if (this.top <= 0) this.speedY *= -1;
    if (this.top >= windowHeight - 20) this.speedY *= -1;

    document.getElementById(this.div).style.top = this.top.toString() + "px";
    document.getElementById(this.div).style.left = this.left.toString() + "px";
};

Ball.prototype.reset = function() {
    console.log("reset");

    this.top = 240;
    this.left = 490;
    this.speedX = 3;
    this.speedY = 3;

    document.getElementById(this.div).style.top = this.top.toString() + "px";
    document.getElementById(this.div).style.left = this.left.toString() + "px";
};