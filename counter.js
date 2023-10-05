function $(id){return document.getElementById(id);}
var str;
var result;

function display(str0)	
{
	str = document.getElementById("text");
	str.value = str.value + str0;
}

function equals()	
{
	str = document.getElementById("text");
	result = eval(str.value);
	str.value = result;
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




