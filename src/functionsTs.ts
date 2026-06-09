function makeChai(name: string, cups: number) {
  console.log(`make ${cups} of ${name} chai`);
}

makeChai("masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

function logChai(): void {
  console.log("Chai is Ready");
}

function orderChai(type: string = "Masala") {
  // default value is masala
}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
