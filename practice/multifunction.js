function run(a){
    var x = a;
    return function doRun(b){
        var y = b;
        return function area(c){
            var z = c;
            return x+y+z;
        }
    }
}

var check = run(5)(10)(15);
console.log(check);

var obj1={
    name:"abdan"
}
var obj2={
    name:"basil"
}
var obj3={
    name:"qadeer"
}

function callName(){
    console.log(this.name);
}

var value = callName.bind(obj2);

value();