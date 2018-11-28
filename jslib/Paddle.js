function Paddle(id) {
    var that = this;
    this.div = id;
    this.top = 200;
    this.length = 100;
}

Paddle.prototype.move = function(mv) {
    this.top += mv;
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