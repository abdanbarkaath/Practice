const a = (() => {
    return new Promise((resolve,reject) => {
        q=1;
        if(q==1){
            resolve("first function got executed")
        }else{
            reject("wrong input")
        }
    })
})
// a().then((msg) => {
//     console.log(msg);
// })

function b() {
    return new Promise((resolve) => {
        resolve("second function got executed")
    })
}
// b().then((msg) => {
//     console.log(msg);
// })

function c() {
    return new Promise((resolve) => {
       setTimeout(() => {
           resolve("third funciton got executed")
       }, 1000);
    })
}
// c().then((msg) => {
//     console.log(msg);
// })


function d() {
    try {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("fourth funciton got executed")
            }, 2000);
        })
    } catch{
        console.log("error");
    }
}
// d().then((msg) => {
//     console.log(msg);
// })

function e (){
    // return "final function"
    console.log("final function");
}
async function execution() {
    let x = await a();
    console.log(x);
    let y = await b();
    console.log(y);
    let z = await d();
    console.log(z);
    let s = await c();
    console.log(s);
    await e()
}
//imp
//remember that the .then is not called in this if .then would have been called then they would have not executed in that order
execution();