//callback -function you pass to as perimeter to another function

const button = document.querySelector('button');

function toggle() {
  button.classList.toggle('altColor');
}

//an example of a call back is with this function below which call the above function,
//when passed as a aparameter

button.addEventListener('click',toggle)

//example 2
function firstAction(){
    console.log('am the first action')
    setTimeout(secondAction,2000)
}
function secondAction(){
    console.log('am the second action')
}

setTimeout(firstAction,5000)
secondAction()
