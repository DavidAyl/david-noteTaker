// Brining in things needed for code
const express = require('express');
const path = require('path');
const util = require('util');
const fs = require('fs');
const res = require('express/lib/response');

// Allows me to read and write files asynchronously
const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

// Which port it will run on with express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

// Fetches notes
app.get('/api/notes', function(req, res) {
  readAsync('./db/db.json', 'utf8').then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes)
  })
})

// Saves new notes to db.json
app.post("/api/notes", function(req, res) {
  const note = req.body;
  readAsync('./db/db.json', 'utf8').then(function(data) {
    const notes = [].concat(JSON.parse(data));
    note.id = notes.length + 1
    notes.push(note);
    return notes
  }).then(function(notes){
    writeAsync('./db/db.json', JSON.stringify(notes))
    res.json(note)
  })
  
})


// Lets /notes respond with notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

// any other parameters or queries will bring back to index page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})


// Lets you know app is running on the port you choose
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
