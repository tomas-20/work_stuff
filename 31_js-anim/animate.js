var ctx = slate.getContext("2d");

var requestId;

function clear() {
  ctx.clearRect(0, 0, slate.width, slate.height);
}

var radius = 0;
var growing = true;

function circle(

function drawDot() {
  console.log("drawing dot");
  if (radius <= 0 || radius >= Math.min(slate.width, slate.height)) {
    growing = !growing;
  }
  if (growing) {
    radius ++;
  }
  else {
    radius --;
  }
  clear();
}

function stopIt() {
  console.log("stoping it");
  console.log(requestID);
  window.cancelAnimationFrame(requestID);
}

moveate.addEventListener("click", drawDot);
stopate.addEventListener("click", stopIt);
