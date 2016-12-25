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

    //画ｘ轴刻度
    for(var i=0; i<(axis.xAxis.length-1); i++){
        paint.strokeStyle = 'gray';
        paint.beginPath();
        paint.moveTo(axis.yLeft+(i+1)*((width-2*axis.yLeft)/axis.xAxis.length), height-axis.xButton);
        paint.lineTo(axis.yLeft+(i+1)*((width-2*axis.yLeft)/axis.xAxis.length), axis.xButton);
        paint.stroke();
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
    for(var i=1; i<params.length; i++){
        paint.lineTo(basicX+params[i].x*basicXScale, basicY-(basicYScale)*params[i].y);
    }
  　 paint.stroke();
}

function drawRunLineMap(paint, axis, width, height, params){
    paint.strokeStyle = 'red';
    paint.lineWidth = 2;
    paint.beginPath();
    paint.lineJoin = 'round';
    var basicX = axis.yLeft;
    var basicXScale = (width-2*axis.yLeft)/axis.xAxis.length;
    var basicY = height - axis.xButton;
    var basicYScale = (height-2*axis.xButton)/axis.yAxis.length;
    paint.moveTo(basicX+params[num-1].x*basicXScale, basicY-(basicYScale*params[num-1].y));
    paint.lineTo(basicX+params[num].x*basicXScale, basicY-(basicYScale)*params[num].y);
    if(num == params.length-1){
        clearInterval(timer);
    }  
  　paint.stroke();
    console.log(num);
    num++;
}

var xAxisList = new Array(1,2,3,4,5,6,7,8,9,10);
var yAxisList = new Array(1,2,3,4,5,6,7,8,9,10);
var axis = new Axis();
axis.xAxis = xAxisList;
axis.yAxis = yAxisList;;
axis.xButton = 10;
axis.yLeft = 10;

var line1 = document.getElementById('line1');
var paint1 = line1.getContext('2d');
var width1 = line1.clientWidth;
var height1 = line1.clientHeight;
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
window.onload = drawAxis(paint1, axis, width1, height1);
window.onload = drawLineMap(paint1, axis, width1, height1, param);

var line2 = document.getElementById('line2');
var paint2 = line2.getContext('2d');
var width2 = line2.clientWidth;
var height2 = line2.clientHeight;
window.onload = drawAxis(paint2, axis, width2, height2);
var num = 1;
var timer = setInterval('drawRunLineMap(paint2, axis, width2, height2, param)', 130);


//柱形图

function drawBarChart(paint, axis, width, height, param){
    var rectWidth = ((width-2*axis.yLeft)/param.length)*0.8;
    var basicX = ((width-2*axis.yLeft)/param.length)*0.1 + axis.yLeft;
    var widthX = ((width-2*axis.yLeft)/param.length)
    var basicY = height - axis.xButton;
    var heightY = (height - 2*axis.xButton)/axis.xAxis.length;
    paint.fillStyle = 'blue';
    paint.fillRect(basicX+numBar*widthX, basicY, rectWidth, (-param[numBar].y)*heightY);
    console.log('x:'+basicX+numBar*widthX);
    console.log('y:'+basicY);
    console.log('width:'+rectWidth);
    console.log('height:'+(-param[numBar].y));
    if(numBar == (param.length-1)){
        clearInterval(timerBar);
    }
    numBar++;
}

//随机颜色函数
function getRandomColor(){
return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
} 

