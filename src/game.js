import Bubble from './bubble';
import Player from './player';
import Arrow from './arrow';

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var bub = new Bubble(ctx, canvas);
var bub2 = new Bubble(ctx, canvas);
var bub3 = new Bubble(ctx, canvas);
var play = new Player(ctx, canvas);


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bub.drawBubble();
    bub2.drawBubble();
    bub3.drawBubble();
    play.drawPlayer();
}

setInterval(draw, 10);