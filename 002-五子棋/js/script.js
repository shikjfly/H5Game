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
canvas2.onclick = function(event){
	for (var i = 0; i < 19; i++) {
		if (Math.abs(event.offsetX - (10+20*i)) <= 10 ){
			var arrNumX = i;
		}
		if (Math.abs(event.offsetY - (10+20*i)) <= 10 ){
			var arrNumY = i;
		}
	}

	if (arr[arrNumX][arrNumY] == 0) {
		ctx2.beginPath();
		if (flag) {
			ctx2.fillStyle = "black";					
			ctx2.arc(10+20*arrNumX,10+20*arrNumY,10,0,Math.PI*2,false);
			arr[arrNumX][arrNumY] = 1;
		}else{		
			ctx2.fillStyle = "white";
			ctx2.arc(10+20*arrNumX,10+20*arrNumY,10,0,Math.PI*2,false);
			ctx2.stroke();
			arr[arrNumX][arrNumY] = 2;
		}
		ctx2.fill();	
		console.log(flag)
		flag = !flag;
	}


	for (var i = 18; i > 3; i--) {
		for(var j = 18; j > 3; j--){
			if (arr[i][j]==1 && arr[i-1][j]==1 && arr[i-2][j]==1 && arr[i-3][j]==1 && arr[i-4][j]==1) {
				alert("黑子赢了");
			}
			// if (arr[i][j]==1 && arr[i][j+1]==1 && arr[i][j+2]==1 && arr[i][j+3]==1 && arr[i][j+4]==1) {
			// 	alert("黑子赢了");
			// }
			if (arr[i][j]==2 && arr[i-1][j]==2 && arr[i-2][j]==2 && arr[i-3][j]==2 && arr[i-4][j]==2) {
				alert("白子赢了");
			}
			// if (arr[i][j]==2 && arr[i][j+1]==2 && arr[i][j+2]==2 && arr[i][j+3]==2 && arr[i][j+4]==2) {
			// 	alert("白子赢了");
			// }
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