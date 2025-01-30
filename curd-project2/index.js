const get_user=document.getElementById('get-user');
const post_user=document.getElementById('post-user');
const update_user=document.getElementById('update-user');
const  delete_user=document.getElementById('delete-user');

get_user.onclick = () =>{
    async function fetch_user() {
        try {            
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error(`Error in fetching data response status : ${response.status}`);            
        }
        
        let user=await response.json();
        console.log(user);       

        } catch (error) {
            console.error(error);                        
        }
    }

    fetch_user();
    
}

post_user.onclick = () =>{
    async function post_user(user) {
        try {
            let response=await fetch('https://jsonplaceholder.typicode.com/users',
               {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
               }  
            )
            if(!response.ok){
                throw new Error("Error when post response status : ",response.status);                
            }
            let NewUserDetails=await response.json();
            console.log(`new user added ${NewUserDetails}`);
            
        } catch (error) {
            console.error(error);                        
        }
    }       
    post_user({ name: "John Doe", email: "johndoe@example.com" });
}

delete_user.onclick = () =>{

    async function delete_user(id) {
        try {
            let response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
               {
                method:"DELETE",                
               }  
            )
            if(!response.ok){
                throw new Error("Error when delete response status : ",response.status);                
            }
            let NewUserDetails=await response.json();
            console.log(`new user added ${NewUserDetails} id:${id}`);
            
        } catch (error) {
            console.error(error);                        
        }
    } 
    delete_user(1);
       
}

update_user.onclick = () =>{
    async function update_user(id,user) {
        try {
            let response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
               {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(user)
               }  
            )
            if(!response.ok){
                throw new Error("Error when update response status : ",response.status);                
            }
            let NewUserDetails=await response.json();
            console.log(`new user added ${NewUserDetails} id : ${id}`);
            
        } catch (error) {
            console.error(error);                        
        }
    }    
    update_user(1, { name: "Jane Doe", email: "janedoe@example.com" });
}