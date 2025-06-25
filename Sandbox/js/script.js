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


function makePhrases () {
  let words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  let words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  let words3 = ["process", "solution", "tipping point", "strategy", "vision"];
  let words4 = ["synergy", "paradigm shift", "core competency", "best practices", "game-changer"];
  let words5 = ["scalable", "turnkey", "roadmap", "framework", "ecosystem"];
  let words6 = ["leverage", "optimize", "iterate", "pivot", "streamline"];
  let words7 = ["innovative", "thought leadership", "holistic", "robust", "mission-critical"];
  let words8 = ["results-driven", "agile", "dynamic", "forward-thinking", "data-informed"];
  let words9 = ["circle back", "move the needle", "drink the kool-aid", "blue sky thinking", "boil the ocean"];
  let words10 = ["value proposition", "empower the brand", "create alignment", "monetize", "deliverables"];

  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);
  let rand4 = Math.floor(Math.random() * words4.length);
  let rand5 = Math.floor(Math.random() * words5.length);
  let rand6 = Math.floor(Math.random() * words6.length);
  let rand7 = Math.floor(Math.random() * words7.length);
  let rand8 = Math.floor(Math.random() * words8.length);
  let rand9 = Math.floor(Math.random() * words9.length);
  let rand10 = Math.floor(Math.random() * words10.length);
  
  function pickRandom (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let phrase = `We need a ${pickRandom(words1)}, ${pickRandom(words2)} ${pickRandom(words3)} that drives ${pickRandom(words4)} through a ${pickRandom(words5)} approach. Let's ${pickRandom(words6)} our ${pickRandom(words7)} and stay ${pickRandom(words8)} as we ${pickRandom(words9)} toward our ${pickRandom(words10)}.`
  console.log(phrase);
}

makePhrases();