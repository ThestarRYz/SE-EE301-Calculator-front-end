function $(id){return document.getElementById(id);}
var str;
var result;


function display(str0)	
{
	str = document.getElementById("text");
	str.value = str.value + str0;
}


function back()		
{
	str = document.getElementById("text");
	str.value = str.value.substring(0,str.value.length-1);
}

function reset()	
{
	str = document.getElementById("text");
	str.value ="";
}

function power() {
    str = document.getElementById("text");
    str.value = str.value + "**";
}

function sin() {
    str = document.getElementById("text");
    var angle = eval(str.value);
    result = Math.sin(angle * (Math.PI / 180));
    str.value = result;
}

function cos() {
    str = document.getElementById("text");
    var angle = eval(str.value);
    result = Math.cos(angle * (Math.PI / 180));
    str.value = result;
}

function tan() {
    str = document.getElementById("text");
    var angle = eval(str.value);
    result = Math.tan(angle * (Math.PI / 180));
    str.value = result;
}

function sqrt() {
    str = document.getElementById("text");
    var number = eval(str.value);
    result = Math.sqrt(number);
    str.value = result;
}

function log() {
    str = document.getElementById("text");
    var number = eval(str.value);
    result = Math.log10(number);
    str.value = result;
}

function exponential() {
    var str = document.getElementById("text").value;
    if (str === "") {
        document.getElementById("text").value = Math.E;
    } else {
        document.getElementById("text").value += Math.E;
    }
}

function pi() {
    var str = document.getElementById("text").value;
    if (str === "") {
        document.getElementById("text").value = Math.PI;
    } else {
        document.getElementById("text").value += Math.PI;
    }
}

function E() {
    var str = document.getElementById("text").value;
    var num = parseFloat(str);
    var result = num.toExponential();
    document.getElementById("text").value = result;
}









