let obj=
{
    a:1,
    b:"harry"
}
console.log(obj);
let animal={
    eats:true
}
let rabbit={
    jumps:true
}
rabbit.__proto__ = animal;
// By assigning rabbit.__proto__ = animal;, you are effectively setting animal as the prototype of rabbit.
console.log(rabbit)

class canimal {
    constructor(name){
        this.name=name;
        console.log("ha hum aa jate he")
    }
    eats(){
        console.log("i am fine ")
    }
    jums(){
        console.log("current now i am buzzy in cirtain work ")
    }
   
}

class lion extends canimal{
    
    constructor(name){
     // If you do not call the base class constructor using super() in the derived class constructor, it will result in an error. In JavaScript, when you create a subclass using the extends keyword, you must call super() before you can use this in the constructor of the derived class.
     super(name);
        // this.name=name;//this keyword is use to initialise the variable
        //ethir we can use this.name=name; to initialise the variable of child or we can use super(name)
        console.log("Object is created and it is a lion...");
    }
 eats(){//here this method overriding but if you want to give call to the base class over rided method then use super key word which having base class object 
    super.eats()
    console.log("i am fine how are you ")
    // l.eats//for all the information present in eats
    //l.eats()//for print

 }
}

let a=new canimal("bunny");
console.log(a);

let l=new lion("shera");
console.log(l);
console.log(l instanceof lion);
console.log(a instanceof lion);
console.log(l instanceof canimal);
