var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var txts = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
txts = txts.split("");
var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;

function draw() {
  // ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
          ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, c.width, c.height);
//         font colour
  ctx.fillStyle = "teal";
  ctx.font = font_size + "px arial";
  for (var i = 0; i < drops.length; i++) {
    var text = txts[Math.floor(Math.random() * txts.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > c.height || Math.random() > 0.98) drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 20);