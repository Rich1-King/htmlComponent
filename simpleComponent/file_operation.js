function readFile(url){
    console.log('开始读取文件......');
    var xmlHttp;
    var content;
    if(window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest();
    }else{
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    try{
        xmlHttp.open('GET',url, false);
        xmlHttp.send();
        return xmlHttp.responseText;
    }catch(error){
        return '<center><h1>该页面不存在</h1></center>';
    }
}