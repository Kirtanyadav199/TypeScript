const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20, 30, 40, 50];

const rating: Array<number> = [4.5, 5.6, 5.0];

type chai = {
  name: string;
  price: number;
};

const menu: chai[] = [
  {
    name: "Masala",
    price: 20,
  },
  {
    name: "Adrak",
    price: 25,
  },
];

const cities: readonly string[] = ["Pune", "Indore", "Bombay"];
// cities.push("Banglore") // not possible to change later once declared

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];
// chaiTuple = [20,"Masala"] // can not change order

let userInfo: [string, number, boolean?];
userInfo = ["Kirtan", 20];
userInfo = ["Harshit", 21, true];

const location: readonly [number, number] = [22.6, 56.7];

const chaiItems: [name: string, price: number] = ["masala", 25];

enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, // automatically incremented to {101} if not given by default
  CANCELLED, // 102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("Chocalate") // custom value not possible 

const enum Sugar{
    LOW = 1,
    MEDIUM = 2,
    HIGH =3
}
let t: [string,number] = ["chai",10]
t.push("extra") // unexpected behaviour