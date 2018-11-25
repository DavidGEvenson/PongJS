var windowHeight = 500;
var windowWidth = 1000;

function Game() {
    var that = this;

    var leftPaddle = new Paddle("paddleL");
    var rightPaddle = new Paddle("paddleR");

    var ball = new Ball("ball1");

    //this.startGame(ball);

    $(document).on('keydown', function (ev) {
        var speed = 15;
        if(ev.key === "q") {
            leftPaddle.move(-speed);
        }
        else if(ev.key === "a") {
            leftPaddle.move(speed);
        }
        else if(ev.key === "p") {
            rightPaddle.move(-speed);
        }
        else if(ev.key === "l") {
            rightPaddle.move(speed);
        }
        else if(ev.key === " ") {
            //console.log(ball);
            setInterval(function() {
                ball.begin();
            }, 20);
        }
    });

    //setInterval(ball.run(), 100);
}

/*
Game.prototype.startGame = function() {
    this.ball.begin();
    //var running = setInterval(this.ball.begin, 100);
};
*/