var ctx = slate.getContext("2d");

var shape = "rect";
var type = "fill"

function toggleShape(e) {
  if (shape === "rect") {
    shape = "circ";
  }
  else if (shape === "circ") {
    shape = "rect";
  }
}

function toggleType(e) {
  if (type === "fill") {
    type = "stroke";
  }
  else if (type === "stroke") {
    type = "fill";
  }
}

function drawRect(e) {
  let func;
  if (type === "fill") {
    ctx.fillRect(e.offsetX, e.offsetY, 50, 100);
  }
  else if (type === "stroke") {
    ctx.strokeRect(e.offsetX, e.offsetY, 50, 100);
  }
}

function drawCirc(e) {
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 50, 0, Math.PI * 2);
  if (type === "fill") {
    ctx.fill();
  }
  else if (type === "stroke") {
    ctx.stroke();
  }
}

function draw(e) {
  if (shape === "rect") {
    drawRect(e);
  }
  else {
    drawCirc(e);
  }
}

shapeButton.addEventListener("click", toggleShape);
typeButton.addEventListener("click", toggleType);
slate.addEventListener("click", draw);
