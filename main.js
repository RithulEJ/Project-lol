var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color ="magenta";
width = 1;
canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    color = document.getElementById("color").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of x and y coordinates");
        console.log("x="+last_position_of_x+"y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y coordinates =");
        console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();


    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}