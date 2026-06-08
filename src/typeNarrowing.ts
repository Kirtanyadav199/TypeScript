function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind}`;
}

console.log(getChai(10));
console.log(getChai("masala"));

function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `Serving default masala chai`;
}

console.log(serveChai("kirtan"));
console.log(serveChai());

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || size === "large") {
    return `making extra chai...`;
  }
  return `chai order #${size}`;
}

console.log(orderChai("small"));
console.log(orderChai("large"));
console.log(orderChai(10));

class kulhadChai {
  serve() {
    return `Serving kulhal chai`;
  }
}

class cuttingChai {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: kulhadChai | cuttingChai) {
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
  if (chai instanceof cuttingChai) {
    return chai.serve();
  }
}

const chai1 = new kulhadChai();
const chai2 = new cuttingChai();

console.log(serve(chai1));
console.log(serve(chai2));

type ChaiOrder = {
  type: String;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `serving custom chai : ${item}`;
}

const item = {
  type: "masala",
  sugar: 10,
};

console.log(serveOrder(item));
console.log(serveOrder("with milk"));

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai) {
  switch (order.type) {
    case "masala":
      return `Masala chai`;
      break;
    case "elaichi":
      return `elaichi chai`;
      break;
    case "ginger":
      return `ginger chai`;
      break;
  }
}

