
function draw_control(){
  var canvas = document.getElementById('tutorial');

  if (canvas.getContext){
     var ctx = canvas.getContext('2d');

      draw_use2DPath(ctx)
      //draw_comicBubble(ctx)
      //draw_smile(ctx)
      //draw_triangle(ctx)
      //draw_cRect(ctx)
  }
}


function draw_use2DPath(ctx) {
  var rectangle = new Path2D();
  rectangle.rect(10,10,50,50);

  var circle = new Path2D();
  circle.moveTo(125, 35);
  circle.arc(100,35,25,0,2 * Math.PI);

  ctx.stroke(rectangle);
  ctx.fill(circle);

}

function draw_comicBubble(ctx) {
    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();

}

function draw_smile(ctx) {
  ctx.beginPath();
  //arc(x, y, radius, startAngle, endAngle, anticlockwise)
  ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  ctx.moveTo(110,75);
  ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
  ctx.moveTo(65,65);
  ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  ctx.moveTo(95,65);
  ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  ctx.stroke();


}

function draw_triangle(ctx) {
  // create path, draw into the path, close the path.
  // Once the path has been created, you can stroke or
  // fill the path to render it.
  // beginPath()  closePath()  stroke()  fill()
    ctx.beginPath();
    ctx.moveTo(75,50);  //moveTo(x, y)
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
}

function draw_cRect(ctx) {
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (30, 30, 55, 50);

  // ctx.fillRect(25,25,100,100);
  // ctx.clearRect(45,45,60,60);
  // ctx.strokeRect(50,50,50,50);
}
