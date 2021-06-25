/**
 * REM SET
 */
let dW = null,
  vw;
const fz = 16;
const htmlEl = document.querySelector("html");
function calcDw() {
  var d = document.createElement("div");
  d.style.cssText =
    "width:1rem;height:0;overflow: hidden;position:absolute;z-index:-1;visibility: hidden;";
  document.body.appendChild(d);
  dW = d.offsetWidth; // 1rem的实际展示px值
  document.body.removeChild(d);
}

function setFontSize() {
  vw = window.innerWidth;
  // const fontSize = (vw / 750) * 625 * (fz/ dW);
  const fontSize = (vw / 1.2) * (fz / dW);
  htmlEl.style.fontSize = Math.floor(fontSize * 1e2) / 1e2 + "%";
}

calcDw();
setFontSize();
// window.addEventListener("load", function () {
//   window.addEventListener("resize", setFontSize);
// });
