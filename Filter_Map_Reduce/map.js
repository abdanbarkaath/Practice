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
people.forEach(function(x){
    officer.push(x)
})

// console.log(officer);
var officer = people.map(function(x){
    return x
})

console.log(officer[0].name);

// var ids = people.filter(function(y){
//     return y.id>1;
// })

// console.log(ids[1].name);