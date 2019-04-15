class Arrow {
    constructor(ctx, canvas, posX){
        this.ctx = ctx;
        this.canvas = canvas;
        this.posX =  posX;
        this.dy = -2;
    }
}

export default Arrow;