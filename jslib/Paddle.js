function Paddle(i) {
    this.id = i;
    this.top = 200;

    this.move = function(mv) {
        top += mv;
        if(top < 0) top = 0;
        document.getElementById(id).style.top = top.toString();
    }
}

/*
Paddle.prototype.move = function(mv) {
    this.top += mv;
    if(this.top < 0) this.top = 0;
    document.getElementById(this.id).style.top = this.top;
};
*/