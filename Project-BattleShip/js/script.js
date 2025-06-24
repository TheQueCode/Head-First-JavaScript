let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

while (isSunk == false) {
  //guess = prompt('Ready, aim, fire! (Enter a number from 0-6!): ');
  if (guess < 0 || guess > 6) {
    console.log("Please enter a valid cell number!");
  } else {
    guesses++;
    
    if (guess == location1 || guess == location2 || guess == location3) {
      console.log('HIT!');
      hits++;
      if (hits == 3) {
        isSunk = true;
        console.log('You sank my Battleship!');
      }
    } else {
      console.log("MISS!");5
    }
    
  }
}

let stats = `You took ${guesses} guesses to sink the battleship which means your shooting accuracy was ${3/guesses * 100}%.`;

console.log(stats);