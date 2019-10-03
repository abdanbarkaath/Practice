const x = 0;

function PromiseTry(){
    return new Promise((resolve,reject) => {
        if(x == 1 ){
            reject("inside reject")
        }else{
            resolve("the value of x = "+x);
        }
    })
}

PromiseTry().then((message) => {
    console.log(message);
}).catch((error)=>{
    console.log(error);
})


var j = () =>{
    console.log("Arrow function");
}

j();


const a = 20;
const b = 20;

var sum = (x,y)=>x+y;
var val = sum(a,b);
console.log(val);
