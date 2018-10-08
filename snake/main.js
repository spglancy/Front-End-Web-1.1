var snakeLength = 4;
var vectorX = 10;
var vectorY = 0;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var posX = 40;
var posY = 140;
var tailX;
var tailY;
var appleX = randWithin();
var appleY = randWithin();
function draw() {
    snakeRender();
    setInterval(slither, 100);
    setInterval(appleCheck, 100);
    apple();
    checkBounds();
  }

function apple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX, appleY, 10, 10);
}

function appleCheck() {
    if(posY==appleY && posX==appleX){
        snakeLength +=1;
        appleX = randWithin();
        appleY = randWithin();
        apple();
    }
}

function slither() {
    posX += vectorX;
    posY += vectorY;
    snakeRender();
}

function snakeRender() {
    tailX = posX;
    tailY = posY;
    ctx.fillStyle = "black";
    ctx.fillRect(posX,posY,10,10);
}

function checkBounds() {
    if(posX>300 || posX<0 || posY>300 || posY<0) {
        alert("You Lose");
    }
}

function randWithin() {
    return 10 * (Math.floor(Math.random()*29));
}
