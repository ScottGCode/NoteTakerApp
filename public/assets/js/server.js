// Import express module 
const express = require('express');

// Create an instance of the express app 
const app = express();

// Define the port
const PORT = process.env.PORT || 3001; 

// Import local modules 
const htmlRoute = require('./routes/html.js')(app);
const noteRoute = require('./routes/notes.js')(app);

// Invoke the route modules, passing the 'app' object
htmlRoute(app);
noteRoute(app); 

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public')); 

// Listen for connection to server 
app.listen(PORT, () => {
    console.log(`Live server running at http://localhost:${PORT} 🚀`);
});