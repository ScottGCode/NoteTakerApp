// Import express module 
const express = require('express');

// Create an instance of the express app 
const app = express();

// Define the port
const PORT = process.env.PORT || 3001; 

// Set up routes using express 
require('./routes/html.js')(app);
require('./routes/notes.js')(app);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public')); 

// Listen for connection to server 
app.listen(PORT, () => {
    console.log(`Live server running at http://localhost:${PORT} 🚀`);
});