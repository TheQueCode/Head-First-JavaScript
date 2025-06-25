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


let avatar = 'generic';
let skill = 1.0;
let pointsPerLevel = 1000;
let userPoints = 2008;

function getAvatar (points) {
  let level = points / pointsPerLevel;

  if (level == 0) {
    return "Teddy Bear";
  } else if (level == 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorilla";
  }
}

function updatePoints (bonus, newPoints) {
  let i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i++;
  }
  return newPoints + userPoints;
}

console.log(updatePoints(2, 100));
console.log(getAvatar(2112));


function letsSee (player) {
  points = 1111;
  let message = `can console log read this?`;
  console.log(player);
}

letsSee("Brad");

console.log(points); // 1111
// console.log(message); // Error: message not defined


function clunk (times) {
  let num = times;
  while (num > 0) {
    display('clunk');
    num--;
  }
}

function thingamajig (size) {
  let facky = 1;
  clunkCounter = 0;
  if (size == 0) {
    display('clank');
  } else if (size == 1) {
    display('thunk');
  } else {
    while (size > 1) {
      facky = facky * size;
      size--;
    }
    clunk(facky);
  }
}

function display (output) {
  console.log(output);
  clunkCounter++;
}
let clunkCounter = 0;
thingamajig();
console.log(clunkCounter);