//help simplify code making it easier to handle anschronous tasks
//A promise is an object that represents eventual completion or failure resulting from
//anyschronous operation
let p = new Promise((resolve,reject) => {
    let a = 1+1
    if (a ==2) {
        resolve('success')
    }else{
        reject('Failed')
    }

})

p.then((message) => {
    console.log('this is in then '+ message)
}).catch((message) => {
    console.log('this is in the catch'+ message)
})


const recordVideoOne = new Promise((resolve,reject)=>{
    resolve('video one recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('video 2 Recorded')
})
const recordVideoThree = new Promise((resolve,reject) =>{
    resolve('video 3 Recorded')
})
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
} )