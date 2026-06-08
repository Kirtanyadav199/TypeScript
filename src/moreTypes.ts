let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement  = document.getElementById("username") as HTMLInputElement

let value: any;

value = "43";
value = [1, 2, 3];
value = 2.3;
value.toUpperCase();

let newValue: unknown;

newValue = "43";
newValue = [1, 2, 3];
newValue = 2.3;
// newValue.toUpperCase() (not possible in unknown)
if (typeof newValue === "string") {
  newValue.toUpperCase();
}

try {
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  }
  console.log("Error", err);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashboard...");
    return;
  }
  if (role === "user") {
    console.log("redirecting to user dashboard...");
    return;
  }
  role; // typscript ne hover krne pr apne aap bta diya ki role = "super"
}

function neverReturn():never{ // never ending 
    while(true){}
}