var color = new Array();
var color1 = new Array();
var color2 = new Array();
function drawRunBarChar(paint, axis, width, height, param){
    var rectWidth = ((width-2*axis.yLeft)/param.length)*0.8;
    var basicX = ((width-2*axis.yLeft)/param.length)*0.1 + axis.yLeft;
    var widthX = ((width-2*axis.yLeft)/param.length)
    var basicY = height - axis.xButton;
    var heightY = (height - 2*axis.xButton)/axis.xAxis.length;
    var time = 100;
    for(var i=0; i<param.length; i++){
        if(numRunBar == 0){
            color1[i] = getRandomColor();
            color2[i] = getRandomColor();
        }
        color[i] = paint.createLinearGradient(0,0,300,300);
        color[i].addColorStop(0,color1[i]);
        color[i].addColorStop(1,color2[i]);
        paint.fillStyle = color[i];
        paint.strokeStyle = color[i];
        console.log(paint.fillStyle);
        var addHeight = ((param[i].y)*(heightY))/time; 
        paint.strokeRect(basicX+i*widthX, basicY-addHeight*numRunBar, rectWidth, -addHeight);
        paint.fillRect(basicX+i*widthX, basicY-addHeight*numRunBar, rectWidth, -addHeight);
        if(i==0){
            console.log('runBarY:'+(basicY-addHeight*numRunBar));
        }
    }
    if(numRunBar == (time-1)){
        //clearInterval(timerRunBar);
        numRunBar = 0;
        paramBar = [
        {
            'x':0,
            'y':Math.random()*10
        },
        {
            'x':1,
            'y':Math.random()*10
        },
        {
            'x':2,
            'y':Math.random()*10
        },
        {
            'x':3,
            'y':Math.random()*10
        },
        {
            'x':4,
            'y':Math.random()*10
        },
        {
            'x':5,
            'y':Math.random()*10
        },
        {
            'x':6,
            'y':Math.random()*10
        },
        {
            'x':7,
            'y':Math.random()*10
        },
        {
            'x':8,
            'y':Math.random()*10
        },
        {
            'x':9,
            'y':Math.random()*10
        }
    ];
        paint.clearRect(0,0,width, height);
        drawAxis(paint3, axis, width3, height3);
        return;
    }
    numRunBar++;
}

var paramBar = [
    {
        'x':0,
        'y':Math.random()*10
    },
    {
        'x':1,
        'y':Math.random()*10
    },
    {
        'x':2,
        'y':Math.random()*10
    },
    {
        'x':3,
        'y':Math.random()*10
    },
    {
        'x':4,
        'y':Math.random()*10
    },
    {
        'x':5,
        'y':Math.random()*10
    },
    {
        'x':6,
        'y':Math.random()*10
    },
    {
        'x':7,
        'y':Math.random()*10
    },
    {
        'x':8,
        'y':Math.random()*10
    },
    {
        'x':9,
        'y':Math.random()*10
    }
]
var line3 = document.getElementById('line3');
var paint3 = line3.getContext('2d');
var width3 = line3.clientWidth;
var height3 = line3.clientHeight;
window.onload = drawAxis(paint3, axis, width3, height3);
//var numBar = 0;
//var timerBar = setInterval('drawBarChart(paint3, axis, width3, height3, paramBar)',300);
var numRunBar = 0;
var timerRunBar = setInterval('drawRunBarChar(paint3, axis, width3, height3, paramBar)',20);



//多条线条动态
function drawManyRunLineMap(paint, axis, width, height, params){
    paint.strokeStyle = 'red';
    paint.lineJoin = 'round';
    var basicX = axis.yLeft;
    var basicXScale = (width-2*axis.yLeft)/axis.xAxis.length;
    var basicY = height - axis.xButton;
    var basicYScale = (height-2*axis.xButton)/axis.yAxis.length;
    console.log('param:'+params.length);
    if(num1 != params[0].length){
        for(var i=0; i<params.length; i++){
            if(i==0){
                paint.strokeStyle = 'red';
            }
            if(i==1){
                paint.strokeStyle = 'green';
            }
            if(i==2){
                paint.strokeStyle = 'blue';
            }
            paint.beginPath();
            paint.moveTo(basicX+params[i][num1-1].x*basicXScale, basicY-(basicYScale*params[i][num1-1].y));
            paint.lineTo(basicX+params[i][num1].x*basicXScale, basicY-(basicYScale)*params[i][num1].y);
            paint.stroke();
        }
    }else{ 
        paint.clearRect(0,0,width, height);
        drawAxis(paint4, axis4, width4, height4);
        for(var i=0; i<params.length; i++){
            if(i==0){
                paint.strokeStyle = 'red';
            }
            if(i==1){
                paint.strokeStyle = 'green';
            }
            if(i==2){
                paint.strokeStyle = 'blue';
            }
            for(var v=0; v<params[i].length; v++){
                if(v==params[i].length-1){
                    params[i][v].y = Math.random()*10; 
                }else{
                    params[i][v].y = params[i][v+1].y;
                }
            }
            paint.beginPath();
            paint.moveTo(basicX+params[i][0].x*basicXScale, basicY-(basicYScale*params[i][0].y));
            for(var j=1; j<params[i].length; j++){
                paint.lineTo(basicX+params[i][j].x*basicXScale, basicY-(basicYScale)*params[i][j].y);
            }
            paint.stroke();
        }
        return;
        //clearInterval(timer1);
    } 
    console.log(num1);
    num1++;
}


