var x = 10;
const y = 20;

function promiseTry(){
    return new Promise((resolve,reject) => {
        if(x == 10){
            resolve("function promise")
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
        resolve("var promise")
    }else{
        reject("not same")
    }
})

prop.then((msg) =>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
})

function sum(){
    console.log("20 is the sum");
}
async function run(){
    let x = await sum();
}
run();

//online best async example

function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast");
        console.log("fast promise is done");
      }, 1000);
    });
  }
  
  async function sequentialStart() {
    console.log('==SEQUENTIAL START==');
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
  }

sequentialStart();
