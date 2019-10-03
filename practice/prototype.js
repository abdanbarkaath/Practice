function Person(name,age){
    this.name=name;
    this.age=age;
}
// prototype
Person.prototype.changeName=function(updatedName){
        this.name = updatedName;
}

Person.prototype.addProp=function(rank){
    this.rank = rank;
}

Person.prototype.prank=function(){
    console.log("prank played on "+this.name);
}

var emp1=new Person("abdan",22);

console.log(emp1.name);
emp1.changeName("basil");
console.log(emp1.name);
emp1.changeName("Qadeer");
console.log(emp1.name);
emp1.prank();
emp1.addProp(200);
console.log(emp1);


function Sports(name,age){
    Person.call(this,age)
    this.name=name;
}


var j=new Sports("abdan",21);
console.log(j.name+"hello");

//Ask question on why cannot create a prototype fot emp1
// emp1.prototype.getAge=function(){
//     console.log(this.age);
// }






var obj={
    name:"abdan"
}

var getName = function(){
    console.log(this.name);
}

getName.call(obj);