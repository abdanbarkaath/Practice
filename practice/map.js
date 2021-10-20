var people = [
  {id: 1,name: "abdan"},
  {id: 10,name: "basil"},
  {id: 24,name: "qadeer"},
  {id: 31,name: "turab"},
  {id: 28,name: "altaf"},
  {id: 11,name: "salam"}
];

// var officer = [];
// people.forEach(function(x){
//     officer.push(x)
// })

// console.log(officer);
// var officer = people.map(function(x){
//     return x
// })

// console.log(officer[0].name);
// var z = officer;
// console.log(z);

// var ids = people.filter(function(y){
//     return y.id>1;
// })

// console.log(ids[1].name);

// var a = people.reduce(function(accumulator, x) {
//   return accumulator.id < x.id ? accumulator : x;
// }, {});
// console.log(a);

// var j = people.filter(x => {
//   return x.id > 0;
// });
// console.log(j);
// console.log(j.reverse());
// console.log(j.reverse());

//main map filter reduce

var filt = people.filter(val=>val.id>15);
console.log(filt);//returns multiple values

var maps = people.map(val => val);
console.log(maps);//returns whole array 
console.log((maps === people)+"check");

var reduces = people.reduce((ac,val)=>ac.id>val.id?ac:val);
console.log(reduces);//returns only one value which is statisfied

var finds = people.find(val=>val.name==="abdan");
console.log(finds+" finds");//searches and returns the first value from the array

var somes = people.some(val=>val.id>20);
console.log(somes);//returns true or false

var everys = people.every(val=>val.id>20);
console.log(everys);//returns true or false when all the values ate satisfied

var reduced = people.reduce((ac,val)=> x = val.id+ac,0);
console.log(reduced);//reduce to calculate the sum

var includes = people.includes(Object);
console.log(includes);

var somes = people.some(val => val.id === 1)
console.log(somes);//searches an object inside an array