var xAxisList4 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);
var yAxisList4 = new Array(1,2,3,4,5,6,7,8,9,10);
var axis4 = new Axis();
axis4.xAxis = xAxisList4;
axis4.yAxis = yAxisList4;
axis4.xButton = 10;
axis4.yLeft = 10;

var div_line4 = document.getElementById('div_line4');
var line4 = document.getElementById('line4');
console.log('width:'+div_line4.clientWidth);
console.log('height:'+div_line4.clientHeight);
line4.width = div_line4.clientWidth;
line4.height = div_line4.clientHeight;
var paint4 = line4.getContext('2d');
var width4 = line4.clientWidth;
var height4 = line4.clientHeight;
window.onload = drawAxis(paint4, axis4, width4, height4);

var paramsA = new Array();

paramsA[0] = [
    {
        'x':0,
        'y':Math.random()*10
    },
    {
        'x':1,
        'y':Math.random()*10
    },
    {
        'x':2,
        'y':Math.random()*10
    },
    {
        'x':3,
        'y':Math.random()*10
    },
    {
        'x':4,
        'y':Math.random()*10
    },
    {
        'x':5,
        'y':Math.random()*10
    },
    {
        'x':6,
        'y':Math.random()*10
    },
    {
        'x':7,
        'y':Math.random()*10
    },
    {
        'x':8,
        'y':Math.random()*10
    },
    {
        'x':9,
        'y':Math.random()*10
    },
    {
        'x':10,
        'y':Math.random()*10
    },
    {
        'x':11,
        'y':Math.random()*10
    },
    {
        'x':12,
        'y':Math.random()*10
    },
    {
        'x':13,
        'y':Math.random()*10
    },
    {
        'x':14,
        'y':Math.random()*10
    },
    {
        'x':15,
        'y':Math.random()*10
    },
    {
        'x':16,
        'y':Math.random()*10
    },
    {
        'x':17,
        'y':Math.random()*10
    },
    {
        'x':18,
        'y':Math.random()*10
    },
    {
        'x':19,
        'y':Math.random()*10
    }  ,{
        'x':20,
        'y':Math.random()*10
    },
    {
        'x':21,
        'y':Math.random()*10
    },
    {
        'x':22,
        'y':Math.random()*10
    },
    {
        'x':23,
        'y':Math.random()*10
    },
    {
        'x':24,
        'y':Math.random()*10
    },
    {
        'x':25,
        'y':Math.random()*10
    },
    {
        'x':26,
        'y':Math.random()*10
    },
    {
        'x':27,
        'y':Math.random()*10
    },
    {
        'x':28,
        'y':Math.random()*10
    },
    {
        'x':29,
        'y':Math.random()*10
    }    
];
paramsA[1]=[
    {
        'x':0,
        'y':Math.random()*10
    },
    {
        'x':1,
        'y':Math.random()*10
    },
    {
        'x':2,
        'y':Math.random()*10
    },
    {
        'x':3,
        'y':Math.random()*10
    },
    {
        'x':4,
        'y':Math.random()*10
    },
    {
        'x':5,
        'y':Math.random()*10
    },
    {
        'x':6,
        'y':Math.random()*10
    },
    {
        'x':7,
        'y':Math.random()*10
    },
    {
        'x':8,
        'y':Math.random()*10
    },
    {
        'x':9,
        'y':Math.random()*10
    },
    {
        'x':10,
        'y':Math.random()*10
    },
    {
        'x':11,
        'y':Math.random()*10
    },
    {
        'x':12,
        'y':Math.random()*10
    },
    {
        'x':13,
        'y':Math.random()*10
    },
    {
        'x':14,
        'y':Math.random()*10
    },
    {
        'x':15,
        'y':Math.random()*10
    },
    {
        'x':16,
        'y':Math.random()*10
    },
    {
        'x':17,
        'y':Math.random()*10
    },
    {
        'x':18,
        'y':Math.random()*10
    },
    {
        'x':19,
        'y':Math.random()*10
    }  ,{
        'x':20,
        'y':Math.random()*10
    },
    {
        'x':21,
        'y':Math.random()*10
    },
    {
        'x':22,
        'y':Math.random()*10
    },
    {
        'x':23,
        'y':Math.random()*10
    },
    {
        'x':24,
        'y':Math.random()*10
    },
    {
        'x':25,
        'y':Math.random()*10
    },
    {
        'x':26,
        'y':Math.random()*10
    },
    {
        'x':27,
        'y':Math.random()*10
    },
    {
        'x':28,
        'y':Math.random()*10
    },
    {
        'x':29,
        'y':Math.random()*10
    }    
];
paramsA[2]=[
    {
        'x':0,
        'y':Math.random()*10
    },
    {
        'x':1,
        'y':Math.random()*10
    },
    {
        'x':2,
        'y':Math.random()*10
    },
    {
        'x':3,
        'y':Math.random()*10
    },
    {
        'x':4,
        'y':Math.random()*10
    },
    {
        'x':5,
        'y':Math.random()*10
    },
    {
        'x':6,
        'y':Math.random()*10
    },
    {
        'x':7,
        'y':Math.random()*10
    },
    {
        'x':8,
        'y':Math.random()*10
    },
    {
        'x':9,
        'y':Math.random()*10
    },
    {
        'x':10,
        'y':Math.random()*10
    },
    {
        'x':11,
        'y':Math.random()*10
    },
    {
        'x':12,
        'y':Math.random()*10
    },
    {
        'x':13,
        'y':Math.random()*10
    },
    {
        'x':14,
        'y':Math.random()*10
    },
    {
        'x':15,
        'y':Math.random()*10
    },
    {
        'x':16,
        'y':Math.random()*10
    },
    {
        'x':17,
        'y':Math.random()*10
    },
    {
        'x':18,
        'y':Math.random()*10
    },
    {
        'x':19,
        'y':Math.random()*10
    }  ,{
        'x':20,
        'y':Math.random()*10
    },
    {
        'x':21,
        'y':Math.random()*10
    },
    {
        'x':22,
        'y':Math.random()*10
    },
    {
        'x':23,
        'y':Math.random()*10
    },
    {
        'x':24,
        'y':Math.random()*10
    },
    {
        'x':25,
        'y':Math.random()*10
    },
    {
        'x':26,
        'y':Math.random()*10
    },
    {
        'x':27,
        'y':Math.random()*10
    },
    {
        'x':28,
        'y':Math.random()*10
    },
    {
        'x':29,
        'y':Math.random()*10
    }    
];

