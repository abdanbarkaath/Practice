var people = [{
    id :1,
    name:"abdan"
},
{
    id:10,
    name:"basil"
},
{
    id:24,
    name:"qadeer"
}
];

var officer = []
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

var a = people.reduce(function (accumulator,x){
        return accumulator.id < x.id ? accumulator : x;
},{}) ;
// console.log(a);

var j = people.filter(x=>{
    return x.id>0;
})
// console.log(j);
console.log(j.reverse());
console.log(j.reverse());

