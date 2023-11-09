// Import path module
const path = require('path');

// Export function that takes in 'app' as a parameter
module.exports = (app) => {
// GET route for notes 
    app.get('/notes', (req, res) => {
        console.log('Request recieved for /notes');
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

// Wildcard route for any other request 
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};