var num1 = 1;
var timer1 = setInterval('drawManyRunLineMap(paint4, axis4, width4, height4, paramsA)', 300);

//曲线图
var xAxisList5 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);
var yAxisList5 = new Array(1,2,3,4,5,6,7,8,9,10);
var axis5 = new Axis();
axis5.xAxis = xAxisList5;
axis5.yAxis = yAxisList5;
axis5.xButton = 10;
axis5.yLeft = 10;

var div_line5 = document.getElementById('div_line5');
var line5 = document.getElementById('line5');
line5.width = div_line5.clientWidth;
line5.height = div_line5.clientHeight;
var paint5 = line5.getContext('2d');
var width5 = line5.clientWidth;
var height5 = line5.clientHeight;

console.log('width:'+div_line5.clientWidth);
console.log('height:'+div_line5.clientHeight);
window.onload = drawAxis(paint5, axis5, width5, height5);

function drawCurveMap(paint, axis, width, height, params){
    drawCurve(paint, params, width, height, axis);
}

function drawCurve(paint, params, width, height, axis){
    var speed = 0.1;
    var a = 0.1;
    var b = 0.1;
    var pAx, pAy, pBx, pBy;
    var basicX = axis.yLeft;
    var basicXScale = (width-2*axis.yLeft)/axis.xAxis.length;
    var basicY = height - axis.xButton;
    var basicYScale = (height-2*axis.xButton)/axis.yAxis.length;
    if(i != (params.length - 1)){
        if(i == 0){
            pAx = params[0].x + (params[1].x - params[0].x)*a;
            pAy = params[0].y + (params[1].y - params[0].y)*a;
            pBx = params[1].x - (params[2].x - params[0].x)*b;
            pBy = params[1].y - (params[2].y - params[0].y)*b;
        }else if(i == params.length-2){
            pAx = params[params.length-2].x + (params[params.length - 1].x - params[params.length - 3].x)*a;
            pAy = params[params.length-2].y + (params[params.length - 1].y - params[params.length - 3].y)*a;
            pBx = params[params.length-1].x - (params[params.length - 1].x - params[params.length - 2].x)*b;
            pBy = params[params.length-1].y - (params[params.length - 1].y - params[params.length - 2].y)*b;
        }else{
            pAx = params[i].x + (params[i+1].x - params[i-1].x)*a;
            pAy = params[i].y + (params[i+1].y - params[i-1].y)*a;
            pBx = params[i+1].x - (params[i+2].x - params[i].x)*b;
            pBy = params[i+1].y - (params[i+2].y - params[i].y)*b;
        }
        paint.strokeStyle = 'blue';
        paint.beginPath();
        paint.moveTo(basicX+params[i].x*basicXScale, basicY - (basicYScale*params[i].y));
        paint.bezierCurveTo(basicX+pAx*basicXScale, basicY - (basicYScale*pAy), basicX+pBx*basicXScale, basicY - (pBy*basicYScale), basicX+params[i+1].x*basicXScale, basicY - params[i+1].y*basicYScale);
        paint.stroke();
    }else{
        clearInterval(timer2);
        return;
    }
    i++;
}
var i = 0;
var timer2 = setInterval('drawCurveMap(paint5, axis5, width5, height5, paramsA[0])',300);

