var p1 = {
    name:"abdan"
}
var p2 = {
    name:"basil"
}
var p3 = {
    name:"qadeer"
}

function names(){
    return this.name;
}

var x = names.call(p2);
var y = names.apply(p3);
console.log(x);
console.log(y);

var abd = names.bind(p1);
console.log(abd());