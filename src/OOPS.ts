// class chai {
//     flavour : string;

//     constructor(flavour:string){
//         this.flavour = flavour;
//         console.log(this)
//     }
// }

// const masalaChai = new chai("masala")

// private acess modifier
class masalaChai{
    public flavour:string = "Masala",
    private specialIngredient : string = "cardamon"

    reveal(){
        return this.specialIngredient
    }
}

const chai = new masalaChai()
chai.reveal()
 

// protected access modifier
class shop{
    protected shopName = "Chai Corner"
}
class Branch extends shop{
    getName(){
        return this.shopName
    }
}

new Branch().getName()

// private 
class wallet{
    #balance = 100; // another way of using private

    getBalance(){
        return this.#balance
    }
}
const w = new wallet().getBalance()


// read only access modifier
class Cup{
    readonly capacity :number = 250;
    constructor(capacity : number){
        this.capacity = capacity;
    }
}

// getter and setter
class ModernChai{
    private _sugar : number = 2;

    get sugar(){
        return this._sugar 
    }
set sugar(value :number){
    if(value>5) throw new Error("Too sweat")
    this._sugar = value
}
}

// static 
class EKChai{
    static shopName = "ChaiCode Cafe"

    constructor(public flavour : string){

    }
}
console.log(EKChai.shopName); // can be accessed with creating obj

// abstract class
abstract class Drink{
    abstract make():void;
}

class MyChai extends Drink{
    make(){
         console.log("Making chai");
         
    }
}


// Concept of composition
class Heater{
    heat(){}
}
class ChaiMaker{
    constructor(private heater : Heater) {}

    make(){
        this.heater.heat;
    }
}