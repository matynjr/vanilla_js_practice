//using post when adding data to apis
fetch('https://reqres.in/api/users',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name: 'martin',
        age :28
    })
})

.then(res => {
return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))