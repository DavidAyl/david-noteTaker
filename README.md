# david-notetaker

                David Aylward

## About

 This webpage will allow people to take notes and store them for later. This can be used in many applications, also it can just be used on its own. Using the heroku server I am hosting the webpage for any user to use.

<hr>

## Deployed Link

https://immense-cliffs-74664.herokuapp.com/

<hr>

## Table Of Contents

1. [Usage](#usage)

2. [Important Code](#important)

3. [Reference Links](#reference)


<hr>

## Usage

    This page is easily used with its simplicity coming before anything else. To get started you click the center button and then start typing your notes with titles and body text.


<hr>

## Important Code

This project is mainly created through Javascript. Here is some important code below.

### History
   
        app.get('/api/notes', function(req, res) {
  readAsync('./db/db.json', 'utf8').then(function(data) {
    notes = [].concat(JSON.parse(data))
    res.json(notes)
  })
})

### Saving notes

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


<hr>

## Reference Links

### Heroku

https://dashboard.heroku.com/apps

### Express routing

https://expressjs.com/en/guide/routing.html

