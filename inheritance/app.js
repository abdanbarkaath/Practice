function Car(brand){
    this.brand = brand
}
Car.prototype.val = function(){
     return this.brand;
}

function Swift(name,brand){
    Car.call(this,brand);
    this.name = name
}

// var c1 = new Car("Yamaha")
Swift.prototype = new Car();

var s1 = new Swift("honda","suzuki")
console.log(s1.val());
console.log(Swift instanceof Car);