var x = 10;
const y = 20;

function promiseTry(){
    return new Promise((resolve,reject) => {
        if(x == 10){
            resolve("x is same")
        }else{
            reject("not same")
        }
    })
}

promiseTry().then((msg)=>{
    console.log(msg);
}).catch((err) =>{
    console.log(err);
});

var prop = new Promise((resolve,reject)=>{
    if(y == 10){
        resolve("x is same")
    }else{
        reject("not same")
    }
})

prop.then((msg) =>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})