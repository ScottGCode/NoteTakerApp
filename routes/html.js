const path = require('path');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        console.log('Request recieved for /notes');
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};