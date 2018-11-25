function Ball(id) {
    this.div = id;
    this.top = 240;
    this.left = 490;
    this.speedX = 3;
    this.speedY = 3;
}

Ball.prototype.begin = function() {
    this.left += this.speedX;
    this.top += this.speedY;

    if (this.left <= 0) this.speedX *= -1;
    if (this.left >= windowWidth - 20) this.speedX *= -1;

    if (this.top <= 0) this.speedY *= -1;
    if (this.top >= windowHeight - 20) this.speedY *= -1;

    document.getElementById(this.div).style.top = this.top.toString() + "px";
    document.getElementById(this.div).style.left = this.left.toString() + "px";

};