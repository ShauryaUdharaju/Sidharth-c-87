var canvas = new fabric.Canvas("myCanvas")

block_image_width = 30
block_image_height = 30

player_x = 10
player_y = 10

var player_object = ""


function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x,
        })
        canvas.add(player_object)
    })
}



function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,
            left:player_x,
        })
        canvas.add(block_image_object)
    })
}

window.addEventListener("keydown", myKeyDown)

function myKeyDown(e)
{
keyPreesed = e.keyCode
console.log(keyPreesed)
if (e.shiftKey == true && keyPreesed == '80')
{
    console.log("p and shift pressed")
    block_image_width = block_image_width + 10
    block_image_height = block_image_height + 10
    document.getElementById("current_width").innerHTML=block_image_width
    document.getElementById("current_height").innerHTML=block_image_height
}

if (e.shiftKey == true && keyPreesed == '77')
{
    console.log("m and shift pressed")
    block_image_width = block_image_width - 10
    block_image_height = block_image_height - 10
    document.getElementById("current_width").innerHTML=block_image_width
    document.getElementById("current_height").innerHTML=block_image_height
}

if (keyPreesed == '38')
{
 //   up()
    console.log("up")
}

if (keyPreesed == '37')
{
 //   left()
    console.log("left")
}

if (keyPreesed == '40')
{
 //   down()
    console.log("down")
}

if (keyPreesed == '39')
{
  //  right()
    console.log("right")
}

if (keyPreesed == '87')
{
    new_image('wall.jpg')
    console.log("w")
}

if (keyPreesed == '85')
{
    new_image('unique.png')
    console.log("u")
}

if (keyPreesed == '68')
{
    new_image('dark_green.png')
    console.log("d")
}

if (keyPreesed == '71')
{
    new_image('ground.png')
    console.log("g")
}

if (keyPreesed == '76')
{
    new_image('light_green.png')
    console.log("l")
}

if (keyPreesed == '82')
{
    new_image('roof.jpg')
    console.log("r")
}

if (keyPreesed == '84')
{
    new_image('trunk.jpg')
    console.log("t")
}

if (keyPreesed == '89')
{
    new_image('yellow_wall.png')
    console.log("y")
}

}

