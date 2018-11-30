var windowHeight = 500;
var windowWidth = 1000;

function Game() {
    var that = this;

    this.leftPaddle = new Paddle("paddleL");
    this.rightPaddle = new Paddle("paddleR");

    this.pOneScore = 0;
    this.pTwoScore = 0;

    this.ball = new Ball("ball1");
    this.running = false;

    $(document).on('keydown', function (ev) {
        if(ev.key === "q") {
            that.leftPaddle.move(-1);
        }
        else if(ev.key === "a") {
            that.leftPaddle.move(1);
        }
        else if(ev.key === "p") {
            that.rightPaddle.move(-1);
        }
        else if(ev.key === "l") {
            that.rightPaddle.move(1);
        }
        else if(ev.key === " " && !that.running) {
            that.interval = setInterval(function() {
                that.ball.begin(that.leftPaddle.getPos(), that.rightPaddle.getPos(), that);
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
    this.leftPaddle.resetPos();
    this.rightPaddle.resetPos();
    this.running = false;
};