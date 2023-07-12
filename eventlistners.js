//access the different html elements on the page
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//using the event listeners
grandparent.addEventListener("click", (e) => {
  console.log(e.target);
});

//for example printout the div thats clicke on
//what happens on the out put is called bubbling-mean when you click on child it displays upto grand parent
//capturing is when what you click on is displayed
grandparent.addEventListener("click", (e) => {
  console.log("this is the grandparent");
});
parent.addEventListener("click", (e) => {
  console.log("this is the parent");
});

//use once to setup an event listner to run only once
child.addEventListener(
  "click",
  (e) => {
    console.log("this is the child");
  },
  { once: true }
);

//RESPONDING TO EVENTS
/*JavaScript can listen for and respond to a wide range of
 user events, such as clicks, input changes, 
 mouse movements, key presses, and more. 
 Event listeners can be added to elements using the addEventListener()
  method, allowing us to execute custom code when an event occurs.*/

//CLICK EVENT
//Occures when a user clicks an element
//using the div with id myButton on the html page

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function () {
  // code to execute when button is clicked
  console.log("button is clicked now");
});

//INPUT EVENT
//occurs when value of an input changes

const myInput = document.getElementById("myInput");
myInput.addEventListener("input", function (event) {
  //execute this code when value of input changes
  const inputValue = event.target.value;
  console.log("input changed", inputValue);
});

/* MOUSE EVENTS

There are various mouse events that can be used to respond to mouse interactions */

//mouse over
const myElement = document.getElementById("myElement");

myElement.addEventListener("mouseover", function () {
  console.log("you have hovered over the element");
});

//mouse move

myElement.addEventListener("mousemove", function (event) {
  //code to execute
  const x = event.clientX;
  const y = event.clientY;

  console.log("mouse cordinates:", x, y);
});

/*Keyboard Events

Keyboard events enable us to respond to use keyboard input, such as key presses, key releases, and key combinations.*/

document.addEventListener("keydown", function (event) {
  //code to execute
  const key = event.key;
  console.log("key pressed:", key);
});
