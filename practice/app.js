var person={
    name:"abdan",
    car:"honda"
}

var sum=function(){
    return this.car;
}

var j = sum.call(person);
console.log(j);

//Constructor

function Person(name,age){
    this.name=name;
    this.age=age;
}
// prototype
Person.prototype.calcDob=function(){
    console.log("current age = "+(2019-this.age));
}

var emp1= new Person("abdan",21);
console.log(emp1);
emp1.calcDob();


function sums(){
    console.log(this);
}
sums();

function Bicycle(tyre,pressure){
    this.tyre=tyre,
    this.pressure=pressure
}

function increase(){
    this.pressure+=2;
}
var b1=new Bicycle(2,10);
console.log(b1);

increase.call(b1);
console.log(b1);