//曲线动态图

paramsRun = [
    {
        'x':0,
        'y':Math.random()*10
    },
    {
        'x':1,
        'y':Math.random()*10
    },
    {
        'x':2,
        'y':Math.random()*10
    },
    {
        'x':3,
        'y':Math.random()*10
    },
    {
        'x':4,
        'y':Math.random()*10
    },
    {
        'x':5,
        'y':Math.random()*10
    },
    {
        'x':6,
        'y':Math.random()*10
    },
    {
        'x':7,
        'y':Math.random()*10
    },
    {
        'x':8,
        'y':Math.random()*10
    },
    {
        'x':9,
        'y':Math.random()*10
    },
    {
        'x':10,
        'y':Math.random()*10
    },
    {
        'x':11,
        'y':Math.random()*10
    },
    {
        'x':12,
        'y':Math.random()*10
    },
    {
        'x':13,
        'y':Math.random()*10
    },
    {
        'x':14,
        'y':Math.random()*10
    },
    {
        'x':15,
        'y':Math.random()*10
    },
    {
        'x':16,
        'y':Math.random()*10
    },
    {
        'x':17,
        'y':Math.random()*10
    },
    {
        'x':18,
        'y':Math.random()*10
    },
    {
        'x':19,
        'y':Math.random()*10
    }  ,{
        'x':20,
        'y':Math.random()*10
    },
    {
        'x':21,
        'y':Math.random()*10
    },
    {
        'x':22,
        'y':Math.random()*10
    },
    {
        'x':23,
        'y':Math.random()*10
    },
    {
        'x':24,
        'y':Math.random()*10
    },
    {
        'x':25,
        'y':Math.random()*10
    },
    {
        'x':26,
        'y':Math.random()*10
    },
    {
        'x':27,
        'y':Math.random()*10
    },
    {
        'x':28,
        'y':Math.random()*10
    },
    {
        'x':29,
        'y':Math.random()*10
    }    
];

