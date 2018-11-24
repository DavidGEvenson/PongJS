function Game() {
    var leftPaddle = Paddle("paddleL");
    var rightPaddle = Paddle("paddleR");
    var ball = Ball();

    $(document).on('keypress', function (ev) {
        console.log(ev);

        if(ev.key === "q") {
            leftPaddle.move(-10);
        }
    });
}

/*
$(document).on('keypress', function (ev) {
    console.log(ev);
    if(ev.key === "q") {
        this.leftPaddle.move(-10);
    }
});
*/