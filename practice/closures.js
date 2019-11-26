// function outer(a){
//     var x = a;
//     return function inner(b){
//         var y = b;
//         console.log(x+y);
//     }
// }

// var run = outer(5)(5);

// var x = "asdasdw2sa222";
// var store = x.split("");
// var p=[]
// var person = {
//     name:"asda",
//     age:874,
//     sex:"male"
// }
// var i;
// for(i in person){
    // if(i === 1|| i===2 ||i == 3){
    //     p.push(i)
    //     console.log(person[i]);
    // }


// store.forEach(function(i){
//     console.log(i);
//     if(i == 1|| i==2 ||i == 3){
//         p.push(i)
//         console.log(i);
//     }
// })
// console.log(person.name);

//adding //importaaannnntnttttnnntntnt

// for(var i=0;i<5;i++){
//     function run(){
//         function j(){

//         }
//         console.log(i);
//     }
//     run();
// }

//practice .html very very important

function run(){
    var i=0;
    var x = document.getElementById("add");
    x.addEventListener("click",function(){
        i++;
        console.log(i);
    })
}
run();

/// increment when a function is called

var x = 0;
function update(){
    x++;
    console.log(x);
}
for( var i=1;i<5;i++){
    update();
}




