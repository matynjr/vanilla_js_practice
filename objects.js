//objects are stored in carly braces
//Objects are used to store key-value pairs. They are similar to real-world objects that have properties and behaviors.

const myObj = { name: "martin" };
console.log(myObj);

//logging what the object contains
const myOtherName = { otherName: "muganzi" };
console.log(myOtherName.otherName);

//creating a bigger object

const aboutMe = {
  alive: true,
  age: 28,
  hobbies: ["reading", "gym", "coding"],
  // add anested object
  drinks: { morning: "poridge", evening: "coffee" },
};
console.log(aboutMe.hobbies[2]);
console.log(aboutMe.drinks);
console.log(aboutMe.alive);

//we can also use brackets instead of .notation

console.log(aboutMe["age"]);

//to access keys within nested objects

console.log(aboutMe.drinks.morning);
console.log(aboutMe.drinks.evening);

//objects have methods and these are functions defined within an object

const sayHi = {
  //method
  action: function () {
    return "hi martin";
  },
};

console.log(sayHi.action());

//Within these methods we can refer to information from an object and we use the key word his

const supper = {
  //a nested Object
  diner: { food: "fish", source: "matooke" },
  toeat: function () {
    return `its time to eat ${this.diner.food} with ${this.diner.source}`;
  },
};
console.log(supper.toeat());

//using objects as constructors

//we can also access properties and methods of other objects using inheritance

const vechile = {
  //first object with a property and a method
  wheels: 4,
  engine: function () {
    return "vroom";
  },
};

const truck = Object.create(vechile); //using object vechile as aconstructor
truck.doors = 2; //add this property to truck only
console.log(truck);
console.log(truck.wheels); //inheritance inheriting wheels property for the first object
console.log(truck.engine()); //inheriting the method from the first object

// logging all keys of an object
const band = {
  vocals: "robert plant",
  guitor: "jimmy page",
  bass: "john paul jones",
  drums: "john Bonham",
};

band.keyBoard = "martin muganzi"; //adding  a keyboard to the object

console.log(Object.keys(band)); //list all object keys in array format
console.log(Object.values(band)); //lists all the values in array format

//for in loops help us go through an object

for (let job in band) {
  //console.log(band[job]); //this will help interate throught the object

  //getting the keys out

  console.log(`on ${job}, its ${band[job]}!`);
};


//destructuring objects
//allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. 
 const bus ={
    seatOne : "Peter",
    seatTwo : "oscar",
    seatThree : "bosco"

 };

 const {seatTwo : inThisSeat, seatThree : inSeatThree} = bus; // declaring a variable to store what is in seattwo
 
 console.log(inThisSeat);
 console.log(inSeatThree);

 //using a function to pull values out of an object

 function paidFair({seatOne}){
    return `${seatOne} has paid bus fair !`;
 }

 console.log(paidFair(bus));