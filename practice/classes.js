class User{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    registered(){
        console.log(this.name+" has been registered");
    }
}

// var x1 = new User("abdan",23);
// x1.registered();


class Members extends User{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
    }
    getInfo(){
        console.log(this.name+"'s salary = "+this.salary);
    }
}

var x2=new Members("abdan",23,500);
x2.getInfo();
x2.registered();

function running(){
    console.log(this.name+" is always running");
}

running.apply(x2);

setTimeout(function(){
    console.log("this is a callback");
},2000)