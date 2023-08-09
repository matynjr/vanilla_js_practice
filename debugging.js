//debugging - detecting and removing potential errors
'use strict'
let  variable = 'hello'
console.log(variable)

//debugging
const makeError =() => {
    try{
        const name = "Dave"
        name ="joe"
    }catch(err){
        console.error(err.stack)
    }
}
makeError()