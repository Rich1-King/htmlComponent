function tip(){
    var tipArray = new Array('a', 'aaa', 'bb', 'bca');
    var search = document.getElementById("search");
    var tip = document.getElementById("tip");
    var nodes = tip.childNodes;
    for(var i = 1; i<nodes.length; i++){
        tip.removeChild(nodes[i]);
    }
    if("" == search.value || null == search.value){
        tip.style.height = "0px";
    }
    for(var i=0; i<tipArray.length; i++){
        if(!tipArray[i].indexOf(search.value)){
            var span = document.createElement("span");
            span.style.display = "block";
            span.innerHTML = tipArray[i];
            tip.appendChild(span);
        }
    }

}