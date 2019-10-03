


var xyz={
    name:"hello",
    age:20,
    car:"honda"
}
var k={
    name:"hello",
    age:21,
    car:"honda",
}
// console.log(xyz.name === k.name);



function compareObj(obj1,obj2){
    var a=0;
    var b=0;
    for(var val in obj1){
        a++
    }
    for(var val in obj2){
        b++;
    }
    if(a>b || a==b){
        for(var val in obj1){
            console.log(obj1[val]===obj2[val]);
        }
    }else{
        for(var val in obj2){
            console.log(obj1[val]===obj2[val]);
        }
    }
}
compareObj(xyz,k)



function makeCar(name){
    var c={};
    c.name=name;
    return c;
}

var c1 = new makeCar("honda");
var c2 =  makeCar("lambo");

console.log(c1);
console.log(c2);



