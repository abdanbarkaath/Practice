const fetch = require("node-fetch");

// var x = 10;
// const y = 20;

// function promiseTry(t){
//     return new Promise((resolve,reject) => {
//         if(t == 10){
//             resolve("function promise")
//         }else{
//             reject("not equal")
//         }
//     })
// }

// promiseTry(11).then((msg)=>{
//     console.log(msg);
// }).catch((err) =>{
//     console.log(err);
// });

// var prop = new Promise((resolve,reject)=>{
//     if(y == 10){
//         resolve("var promise")
//     }else{
//         reject("not same")
//     }
// })

// prop.then((msg) =>{
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
// })

// function sum(){
//     console.log("20 is the sum");
// }
// async function run(){
//     let x = await sum();
// }
// run();

// //online best async example

function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow");
        console.log("you waited 2 sec");
      }, 2000);
    });
  }

  function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast");
        console.log("you waited 2 + 1 sec");
      }, 1000);
    });
  }
//   // resolveAfter2Seconds().then((msg)=>{
//   //   console.log(msg);
//   // }).catch(e=>{
//   //   console.log(e);
//   // })
//   // resolveAfter1Second().then((msg)=>{
//   //   console.log(msg);
//   // }).catch(e=>{
//   //   console.log(e);
//   // })

  async function sequentialStart() {
    console.log('==SEQUENTIAL START==');

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second();
    console.log(fast); // 3. this runs 3 seconds after 1.
  }

//remember that the .then is not called in this if .then would have been called then they would have not executed in that order
sequentialStart();

// // result = 0
// // function a (){
// //   let p = new Promise((resolve,reject)=>{
// //     for (let i = 0 ; i<=50000;i++){
// //       result+= i;
// //     }
// //     resolve(result)
// //   })
// //   return p
// // }

// // const a = (() => {
// //   const b = new Promise((resolve) => {
// //     for (let i = 0 ; i<=50000000000; i++){
// //       result += i;
// //     }
// //     resolve(result);
// //   })
// //   return b;
// // });

// // a().then((result) => {
// //   console.log(result);
// // });

// // a().then((result) => {
// //   console.log(result);
// // });


// // function a(){
// //   for (let i=0;i<=50000000000;i++){
// //     result += i
// //   }
// //   return result
// // } 

// // console.log(a());

// let title;
// function getUsers() {
//   return new Promise((resolve, reject) => {
//     let value = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         title = json.title
//         return title
//         });
//         if(value){
//           resolve(value)
//         }else{
//           reject("i think it is undefined")
//         }
//   })
// }
// getUsers().then((title)=>{
//   console.log(title);
// }).catch(e=>{
//   console.log(e);
// })

// getUsers()

// async function asyncUsers(){
//   let value = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => {
//     title = json.title
//     return title
//     });
//     console.log(value+" await");
// } 

// asyncUsers()
// function a(){
//   console.log("ahahah");
// }
// a()

