var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext('2d');

ctx2.strokeStyle = "black";
ctx2.beginPath()
for (var i = 0; i < 19; i++) {
	ctx2.moveTo(10+20*i,10)
	ctx2.lineTo(10+20*i,370)
	ctx2.moveTo(10,10+20*i)
	ctx2.lineTo(370,10+20*i)
}
ctx2.stroke()
// end画盘子画完了。。。。。。


var flag = true;
var arr = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];


canvas2.onclick = function(){
	console.log("点击进入：offsetX="+event.offsetX + " offsetY="+event.offsetY )
	for (var i = 0; i < 19; i++) {
		if ((Math.abs(event.offsetX - (10+20*i))) <= 10 ) {
			cirPosX = 10+20*i ;
			var x = i;
		}
		if ((Math.abs(event.offsetY - (10+20*i))) <= 10 ) {
			cirPosY = 10+20*i ;
			var y = i;
		}
	}
	// end 点击判定圆心坐标。。

	if ( x != undefined && y!=undefined && arr[x][y] == 0 ) {
		ctx2.beginPath();
		if (flag) {
			ctx2.fillStyle = "black";
			ctx2.arc(cirPosX,cirPosY, 10, 0, Math.PI*2, false);
			arr[x][y] = 1;
			console.log("黑色="+1)
		}else{
			ctx2.fillStyle = "white";
			ctx2.arc(cirPosX,cirPosY, 10, 0, Math.PI*2, false);
			arr[x][y] = 2;
			ctx2.stroke();
			console.log("白色="+2)
		}
		ctx2.fill();
		flag = !flag;
	}
	// end 点击判定 黑白落子，加不能重复
	var winFlag;

	if (arr[x][y] == arr[x-1][y]) {		
		if (arr[x-1][y] == arr[x-2][y]) {
			if (arr[x-2][y] == arr[x-3][y]) {
				if (arr[x-3][y] == arr[x-4][y]) {
					alert("你后赢了")
				}else{
				}
			}else{
			}
		}else{
		}
	}else{
		for (var i = 0; i < 4; i++) {
			if (arr[x][y] != arr[x+1+i][y]) {	
				winFlag = 0;
				break;
			}else{
				winFlag = 1;
			}	
		}
	}

}




























var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// ctx.strokeStyle = "red";
// ctx.lineWidth = 2;
ctx.beginPath();
for (var i = 0; i < 19; i++) {		
	ctx.moveTo(10,10+20*i);
	ctx.lineTo(370,10+20*i);			
	ctx.moveTo(10+20*i,10);
	ctx.lineTo(10+20*i,370);
}
ctx.stroke();
//end 画格子 
var blorwh;
var matrix = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
var mtxPosX, mtxPosY;
$("#canvas").click(function(event){
	console.log(event.offsetX);
	var arcPosX, arcPosY;
	for (var j = 0; j < 19; j++) {
		if ((Math.abs(event.offsetX - (10+20*j)))<10) {
			arcPosX = 10 + 20*j;
			mtxPosX = j;
		}
		if ((Math.abs(event.offsetY - (10+20*j)))<10) {
			arcPosY = 10 + 20*j;
			mtxPosY = j;
		}
	}
	
	if (matrix[mtxPosX][mtxPosY] == 0) {
		blorwh = !blorwh;
		ctx.beginPath();
		if (blorwh) {
			ctx.fillStyle = "blue";
			ctx.arc(arcPosX, arcPosY, 10, 0, Math.PI*2, false)
			matrix[mtxPosX][mtxPosY] = 1;
		}else{
			ctx.fillStyle = "white";
			ctx.arc(arcPosX, arcPosY, 10, 0, Math.PI*2, false)
			ctx.stroke();
			matrix[mtxPosX][mtxPosY] = 2;
		}
		ctx.fill();
	}
});