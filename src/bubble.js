
class Bubble {
    constructor(ctx, canvas, radius, x, y, dx, dy){
        this.canvas = canvas;
        this.ctx = ctx;
        this.bubbleX = x;
        this.bubbleY = y;
        // this.bubbleX = Math.random() * 500;
        // this.bubbleY = Math.random() * (200 - 50) + 50;
        // this.dx = Math.random() < 0.5 ? 2 : -2;
        // this.dy = Math.random() < 0.5 ? -4 : -2;
        this.dx = dx;
        this.dy = dy;
        this.grav = 0.1;
        // this.bubbleRadius = 50;
        this.bubbleRadius = radius;
        // x, y, radius
    }
    
    drawBubble(){
        
        this.bubbleConstraint();
        this.ctx.beginPath();
        this.ctx.arc(this.bubbleX, this.bubbleY, this.bubbleRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();
        this.dy += this.grav;
        this.bubbleX += this.dx;
        this.bubbleY += this.dy;
        
    }
    
    bubbleConstraint() {
        if (this.bubbleX + this.dx > this.canvas.width - (this.bubbleRadius) || this.bubbleX + this.dx < this.bubbleRadius) {
            this.dx = -(this.dx);
        }
        if (this.bubbleY + this.dy < this.bubbleRadius || this.bubbleY + this.dy > this.canvas.height - this.bubbleRadius) {
            this.dy = -(this.dy + this.grav);
        }  
    }
}

export default Bubble;