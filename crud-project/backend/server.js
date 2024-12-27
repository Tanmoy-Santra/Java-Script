require('dotenv').config();
const express=require('express');
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const Task=require('./models/Task');

const cors = require("cors");

const app=express();
app.use(cors());

const PORT=process.env.PORT || 5000;

//middleware

app.use(bodyParser.json());

//connect DB

mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser :true,
        // useUnifildTopology:true
    })
    .then(()=>{
        console.log('DB connected');
        
    })
    .catch((err)=>{
        console.error("Connection error " ,err);        
    })

//Routes

//default route

app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API');
});


//Create a new task

app.post('/tasks',async(req,res)=>{
    const {title,description,completed}=req.body;
    try{
        const newTask = new Task ({title,description,completed});
        const savedTask=await newTask.save();
        res.status(201).json(savedTask);
    } catch (err){
        res.status(500).json({
            error : 'Failed to create task'
        });
    }
});

//read all tasks

app.get('/task/:id',async(req,res)=>{
    try{
        const task=await Task.findById(req.params.id);
        if(!task) return res.status(404).json({
            error : 'Task not found'
        });
        res.json(task);
    }catch(err){
        res.status(500).json({
            error: 'Failed to create task'
        });
    }
});

// Fetch all tasks
app.get('/alltasks', async (req, res) => {
    try {
        const tasks = await Task.find(); // Retrieve all tasks from the database
        res.json(tasks); // Respond with the list of tasks
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});


//update a task by id

app.put('/task/:id',async(req,res)=>{
    const {title,description,completed}=req.body;
    try{
        const updateTask=await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                completed
            },{
                new:true                   
            }
        );
        if(!updateTask){
            return res.status(404).json({
                error:'task not found' 
            });
        }
    }catch(err){
        res.status(500).json({
            error:'Failed to update task'
        });
    }
});

//delete task

app.delete('/tasks/:id', async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  });

  //start the server

  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);    
  })

