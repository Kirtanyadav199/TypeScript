let Chai ={
    name : "Ginger tea",  // this is normal js 
    price : 25,
    isHot: true 
}

let tea : {    // TS way of declaring obj
    name:string,
    price:number,
    isHot:boolean
}

tea = {
    name : "ginger tea",
    price : 25,
    isHot : true
}


type Tea = {
  name : string,
  price: number,
  ingredients: string[]
}
 
const adrakChai : Tea = {
    name : "Adrak chai",
    price : 25,
    ingredients : ["ginger","tea leaves"]
}

type Cup = {size : string}
let smallCup : Cup ={size:"200ml"}

let bigCup = { size : "500ml", material : "steel"}

smallCup = bigCup // possible in TS because bigCup satisfies bare minimus properties of smallCup 


type Brew = {brewTime : number}
const coffee = {brewTime : 5 , bean : "Arabica"}
const chaiBrew:Brew = coffee // possible for the same above reason 


type item = {name:string, quantity:number}
type Address = {street:string,pin:number}

type Order =  {
    id: string,
    items: item[],
    address : Address
}

// type Chai = {
//     name:string,
//     price:number,
//     isHot:boolean
// }

const updateChai = (updates: Partial<Chai>) =>{
    console.log("updating chai with",updates);
}

updateChai({price:25})  // we can update partially(single property) of Chai
updateChai({isHot:false})
updateChai({}) // this is also possible


type ChaiOrder = {
    name?:string,
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>) =>{ //now every prop is required
    console.log(order);
}

placeOrder({  // every property is required
    name : "masala chai",
    quantity:  2
})

type Chai = {
    name:string,
    price:number,
    isHot:boolean,
    ingredients:string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price" >; // we can use selected props

const chaiInfo : BasicChaiInfo = {
    name: "Lemon tea",  // selected properties has used
    price: 30
}