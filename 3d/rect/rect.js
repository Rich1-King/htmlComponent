var canvas = document.getElementById('canvas');
var content = document.getElementById('content');
var paint = canvas.getContext('2d');
function drawAxis(){
    drawXAxis();
    drawYAxis();
    drawZAxis();
}

function drawXAxis(){
    var height = canvas.height;
    var width = canvas.width;
    console.log('高:'+height);
    console.log('宽:'+width);
    var centerHeight = findCanvasHeightCenter(height)+50;
    var centerWidth = findCanvasWidthCenter(width);
    paint.strokeStyle = 'white';
    paint.fillStyle = 'red';
    paint.beginPath();
    paint.moveTo(centerWidth, centerHeight);
    paint.lineTo(width-200, centerHeight);
    paint.lineTo(width-200,0);
    paint.lineTo(centerWidth, 0);
    paint.stroke();
    paint.fill();
    paint.save();
}

function drawYAxis(){
    var height = canvas.height;
    var width = canvas.width;
    console.log('高:'+height);
    console.log('宽:'+width);
    var centerHeight = findCanvasHeightCenter(height)+50;
    var centerWidth = findCanvasWidthCenter(width);
    paint.strokeStyle = 'white';
    paint.fillStyle = 'blue';
    paint.beginPath();
    paint.moveTo(centerWidth, centerHeight);
    paint.lineTo(centerWidth, 0);
    paint.lineTo(centerWidth-200, 200);
    paint.lineTo(centerWidth-200, centerHeight+200);
    paint.stroke();
    paint.fill();
    paint.save();
}

function drawZAxis(){
    var height = canvas.height;
    var width = canvas.width;
    console.log('高:'+height);
    console.log('宽:'+width);
    var centerHeight = findCanvasHeightCenter(height)+50;
    var centerWidth = findCanvasWidthCenter(width);
    paint.strokeStyle = 'white';
    paint.fillStyle = 'yellow';
    paint.beginPath();
    paint.moveTo(centerWidth, centerHeight);
    paint.lineTo(centerWidth-200, centerHeight+200);
    paint.lineTo(width-380,centerHeight+200);
    paint.lineTo(width-200, centerHeight);
    paint.stroke();
    paint.fill();
    paint.save();
}

function findCanvasWidthCenter(width){
    return width/2;
}

function findCanvasHeightCenter(height){
    return height/2
}

//初始化画布
function initCanvas(){
    canvas.width = content.offsetWidth;
    canvas.height = content.offsetHeight;
}
initCanvas();
drawAxis();