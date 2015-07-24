
//Selecting the canvas element from the HTML
var canvas = document.querySelector('canvas');

//Creating the Canvas Element context
var ctx = canvas.getContext('2d');

//(x,y,w,h)
//face
ctx.fillStyle = "blue";
ctx.fillRect(0,0,500,500);
//left eye
ctx.fillStyle = "orange";
ctx.fillRect(100,100,50,50);
//right eye
ctx.fillStyle = "orange";
ctx.fillRect(350,100,50,50);
//mouth
ctx.fillStyle = "orange";
ctx.fillRect(150,350,200,50);

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(220,220,50,0,Math.Pi*2,true);
ctx.closePath();
ctx.fill();