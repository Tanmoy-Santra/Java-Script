fetch("https://api.github.com/users/Tanmoy-Santra")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    console.log(data.login);
    console.log(data.type);
})
.catch((error)=>console.log(error))
