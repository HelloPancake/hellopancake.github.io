import Bubble from './bubble';
import Player from './player';
import Bullet from './bullet'

class Game {
    constructor(){
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this.ctx, this.canvas);
        this.draw = this.draw.bind(this);
        this.bubbleNum = 1;
        this.bulletNum = 3;
        this.bubblesArr = [];
        this.bulletsArr = [];
        this.score = 0;
        this.notHit = true;
        document.addEventListener("keydown", this.shootDownHandler.bind(this), false)
        for (var i = 0; i < this.bubbleNum; i++) {
            this.bubblesArr[i] = new Bubble(this.ctx, this.canvas, 70, Math.random() * 600 + 70, Math.random() * (250) + 100, Math.random() < 0.5 ? 2 : -2, Math.random() < 0.5 ? -3 : -1);
        }
    }
        draw() {
            if(this.notHit){
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.player.drawPlayer();
                this.playerHitDetection();
                this.hitBubble();
                this.bubblesArr.forEach(bub => bub.drawBubble());
                if(this.bulletsArr.length != 0){
                        this.bulletsArr.forEach(bullet => bullet.drawBullet());
                }
                this.drawScore();
                this.bulletCheck();
            }
        }
        
        update(){
            this.hitBubble();
        }
        

        drawScore() {
            this.ctx.font = "30px Ubuntu";
            this.ctx.fillStyle = "#90EE90";
            this.ctx.fillText("Score: " + this.score, 8, 30);
        }
        

        bulletCheck() {
            for (let b = 0; b < this.bulletsArr.length; b++) {
                if (this.bulletsArr[b].bulletY < 0) {
                    if (b == 0) {
                        this.bulletsArr = this.bulletsArr.slice(1);
                    }
                    else if (b == this.bulletsArr.length - 1) {
                        this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                    }
                    else {
                        this.bubblesArr = this.bubblesArr.slice(0, b).concat(this.bubblesArr.slice(b + 1));
                    }
                }
            }
        }

        hitBubble(){
                for(var k = 0; k < this.bubblesArr.length; k++){
                    if(this.bulletsArr.length != 0 ){
                        for (let b = 0; b < this.bulletsArr.length; b++) {
                            if (this.bubblesArr[k] != null){
                            let a = this.bubblesArr[k].bubbleRadius + this.bulletsArr[b].bulletRadius;
                            let x = this.bubblesArr[k].bubbleX - this.bulletsArr[b].bulletX;
                            let y = this.bubblesArr[k].bubbleY - this.bulletsArr[b].bulletY;
                            
                            if (a >= Math.sqrt((x * x) + ( y * y ))){
                                if (this.bubblesArr[k].bubbleRadius >= 40)  {
                                    if(k == 0){
                                        this.score += (300 - (this.bubblesArr[k].bubbleRadius * 3 ))
                                        this.bubblesArr.push(new Bubble(this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY , 3, -7));
                                        this.bubblesArr.push(new Bubble(this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX - 60), this.bubblesArr[k].bubbleY, -3, -7));
                                        this.bubblesArr = this.bubblesArr.slice(1);
                                        if (b == 0) {
                                            this.bulletsArr = this.bulletsArr.slice(1);
                                        }
                                        // else if (b == this.bulletsArr.length - 1){
                                        //     this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        // }
                                        else {
                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        }
                                    }
                                    else {
                                        this.score += (300 - (this.bubblesArr[k].bubbleRadius * 3))
                                        this.bubblesArr.push(new Bubble(this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY, 3, -7));
                                        this.bubblesArr.push(new Bubble(this.ctx, this.canvas, this.bubblesArr[k].bubbleRadius - 15, (this.bubblesArr[k].bubbleX - 60), this.bubblesArr[k].bubbleY, -3, -7));
                                        this.bubblesArr = this.bubblesArr.slice(0, k).concat(this.bubblesArr.slice(k+1));
                                        if (b == 0) {
                                            this.bulletsArr = this.bulletsArr.slice(1);
                                        }
                                        // else if (b == this.bulletsArr.length - 1) {
                                        //     this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        // }
                                        else {
                                                this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        };
                                }
                                
                            }
                                else {
                                    if (k == 0) {
                                        this.score += (300 - (this.bubblesArr[k].bubbleRadius * 3))
                                        this.bubblesArr.push(new Bubble(this.ctx, this.canvas, 70, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY, 3, -7));
                                        this.bubblesArr = this.bubblesArr.slice(1);
                                        if (b == 0) {
                                            this.bulletsArr = this.bulletsArr.slice(1);
                                        }
                                        // else if (b == this.bulletsArr.length - 1) {
                                        //     this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        // }
                                        else {
                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        }
                                    }
                                    else {
                                        this.bubblesArr.push(new Bubble(this.ctx, this.canvas, 70, (this.bubblesArr[k].bubbleX + 60), this.bubblesArr[k].bubbleY, 3, -7));

                                        this.bubblesArr = this.bubblesArr.slice(0, k).concat(this.bubblesArr.slice(k + 1));
                                        if (b == 0) {
                                            this.bulletsArr = this.bulletsArr.slice(1);
                                        }
                                        // else if (b == this.bulletsArr.length - 1) {
                                        //     this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        // }
                                        else {
                                            this.bulletsArr = this.bulletsArr.slice(0, b).concat(this.bulletsArr.slice(b + 1));
                                        };
                                    }
                                }
                            }
                        }
                    }   
                }
            }
        }

        gameOver(){
            this.notHit = false; 
            document.getElementById("retryMenu").style.display = "flex";
            document.getElementById("retryButton").addEventListener("click", () => {
                document.getElementById("retryMenu").style.display = 'none';
                document.location.reload();
            })
        }

        playerHitDetection(){
            for (let k = 0; k < this.bubblesArr.length; k++) {
                if (this.hitPlayer(this.bubblesArr[k])){
                    this.gameOver();
                };  
            }
        }

        hitPlayer(bubble){
                let distX = Math.abs(bubble.bubbleX - this.player.playerX - this.player.playerWidth / 2);
                let distY = Math.abs(bubble.bubbleY - this.player.playerY - this.player.playerHeight / 2);

                if (distX > (this.player.playerWidth / 2 + bubble.bubbleRadius)) {
                    return false;
                }
                if (distY > (this.player.playerHeight / 2 + bubble.bubbleRadius)) {
                    return false;
                }

                if (distX <= (this.player.playerWidth / 2)) {
                    return true;               
                }
                if (distY <= (this.player.playerHeight / 2)) {
                    return true;
                }

                let dx = distX - this.player.playerWidth / 2;
                let dy = distY - this.player.playerHeight / 2;
                return (dx * dx + dy * dy <= (bubble.bubbleRadius * bubble.bubbleRadius));   
        }

        shootDownHandler(e) {
            if (e.key == " " && this.bulletsArr.length < 3) {
                this.bulletsArr.push(new Bullet(this.ctx, this.canvas, this.player.playerX + this.player.playerWidth / 2));
            }
        }

      

}     

export default Game;




