var ctx = slate.getContext("2d");

var mode = "rect";

function toggleMode(e) {
  console.log("toggling");
  if (mode === "rect") {
    mode = "circ";
  }
  else {
    mode = "rect";
  }
}

function drawRect(e) {
  ctx.fillRect(e.offsetX, e.offsetY, 10, 20);
}

slate.addEventListener("click", drawRect);
