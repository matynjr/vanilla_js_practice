//synchronous - code runs from the top, executes top to bottom
//Asynchronous code -harder to work with,set a timer to delay the function

// synchronus code

let a = 1
let b =2

// asynchronus code
setTimeout(function(){
    console.log('this is async code')
},100)

//fetching the index page before the async code runs
fetch('/').then(function(){
    console.log('fetch')
})


console.log(a)
console.log(b)