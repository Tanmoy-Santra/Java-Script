const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

mongoose.connect('mongodb+srv://tanmoysantra911:gNPOVM33JJLAtPMp@cluster0.xbvrhfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(8000, () => {
    console.log('Server is running on port 3001');
});

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// Route to get all users
app.get('/getUsers', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to add a new user
app.post('/addUser', async (req, res) => {
    const { name, age } = req.body;
    const newUser = new User({ name, age });

    try {
        await newUser.save();
        res.status(201).send('User added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
