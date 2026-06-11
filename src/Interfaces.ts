interface chai {
  flavour: string;
  price: number;
}

const masalaChai: chai = {
  flavour: "Masala",
  price: 30,
};

interface shop {
  readonly id: number;
  name: string;
}

const s: shop = {
  id: 1,
  name: "ChaiCode Cafe",
};
// s.id = 2 // not possible

interface DiscountCalculator {
  (price: number): number;
}
const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("starts");
  },
  stop() {
    console.log("Stop");
  },
};


// two interface with same name
interface User{
    name:string
}
interface User{
    age:number
}
const u : User = {  // both intefaces properties are usable
    name:"kirtan", 
    age:20
}

interface A {a:string}
interface B{b:string}

interface c extends A,B{}

