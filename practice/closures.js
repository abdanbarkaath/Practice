function outer(a){
    var x = a;
    return function inner(b){
        var y = b;
        console.log(x+y);
    }
}

var run = outer(5)(5);

var x = "asdasdw2sa222";
var store = x.split("");
var p=[]
var person = {
    name:"asda",
    age:874,
    sex:"male"
}
var i;
for(i in person){
    // if(i === 1|| i===2 ||i == 3){
    //     p.push(i)
        console.log(person[i]);
    }


// store.forEach(function(i){
//     console.log(i);
//     if(i == 1|| i==2 ||i == 3){
//         p.push(i)
//         console.log(i);
//     }
// })
console.log(person.name);