var xAxisList6 = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30);
var yAxisList6 = new Array(1,2,3,4,5,6,7,8,9,10);
var axis6 = new Axis();
axis6.xAxis = xAxisList6;
axis6.yAxis = yAxisList6;
axis6.xButton = 10;
axis6.yLeft = 10;

var div_line6 = document.getElementById('div_line6');
var line6 = document.getElementById('line6');
line6.width = div_line6.clientWidth;
line6.height = div_line6.clientHeight;
var paint6 = line6.getContext('2d');
var width6 = line6.clientWidth;
var height6 = line6.clientHeight;

console.log('width:'+div_line6.clientWidth);
console.log('height:'+div_line6.clientHeight);
window.onload = drawAxis(paint6, axis6, width6, height6);

function drawRunCurveMap(paint, axis, width, height, params){
    drawRunCurve(paint, params, width, height, axis);
}

function drawRunCurve(paint, params, width, height, axis){
    var speed = 0.1;
    var a = 0.1;
    var b = 0.1;
    var pAx, pAy, pBx, pBy;
    var basicX = axis.yLeft;
    var basicXScale = (width-2*axis.yLeft)/axis.xAxis.length;
    var basicY = height - axis.xButton;
    var basicYScale = (height-2*axis.xButton)/axis.yAxis.length;
    if(j != (params.length-1)){
        if(j == 0){
            pAx = params[0].x + (params[1].x - params[0].x)*a;
            pAy = params[0].y + (params[1].y - params[0].y)*a;
            pBx = params[1].x - (params[2].x - params[0].x)*b;
            pBy = params[1].y - (params[2].y - params[0].y)*b;
        }else if(j == params.length-2){
            pAx = params[params.length-2].x + (params[params.length - 1].x - params[params.length - 3].x)*a;
            pAy = params[params.length-2].y + (params[params.length - 1].y - params[params.length - 3].y)*a;
            pBx = params[params.length-1].x - (params[params.length - 1].x - params[params.length - 2].x)*b;
            pBy = params[params.length-1].y - (params[params.length - 1].y - params[params.length - 2].y)*b;
        }else{
            pAx = params[j].x + (params[j+1].x - params[j-1].x)*a;
            pAy = params[j].y + (params[j+1].y - params[j-1].y)*a;
            pBx = params[j+1].x - (params[j+2].x - params[j].x)*b;
            pBy = params[j+1].y - (params[j+2].y - params[j].y)*b;
        }
        paint.strokeStyle = 'yellow';
        paint.beginPath();
        paint.moveTo(basicX+params[j].x*basicXScale, basicY - (basicYScale*params[j].y));
        paint.bezierCurveTo(basicX+pAx*basicXScale, basicY - (basicYScale*pAy), basicX+pBx*basicXScale, basicY - (pBy*basicYScale), basicX+params[j+1].x*basicXScale, basicY - params[j+1].y*basicYScale);
        paint.stroke();
    }else{
        paint.clearRect(0,0,width, height);
        drawAxis(paint, axis, width, height);
        for(var v=0; v<params.length; v++){
            if(v==params.length-1){
                params[v].y = Math.random()*10; 
            }else{
                params[v].y = params[v+1].y;
            }
        }

        for(var k=0; k<params.length-1; k++){
            if(k == 0){
                pAx = params[0].x + (params[1].x - params[0].x)*a;
                pAy = params[0].y + (params[1].y - params[0].y)*a;
                pBx = params[1].x - (params[2].x - params[0].x)*b;
                pBy = params[1].y - (params[2].y - params[0].y)*b;
            }else if(k == params.length-2){
                pAx = params[params.length-2].x + (params[params.length - 1].x - params[params.length - 3].x)*a;
                pAy = params[params.length-2].y + (params[params.length - 1].y - params[params.length - 3].y)*a;
                pBx = params[params.length-1].x - (params[params.length - 1].x - params[params.length - 2].x)*b;
                pBy = params[params.length-1].y - (params[params.length - 1].y - params[params.length - 2].y)*b;
            }else{
                pAx = params[k].x + (params[k+1].x - params[k-1].x)*a;
                pAy = params[k].y + (params[k+1].y - params[k-1].y)*a;
                pBx = params[k+1].x - (params[k+2].x - params[k].x)*b;
                pBy = params[k+1].y - (params[k+2].y - params[k].y)*b;
            }
            paint.strokeStyle = 'yellow';
            paint.beginPath();
            paint.moveTo(basicX+params[k].x*basicXScale, basicY - (basicYScale*params[k].y));
            paint.bezierCurveTo(basicX+pAx*basicXScale, basicY - (basicYScale*pAy), basicX+pBx*basicXScale, basicY - (pBy*basicYScale), basicX+params[k+1].x*basicXScale, basicY - params[k+1].y*basicYScale);
            paint.stroke();
        }
        //clearInterval(timer2);
        return;
    }
    j++;
}
var j = 0;
var timer3 = setInterval('drawRunCurveMap(paint6, axis6, width6, height6, paramsRun)',300);

