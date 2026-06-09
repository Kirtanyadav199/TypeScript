type TeaRecipe = {
  water:number,
  milk:number
}

// class MasalaChai implements TeaRecipe{
//   water= 50;
//   milk = 100
// }


// type CupSize = "small" | "large";  //this formate can not be used in class


// class chai implements CupSize {  
//   size: "small" | "large" = "large";
// }

interface CupSize {
  size: "large" | "small"
}

// type Response = { ok: true } | {ok:false}  // not allowed
// class myRes implements Response{ 
//   ok: boolean = true;
// }

type TeaType = "masala" | "ginger" | "lemon" // called literal types

function orderChai(t : TeaType){
  console.log(t);
  
}

type BaseChai = {tealeaves : number}
type extra  = {masala : number}

type MasalaChai = BaseChai & extra  // intersection

const cup : MasalaChai = {
     tealeaves : 2,
     masala: 1
}


type User={
 Username :string,
 bio?: string
}

const user1 : User ={ Username:"Kirtan"}
const user2 : User ={Username:"Harshit",bio:"Harshit.exe"}

type Config = {
   readonly appName : string,  // can not be change once declared
   version : number
}

const cfg : Config = {
  appName:"PashuYug",
  version:1
}

// cfg.appName = "MasterJi"  // can not be change now