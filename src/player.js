class Player {
    constructor(ctx, canvas) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerWidth = 30;
        this.playerHeight = 30;
        this.playerY = (this.canvas.height - this.playerHeight);
        this.playerX = (this.canvas.width - this.playerWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);

    }

    drawPlayer() {
        this.move();
        // this.shoot();
        this.ctx.beginPath();
        this.ctx.rect(this.playerX, this.playerY, this.playerWidth, this.playerHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();

    }

    keyDownHandler(e) {
        if (e.key == 'right' || e.key == 'ArrowRight') {
            this.rightPressed = true;
        }
        else if (e.key == 'left' || e.key == 'ArrowLeft') {
            this.leftPressed = true;
        }
    }

    keyUpHandler(e) {
        if (e.key == 'right' || e.key == 'ArrowRight') {
            this.rightPressed = false;
        }
        else if (e.key == 'left' || e.key == 'ArrowLeft') {
            this.leftPressed = false;
        }
    }

    move() {
        if (this.rightPressed && this.playerX < (this.canvas.width - this.playerWidth)) {
            this.playerX += 5;
        }
        if (this.leftPressed && this.playerX > 0) {
            this.playerX -= 5;
        }
    }
}





export default Player;