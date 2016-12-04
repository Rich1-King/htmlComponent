function Axis(){
    this.xAxis = new Array();
    this.yAxis = new Array();
    this.xButton = 10;
    this.yLeft = 10;
}

function drawAxis(paint, axis, width, height){
    paint.strokeStyle = '#ffffff';
    //画ｘ轴
    paint.beginPath();
    paint.moveTo(axis.yLeft, height-axis.xButton);
    paint.lineTo(width-axis.yLeft, height-axis.xButton);
    paint.stroke();

    //画ｙ轴
    paint.beginPath();
    paint.moveTo(axis.yLeft, height-axis.xButton);
    paint.lineTo(axis.yLeft, axis.xButton);
    paint.stroke();

    //画y坐标轴头的箭头
    paint.beginPath();
    paint.moveTo(0,axis.yLeft*2);
    paint.lineTo(axis.yLeft, axis.xButton);
    paint.lineTo(axis.yLeft*2, axis.yLeft*2);
    paint.stroke();

    //画ｘ坐标轴的箭头
    paint.beginPath();
    paint.moveTo(width-(axis.yLeft*2), height-(axis.xButton*2));
    paint.lineTo(width-axis.yLeft, height-axis.xButton);
    paint.lineTo(width-(axis.yLeft*2), height);
    paint.stroke();

    console.log(axis.xAxis.length);
    console.log(axis.yAxis.length);

    //画ｘ轴刻度
    for(var i=0; i<(axis.xAxis.length-1); i++){
        paint.strokeStyle = 'gray';
        paint.beginPath();
        paint.moveTo(axis.yLeft+(i+1)*((width-2*axis.yLeft)/axis.xAxis.length), height-axis.xButton);
        paint.lineTo(axis.yLeft+(i+1)*((width-2*axis.yLeft)/axis.xAxis.length), axis.xButton);
        paint.stroke();
        console.log(axis.yLeft+(i+1)*((width-2*axis.yLeft)/axis.xAxis.length));
    }
    //画ｙ轴刻度
    for(var i=0; i<(axis.yAxis.length -1); i++){
        paint.strokeStyle = 'gray';
        paint.beginPath();
        paint.moveTo(axis.yLeft,axis.xButton+(i+1)*((height-2*axis.xButton)/axis.yAxis.length));
        paint.lineTo(width-axis.yLeft,axis.xButton+(i+1)*((height-2*axis.xButton)/axis.yAxis.length));
        paint.stroke();
    }
}

function drawLineMap(paint, axis, width, height, params){
    paint.strokeStyle = 'red';
    paint.beginPath();
    var basicX = axis.yLeft;
    var basicXScale = (width-2*axis.yLeft)/axis.xAxis.length;
    var basicY = height - axis.xButton;
    var basicYScale = (height-2*axis.xButton)/axis.yAxis.length;
    paint.moveTo(basicX+params[0].x*basicXScale, basicY-(basicYScale*params[0].y));
    var now = new Date();
    for(var i=1; i<params.length; i++){
        paint.lineTo(basicX+params[i].x*basicXScale, basicY-(basicYScale)*params[i].y);
        console.log(basicX+params[i].x*basicXScale);
        console.log(basicY-(basicYScale)*params[i].y);
    }
  paint.stroke();
}

var xAxisList = new Array(1,2,3,4,5,6,7,8,9,10);
var yAxisList = new Array(1,2,3,4,5,6,7,8,9,10);
var axis = new Axis();
axis.xAxis = xAxisList;
axis.yAxis = yAxisList;;
axis.xButton = 10;
axis.yLeft = 10;

var line1 = document.getElementById('line1');
var paint = line1.getContext('2d');
var width = line1.clientWidth;
var height = line1.clientHeight;
var param = [
    {
        'x':0,
        'y':3
    },
    {
        'x':1,
        'y':2.5
    },
    {
        'x':2,
        'y':5
    },
    {
        'x':3,
        'y':7
    },
    {
        'x':4,
        'y':3
    },
    {
        'x':5,
        'y':1
    },
    {
        'x':6,
        'y':8
    },
    {
        'x':7,
        'y':5
    },
    {
        'x':8,
        'y':6
    },
    {
        'x':9,
        'y':4
    }  
];
window.onload = drawAxis(paint, axis, width, height);
window.onload = drawLineMap(paint, axis, width, height, param);
