function Parent(val){
    this.name = val;
}

Parent.prototype.add = function(x){
    console.log(this.name); 
}

var pep1 = new Parent("Abdan");
// pep1.add();

function Child1(x,val){
    Parent.call(this,val);
    this.x = x;
}
 Child1.prototype = new Parent();

function Child2(x){
    this.name = x;
}

Child2.prototype = new Child1();

function Child3(x){
    this.name = x;
}

Child3.prototype = new Child2();

function Child4(x){
    this.name = x;
}

Child4.prototype = new Child3();


var child = new Child4("sudarshan");

var x = child.val;
var x = null;

console.log(x);

