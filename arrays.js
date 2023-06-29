//declaring an empty array

let selectedColors = ["green", "blue"];
console.log(selectedColors);

//add items to an existing array to enable expansion

selectedColors[2] = "red";
console.log(selectedColors);

//you can also add different data type ie numbers

selectedColors[3] = 15;
console.log(selectedColors);
console.log(selectedColors[3]);

//accessing last item in the array list

console.log(selectedColors[2]);

//getting the length ot items in an array

console.log(selectedColors.length);

// javascript array methods

const numbers = ["one", "two", "three", "four"];
const colors = ["red", "green", "blue"];

console.log(numbers);
console.log(colors);

//push method for add strings or number to an end of an array

numbers.push("five");
console.log(numbers);

//pop is used to removed the last item in an array

numbers.pop("five");
console.log(numbers);

//pop can also return the item that it removed

const removedNumber = numbers.pop();
console.log(removedNumber);

//finding index of an element supposing you know the element but you want to find the index

console.log(numbers.indexOf("three"));

//shift will always remove items from the beginning of an array

colors.shift();
console.log(colors);

//shift will always return the value of the item shifted

const shiftedElement = colors.shift();
console.log(shiftedElement);

//unshift will add an item to the beginning of an array

colors.unshift("purple");
console.log(colors);

//to string will return array items in form of a string

console.log(colors.toString());

//join will add any thing that you want when returning an array string

console.log(colors.join('&'));
console.log(colors.join(' and '));

//concat will combine two or more arrays together

const data = numbers.concat(colors);
console.log(data);
