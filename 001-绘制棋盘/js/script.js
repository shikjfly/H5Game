//第一种
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
for (var i = 0; i < 4; i++) {
ctx.fillRect(0,(0+80*i),40,40);
ctx.fillRect(80,(0+80*i),40,40);
ctx.fillRect(160,(0+80*i),40,40);
ctx.fillRect(240,(0+80*i),40,40);

ctx.fillRect(40,(40+80*i),40,40);
ctx.fillRect(120,(40+80*i),40,40);
ctx.fillRect(200,(40+80*i),40,40);
ctx.fillRect(280,(40+80*i),40,40);
}

// 第二种
var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
ctx1.fillStyle = "red";

for (var i = 0; i < 4; i++) {
for (var j = 0; j < 4; j++) {
ctx1.fillRect(80*j,80*i,40,40);
ctx1.fillRect(40+80*j,40+80*i,40,40);
}
}

// 第三种
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
for (var i = 0; i < 4; i++) {
for (var j = 0; j < 4; j++) {
ctx2.fillStyle = "black";
ctx2.fillRect(80*j,80*i,40,40);
ctx2.fillRect(40+80*j,40+80*i,40,40);
ctx2.fillStyle = "red";
ctx2.fillRect(80*j+40,80*i,40,40);
ctx2.fillRect(80*j,40+80*i,40,40);
}
}


// 练习用

var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");
// 画蓝格子
ctx3.fillStyle = "blue";
ctx3.fillRect(10,10,50,50)
// 画红线条格子
ctx3.strokeStyle = "red";
ctx3.strokeRect(60,60,100,50);
// 写字
ctx3.font = "20px song"
ctx3.fillText("这个格子用来练习", 90,30);
// 画线条
ctx3.strokeStyle = "black";
ctx3.beginPath();
ctx3.moveTo(60,110)
ctx3.lineTo(160,160)
ctx3.stroke()
// 画线条：填充
ctx3.fillStyle = "yellow";
ctx3.beginPath();
ctx3.moveTo(160,160)
ctx3.lineTo(60,190)
ctx3.lineTo(60,230)
ctx3.fill()
// 画圆：线条
ctx3.strokeStyle = "green";
ctx3.beginPath();
ctx3.arc(250,150,50,0,Math.PI*2, false)
ctx3.stroke()
// 画圆：填充
ctx3.fillStyle = "orange";
ctx3.beginPath();
ctx3.arc(200,250,50,0,Math.PI*2, false)
ctx3.fill()
