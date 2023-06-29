var life = 100; //number
var namez = "martin"; //string

life = life - 10;

var checkout = false; //this is a boolean

// let life =100;
// life = life-10; //used to create a variable which you can change the value of

let count = 100;
count++;

console.log(count);

console.log(namez); //outputs name
console.log(life); //outputs value of life bar

//control flow

// if

const age = 10;

if (age > 18) {
  console.log("you are good to go");
} else if (age < 15) {
  console.log("you are really young");
} else {
  console.log("your not old enough");
}

// ===

const car = 180;

if (car === 180) {
  console.log("this car is fast");
}

//dice game

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 2) {
  console.log("your win");
} else {
  console.log("you lost");
}

//for loop

for (let i = 0; i < 5; i++) {
  console.log("loop" + i);
}

for (let q = 5; q > 0; q--) {
  console.log("count down" + q);
}

for (let b = 0; b < 6; b++) {
  console.log("an example of a break" + b);
  if (b === 3) break;
}

// for loops going through an array

const names = ["peter", "john", "mary", "grace"];

for (let n = 0; n < names.length; n++) {
  console.log(names[n]);
}

//for of loop

const conx = ["ruth", "aideed", "afema", "paul"];
for (name1 of conx) {
  console.log(name1);
}

//objects in for in loops

const user = { firstname: "john", lastname: "doe" };
for (key in user) {
  console.log(user[key]);
}

//while loops with break

let x = 0;
while (x < 10) {
  console.log(x);
  x++;
  if (x === 5) break;
}

//while loops with continue

let z = 0;
while (z < 10) {
  z++;
  if (z === 5) continue;
  console.log(z);
}

//do while - run code once before iteratin

let c = 0;

do {
  c++;
  if (c === 5) continue;
  console.log(z);
} while (c < 10);

//for reach loop used for going through variables

const animals = ["cow", "sheep", "goat", "hen"];

animals.forEach((animalNames) => {
  console.log(animalNames);
});
