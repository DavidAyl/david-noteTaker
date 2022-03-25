const express = require('express');
const path = require('path');
const apis = require('./routes/apiRoutes')
const util = require('util');
const fs = require('fs');
const res = require('express/lib/response');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('./api/notes', function(req, res) {
  readAsync('./db/db.json', 'utf8').then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes)
  })
})

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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
})



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
