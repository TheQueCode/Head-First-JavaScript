let scoops = 5;

while (scoops > 0) {
  console.log("Another scoop!");
  scoops--;  
}

console.log("Life without ice cream isn't the same");

let cashInWallet = 20;

if (cashInWallet > 5) {
  order = `I'll take a cheeseburger and fries`;
} else {
  order = `I'll just have a glass of water`;
}

console.log(order);

function bark (name, weight) {
  if (weight > 20) {
    console.log(`${name} says WOOF WOOF!`);
  } else {
    console.log(`${name} says woof woof!`);
  }
}

bark('rover', 23);
bark('spot', 13);
bark('spike', 53);
bark('lady', 17);