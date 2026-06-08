let subs: string | number = "1M"; // can be both string and num

let apiRequestStatus: "pending" | "success" | "error";

// apiRequestStatus = "Don3" (only pending,success adn error allowed)

let orders = ["22", "23", "25", "30"];
let currentOrder: string | undefined; // (currentOrder = any, if not given)
for (let order of orders) {
  if (order == "25") {
    currentOrder = order;
    break;
  }
}
console.log(currentOrder); // not allowed because currentOrder can be undefined also, if the loop does not run at all, so we have to declare that to type script before using currentOrder that , this variable can be string or undefined (see line: 8)
