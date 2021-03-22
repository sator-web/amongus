


//canvasの初期値設定//
function expandCanvas(){
    var b = document.body;
    var d = document.documentElement;
    canvas.width = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
    canvas.height = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);
}



canvas.onmousedown
	= function(e){
		startX=e.pageX;
		startY=e.pageY;
		mousedown=true;
		console.log(startX,startY);
		}


canvas.onmousemove
	= function(e){
			if(mousedown){
			draw(e.pageX,e.pageY);
			}

canvas.onmouseup
	=function(e){
		mousedown=false;
	}
}



//描画処理//

function draw(x,y){
	var target=$("canvas");
	var context=target.getContext('2d');
	context.beginPath();
	context.moveTo(startX,startY);
	context.lineTo(x,y);
	context.closePath();
	context.stroke();

	//次の座標の出発点を設定
        startX=x;  
	startY=y;
	}



//DOMのobjを返す//		
function $(id){
	return document.getElementById(id);
}
