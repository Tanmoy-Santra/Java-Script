const submit=document.getElementById("submit");
const title=document.getElementById("title");
const desc=document.getElementById("description");
const completed=document.getElementById("completed");

const showDataBtn=document.getElementById("show-data");
const showDataBtnById=document.getElementById("showDataBtnById");

const update_button=document.getElementById("update-button");


const Delete=document.getElementById("Delete");


submit.addEventListener('click',async()=>{
    const data = {
        title: title.value,          // Use .value to get input text
        description: desc.value,
        completed: completed.value.toLowerCase() === "true" // Convert string to boolean
    };

    console.log(data);

    try{
        const response = await fetch("http://localhost:5000/tasks/",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data), 
        });
        console.log(response);
        

        if(response.ok){
            const result=await response.json();
            console.log("Task created :",result);
            alert("Task crated uccessfully !");
            
        }else{
            const errorData = await response.json();
            console.error("Error creating task:", errorData);
            alert("Failed to create task");
        }

    }catch(error){
        console.log("Network error:",error);
        alert("Network error : could not connect to the server")        ;
    }
    
    
});

showDataBtn.addEventListener("click",async()=>{
    try{
        const response=await fetch("http://localhost:5000/alltasks");
        
        if(response.ok){
            const tasks=await response.json();

            showAllData.innerHTML=tasks
            .map(
                (tasks) =>
                    `<div class="final">
                            <h3>${tasks.title}</h3>
                            <p>${tasks.description}</p>
                            <p><strong>Completed:</strong> ${tasks.completed}</p>
                            <p>id : ${tasks._id}</p>
                        </div>`
                    )
                    .join("");
        }else{
            showAllData.innerHTML="Failed to fetch tasks.";
        }
    }catch(error){
        console.log("Network error : ",error);
        showAllData.innerHTML="Network error : Could not fetch tasks"        
    }
});

showDataBtnById.addEventListener("click",async()=>{
    const ID=document.getElementById("input-id").value;
    try{
        const response=await fetch(`http://localhost:5000/task/${ID}`);
        
        if(response.ok){
            const tasks=await response.json();

            showAllData.innerHTML=
                    `<div class="final">
                            <h3>${tasks.title}</h3>
                            <p>${tasks.description}</p>
                            <p><strong>Completed:</strong> ${tasks.completed}</p>
                        </div>`
                    
                 
        }else{
            showAllData.innerHTML="Failed to fetch tasks.";
        }
    }catch(error){
        console.log("Network error : ",error);
        showAllData.innerHTML="Network error : Could not fetch tasks"        
    }
});

Delete.addEventListener("click", async () => {
    const ID = document.getElementById("input-id-delete").value;
    try {
        const response = await fetch(`http://localhost:5000/tasks/${ID}`, {
            method: 'DELETE', // Use the DELETE method to delete the task
        });

        if (response.ok) {
            console.log("Task deleted successfully");
            // Optionally, you can update the UI here to show success (e.g., clear fields or show a message)
        } else {
            console.log("There was a problem deleting the task");
        }
    } catch (error) {
        console.log("Error:", error);
    }
});

//update a result

update_button.addEventListener('click',()=>{
    const update=document.getElementById("update");

    update.innerHTML=`
    <div>
         <div class="inner-container">
            <label for="update-title">Title</label>
            <input type="text" name="" id="update-title" class="title-text">
        </div>
         <div class="inner-container">
            <label for="update-id">Enter task ID</label>
            <input type="text" name="" id="update-id" class="title-text">
        </div>
        <div class="inner-container">
            <label for="update-description">Description</label>
            <input type="text" name="" id="update-description" class="title-text">
        </div>
        <div class="inner-container">
            <label for="completed">Completed (True/False)</label>
            <input type="text" name="" id="update-completed" class="completed-text">
        </div>
        <button class="btn" id="update-submit">submit</button>  
     </div> 
    `;

    // const update_button=document.getElementById("update-button");
const update_submit=document.getElementById("update-submit");
update_submit.addEventListener('click',async()=>{
    const title=document.getElementById("update-title");
    const id=document.getElementById("update-id");
    const desc=document.getElementById("update-description");
    const completed=document.getElementById("update-completed");

    const data={
        title : title.value,
        id:id.value,
        desc:desc.value,
        completed:completed.value.toLowerCase() === "true"
    }

    console.log(data);

    const ID=id.value;

    try{

        const response=await fetch(`http://localhost:5000/task/${ID}`,{
            method:'PUT',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data),
        });
        if(response.ok){
            alert("Task update successfully !");            
            console.log("Task update successfully !");            
        }else{
            console.log('server error , some thing went wrong !');            
        }

    }catch(e){
        console.log(e);        
    }

    
});
});