//画扇形
var div_line7 = document.getElementById('div_line7');
var line7 = document.getElementById('line7');
line7.width = div_line7.clientWidth;
line7.height = div_line7.clientHeight;
var paint7 = line7.getContext('2d');
var width7 = line7.clientWidth;
var height7 = line7.clientHeight;
console.log('width7:'+width7);
console.log('height7:'+height7);

function drawArc(paint, centerX, centerY, radius, beginDeg, endDeg, direction, color){
    paint.fillStyle = color;
    paint.strokeStyle = color;
    paint.lineWidth = 0;
    
    paint.beginPath();
    paint.moveTo(centerX, centerY);
    paint.lineTo(centerX+radius*Math.cos(beginDeg), centerY+radius*Math.sin(beginDeg));
    paint.lineTo(centerX+radius*Math.cos(endDeg), centerY+radius*Math.sin(endDeg));
    paint.lineTo(centerX, centerY);
    paint.stroke();
    paint.fill();

    paint.beginPath();
    paint.arc(centerX, centerY, radius, beginDeg, endDeg, direction);
    paint.closePath();
    paint.fill();
}
function drawCicle(paint){
    drawArc(paint, 100, 100, 80, 0, Math.PI*0.5, false, 'yellow');
    drawArc(paint, 100, 100, 80, Math.PI*0.5, Math.PI*1, false, 'red');
    drawArc(paint, 100, 100, 80, Math.PI*1, Math.PI*1.5, false, 'blue');
    drawArc(paint, 100, 100, 80, Math.PI*1.5, Math.PI*2, false, 'green');
}
drawCicle(paint7);


//画旋转的圆
function drawRunCicle(paint){
    drawArc(paint, 300, 100, 80, Math.PI*t,Math.PI*t + Math.PI*0.5, false, 'yellow');
    drawArc(paint, 300, 100, 80, Math.PI*0.5 + Math.PI*t, Math.PI*1 + Math.PI*t, false, 'red');
    drawArc(paint, 300, 100, 80, Math.PI*1 + Math.PI*t, Math.PI*1.5 + Math.PI*t, false, 'blue');
    drawArc(paint, 300, 100, 80, Math.PI*1.5 + Math.PI*t, Math.PI*2 + Math.PI*t, false, 'green');
    t = t+0.05;
}

var t = 0;
setInterval('drawRunCicle(paint7, t)', 80);

//画动态生成的圆
var cicleNum = 0;
function drawRunCicle1(paint){
    var color;
    if(cicleNum <= 0.4){
        color = 'yellow';
    }
    if(cicleNum > 0.4 && cicleNum <= 0.9){
        color = 'red';
    }
    if(cicleNum > 0.9 && cicleNum <= 1.4){
        color = 'blue';
    }
    if(cicleNum > 1.4 && cicleNum <= 1.9){
        color = 'green';
    }
    if(cicleNum >= 2){
        drawRunCicle(paint, cicleNum);
        cicleNum =　cicleNum + 0.1;
        return;
    }
    drawArc(paint, 500, 100, 80, Math.PI*cicleNum, Math.PI*cicleNum + Math.PI*0.1, false, color);
    cicleNum = cicleNum + 0.1;
}
setInterval('drawRunCicle1(paint7)', 100);
