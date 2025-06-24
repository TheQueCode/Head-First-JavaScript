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

function bake (degrees) {
  let message;

  if (degrees > 500) {
    message = `I'm not a nuclear reactor!`;
  } else if (degrees < 100) {
    message = `I'm not a refrigerator!`;
  } else {
    message = `That's a very comfortable temperature for me. Thank you.`;
  }
  return message;
}
let status = bake(350);

console.log(bake(425));



const radius = 5.2;

function calculateArea (radius) {
  let area;
  if (radius <= 0) {
    return 0;
  } else {
    area = Math.PI * radius * radius;
    return area;
  }
}

let theArea = calculateArea(radius);

console.log(`The area is ${theArea}.`);