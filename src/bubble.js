
class Bubble {
    constructor(ctx, canvas){
        this.canvas = canvas;
        this.ctx = ctx;
        // this.bubblex = canvas.width / 2;
        this.bubblex = Math.random() * 780;
        // this.bubbley = canvas.height / 3;
        this.bubbley = Math.random() * (200 - 50) + 50;
        this.dx = 2;
        this.dy = -1;
        this.grav = 0.1;
        this.bubbleRadius = 50;
    }
    
    drawBubble(){
        this.bubbleConstraint();
        this.ctx.beginPath();
        this.ctx.arc(this.bubblex, this.bubbley, this.bubbleRadius, 0, Math.PI * 2);
        this.ctx.strokeStyle = "#0095DD";
        this.ctx.stroke();
        this.ctx.closePath();
        this.dy += this.grav;
        this.bubblex += this.dx;
        this.bubbley += this.dy;
    }
    
    bubbleConstraint() {
        
        if (this.bubblex + this.dx > this.canvas.width - (this.bubbleRadius) || this.bubblex + this.dx < this.bubbleRadius) {
            this.dx = -(this.dx);
        }
    
        if (this.bubbley + this.dy < this.bubbleRadius || this.bubbley + this.dy > this.canvas.height - this.bubbleRadius) {
            this.dy = -(this.dy + this.grav);
        }

        
    }
}

export default Bubble;