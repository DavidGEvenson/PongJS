function Paddle(id) {
    this.div = id;
    this.top = 200;
    this.length = 100;
    this.speed = 15;
}

Paddle.prototype.move = function(dir) {
    this.top += this.speed * dir;
    if(this.top < 0) this.top = 0;
    if(this.top > windowHeight - this.length) this.top = windowHeight - this.length;
    document.getElementById(this.div).style.top = this.top.toString() + "px";
};

Paddle.prototype.getPos = function () {
    return [this.top, this.top + this.length];
};

Paddle.prototype.resetPos = function () {
    this.top = 200;
};