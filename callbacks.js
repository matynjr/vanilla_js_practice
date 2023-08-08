//callback -function you pass to as perimeter to another function

const button = document.querySelector('button');

function toggle() {
  button.classList.toggle('altColor');
}

//an example of a call back is with this function below which call the above function,
//when passed as a aparameter

button.addEventListener('click',toggle)
