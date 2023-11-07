// Import dependencies. 
const fs = require('fs');
const path = require('path');
const express = require('express');
const uniqid = require('uniqid');

const app = express();

app.use(express.json());

module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Internal Server Error');
            }
            const db = JSON.parse(data);
            res.json(db); 
        });
    });

    app.post('/notes', (req, res) => {
        if(!req.body){
            return res.status(400).json({ error: 'Request body missing or not JSON'});
        }
        let db = fs.readFileSync('db/db.json');
        db = JSON.parse(db);

        // creating body for note
        let userNote = {
            title: req.body.title,
            text: req.body.text,
            // creating unique id for each note
            id: uniqid(),
        };

        // pushing created note to be written in the db.json file
        db.push(userNote);

            
            // Write the updated db array back to db.json
            fs.writeFileSync('db/db.json', JSON.stringify(db));
        
        // Send the response with the updated db array
            //res.json(db);
            res.status(204).send();
        console.log(res);

    });
};