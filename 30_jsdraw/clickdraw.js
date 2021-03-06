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

function rgb(r, g, b) {
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRgbValue(position, max) {
  return Math.round(position * 255 / max);
}

function draw(e) {
  let color = rgb(0, getRgbValue(e.offsetX, slate.width), getRgbValue(e.offsetY, slate.height));
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  if (shape === "rect") {
    drawRect(e);
  }
  else {
    drawCirc(e);
  }
}

function clear(e) {
  ctx.clearRect(0, 0, slate.width, slate.height);
}

shapeButton.addEventListener("click", toggleShape);
typeButton.addEventListener("click", toggleType);
clearButton.addEventListener("click", clear);
slate.addEventListener("click", draw);
