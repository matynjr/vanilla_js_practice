//basic say hi function

function sayhi() {
  console.log("hi");
  console.log("bye");
}

sayhi();
sayhi();

//basic function for adding

function sum(a, b) {
  console.log(a + b);
}

sum(3, 4);

//returning data from a function for future use

function sumz(x, y) {
  return x + y;
}
const value = sumz(2, 3);
console.log(value);

//arrow functions
let sum2 = (c, d) => {
  return c + d;
};

const value2 = sum2(7, 6);
console.log(value2);

//shortened arrow function

let sum3 = (e, f) => e + f;

const value3 = sum3(10, 20);
console.log(value3);
