
class Player{
    constructor(ctx, canvas) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerWidth = 20;
        this.playerHeight = 20;
        this.playerY = (this.canvas.height - this.playerHeight);
        this.playerX = (this.canvas.width - this.playerWidth) / 2;
        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false)
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false)
        document.addEventListener("keydown", this.shootDownHandler.bind(this), false)
        document.addEventListener("keyup", this.shootUpHandler.bind(this), false)
    }
    
    drawPlayer() {
        this.shoot();
        this.move();
        this.ctx.beginPath();
        this.ctx.rect(this.playerX, this.playerY, this.playerWidth, this.playerHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
        
    }

    shootArrow(){
            this.ctx.beginPath();
            this.ctx.moveTo(this.playerX, this.playerY);
            this.ctx.lineTo(this.playerX, 0);
            this.ctx.closePath();
            this.ctx.lineWidth = 0.95;
            this.ctx.strokeStyle = '#666666';
            this.ctx.stroke();
    }
    
    shootDownHandler(e) {
        if( e.key == " "){
            this.spacePressed = true;
        }
    }

    shootUpHandler(e) {
        if( e.key == " "){
            this.spacePressed = false;
        }
    }

    keyDownHandler(e) {
        if (e.key == 'right' || e.key == 'ArrowRight') {
            this.rightPressed = true;
        }
        else if (e.key == 'left' || e.key == 'ArrowLeft'){            
            this.leftPressed = true;
        }
    }
    
    keyUpHandler(e){
        if (e.key == 'right' || e.key == 'ArrowRight') {
            this.rightPressed = false;
        }
        else if (e.key == 'left' || e.key == 'ArrowLeft') {
            this.leftPressed = false;
        }
    }

    
    shoot(){
        if (this.spacePressed) {
            this.shootArrow();
        }
    }
    
    move(){
        if(this.rightPressed && this.playerX < (this.canvas.width - this.playerWidth)){
            this.playerX += 5;
        }
        if(this.leftPressed && this.playerX > 0) {
            this.playerX -= 5;
        }
    }
}





export default Player;
