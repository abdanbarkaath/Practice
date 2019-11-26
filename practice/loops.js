var obj = {
    name:"abdan",
    age:20,
}
var arr = [10,20,30]

function run(x){
    with(x){
        console.log(x);
    }
}

// run(obj);

for(var j in obj){
    // console.log(j);
    console.log(obj[j]);
}

// arr.forEach(function(e){
// console.log(e);
// })

for(var i of arr){
    console.log(i);
}
