var windowHeight = 500;
var windowWidth = 1000;

function Game() {
    var that = this;

    var leftPaddle = new Paddle("paddleL");
    var rightPaddle = new Paddle("paddleR");

    this.pOneScore = 0;
    this.pTwoScore = 0;

    this.ball = new Ball("ball1");
    this.running = false;

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
        else if(ev.key === " " && !that.running) {
            that.interval = setInterval(function() {
                that.ball.begin(leftPaddle.getPos(), rightPaddle.getPos(), that);
            }, 20);
            that.running = true;
        }
    });
}

Game.prototype.points = function (player) {
    if(player === 1) {
        this.pOneScore++;
        document.getElementById("pOneScore").innerHTML = this.pOneScore.toString();
    } else if(player === 2) {
        this.pTwoScore++;
        document.getElementById("pTwoScore").innerHTML = this.pTwoScore.toString();
    }
};

Game.prototype.stop = function () {
    clearInterval(this.interval);
    this.ball.reset();
    
    this.running = false;
};