
var canvas = new fabric.Canvas('myCanvas');

playerY = 1;
playerX = 1;

block_image_height = 350;
block_image_heigt = 430;

var block_image_object = "";

function newImage(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_height);
        block_image_object.scaleToHeight(block_image_heigt);
        block_image_object.set({
            top: playerY,
            left: playerX
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '69') 
    {   playerX = 50;
        newImage("rr1.png");
        console.log("r")
        
    }
    if (keyPressed == '86') {
        playerX = 200;
        newImage('gr.png');
        console.log("r")
    }
    if (keyPressed == '65') {
        playerX = 350;
        newImage('yr.png');
        console.log("y")
    }
    if (keyPressed == '82') {
        playerX = 600;
        newImage('pr.png');
        console.log("p")
    }
    if (keyPressed == '73') {
        playerX = 700;
        newImage('br.png');
        console.log("b")
    }

}