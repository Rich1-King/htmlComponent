var now = new Date();
function init(){
    //本月的总天数
    var curMonthDays = new Date(now.getFullYear(), (now.getMonth()+1), 0).getDate(); 
    now.setDate(1);
    var first = now.getDay() + 1;
    for(var day=1,i=first; day<=curMonthDays; i++,day++){
        if(i > 35){
            i = 1;
        }
        var div1 = document.getElementById("day"+i);   
        div1.innerHTML=day;
    }
    showYearAndMonth();   
}

function lastMonth(){
    var month = now.getMonth();
    now.setMonth(month-1);
    //changeOpations("0");
    /*var time = new Date();
    while(true){
        var time1 = new Date();
        if(time1.getTime() - time.getTime() > 2000){
            break;
        }
    }*/
    clearDiv();
    init();
    showYearAndMonth();
    //changeOpations("1");
}
function showYearAndMonth(){
    var year_month = document.getElementById("year_month");
    var month = now.getMonth() + 1;
    year_month.innerHTML = now.getFullYear() + "-" + month;
}
function nextMonth(){
    var month = now.getMonth();
    now.setMonth(month+1);
    clearDiv();
    init();
    showYearAndMonth();
}

function lastMonthEnter(lastMonth){
    lastMonth.style.borderRightColor = "red";
}

function lastMonthOut(lastMonth){
    lastMonth.style.borderRightColor = "gray";
}

function nextMonthEnter(nextMonth){
    nextMonth.style.borderLeftColor = "red";
}
function nextMonthOut(nextMonth){
    nextMonth.style.borderLeftColor = "gray";
}

function clearDiv(){
    for(var i =1; i<=35; i++){
        var div1 = document.getElementById("day"+i);   
        div1.innerHTML="";
    }
}

function changeOpations(value){
    var div = document.getElementById('content');
    div.style.opacity = value;
}