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
