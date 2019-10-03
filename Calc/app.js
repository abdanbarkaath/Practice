var display = document.getElementById("display");
var x;
var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")
var btn5 = document.getElementById("btn5")
var btn6 = document.getElementById("btn6")
var btn7 = document.getElementById("btn7")
var btn8 = document.getElementById("btn8")
var btn9 = document.getElementById("btn9")
var btnp = document.getElementById("btn+")
var btn0 = document.getElementById("btn0")
var btnm = document.getElementById("btn-")
var btnmul = document.getElementById("btn*")
var btneq = document.getElementById("btn=")
var btnd= document.getElementById("btn/")
var btnd= document.getElementById("btn/")
var btnclear= document.getElementById("btn-cl")




btn1.addEventListener("click",function(){
    x=btn1.value
    display.value+=x
})
btn2.addEventListener("click",function(){
    x=btn2.value
    display.value+=x
})
btn3.addEventListener("click",function(){
    x=btn3.value
    display.value+=x
})
btn4.addEventListener("click",function(){
    x=btn4.value
    display.value+=x
})
btn5.addEventListener("click",function(){
    x=btn5.value
    display.value+=x
})
btn6.addEventListener("click",function(){
    x=btn6.value
    display.value+=x
})
btn7.addEventListener("click",function(){
    x=btn7.value
    display.value+=x
})
btn8.addEventListener("click",function(){
    x=btn8.value
    display.value+=x
})
btn9.addEventListener("click",function(){
    x=btn9.value
    display.value+=x
})
btnp.addEventListener("click",function(){
    x=btnp.value
    display.value+=x
})
btn0.addEventListener("click",function(){
    x=btn0.value
    display.value+=x
})
btnm.addEventListener("click",function(){
    x=btnm.value
    display.value+=x
})
btnmul.addEventListener("click",function(){
    x=btnmul.value
    display.value+=x
})
btneq.addEventListener("click",function(){
    console.log(display.value);
    x = eval(display.value);
    display.value="";
    display.value+=x;
})
btnd.addEventListener("click",function(){
    x=btnd.value
    display.value+=x
})
btnclear.addEventListener("click",function(){
    display.value="";
});