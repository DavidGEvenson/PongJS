function Paddle(id) {
    var that = this;
    this.div = id;
    this.top = 200;
    this.length = 100;

    /*
    this.move = function(mv) {
        top += mv;
        if(top < 0) top = 0;
        if(top > 400) top = 400;
        document.getElementById(id).style.top = top.toString() + "px";
    };
    */
}

Paddle.prototype.move = function(mv) {
    this.top += mv;
    if(this.top < 0) this.top = 0;
    if(this.top > windowHeight - this.length) this.top = windowHeight - this.length;
    document.getElementById(this.div).style.top = this.top.toString() + "px";
};
