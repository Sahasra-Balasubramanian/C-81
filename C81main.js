canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(250,200,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
radius=document.getElementById("radius").value;
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
circle(mouse_x,mouse_y,radius);
}
function circle(mouse_x,mouse_y,radius){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=4;
    ctx.arc(mouse_x,mouse_y,radius,0,2*Math.PI);
    ctx.stroke();
}
function clearArea(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(370,200,40,0,2*Math.PI);
ctx.stroke();
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(490,200,40,0,2*Math.PI);
ctx.stroke();
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(310,230,40,0,2*Math.PI);
ctx.stroke();
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(430,230,40,0,2*Math.PI);
ctx.stroke();