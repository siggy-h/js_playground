
function draw(){
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext){
      draw_triangle(canvas)
      //draw_cRect(canvas)
  }
}

function draw_triangle(canvas) {
  // create path, draw into the path, close the path.
  // Once the path has been created, you can stroke or
  // fill the path to render it.
  // beginPath()  closePath()  stroke()  fill()
  var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75,50);  //moveTo(x, y)
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fill();
}

function draw_cRect(canvas) {
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (30, 30, 55, 50);

  // ctx.fillRect(25,25,100,100);
  // ctx.clearRect(45,45,60,60);
  // ctx.strokeRect(50,50,50,50);
}
