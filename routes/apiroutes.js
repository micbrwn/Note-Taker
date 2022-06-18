const app = require('express').Router();
const fs = require('fs');


let dbnote = require('../db/db.json');

app.get('/api/notes', (req,res) => { 
    dbnote = JSON.parse(fs.readFileSync('db/db.json'))
    res.json(dbnote)
})

app.post('/api/notes', (req,res) => { 
    const newNote = { 
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random() * 99)
    }
    dbnote.push(newNote)
    fs.writeFileSync('db/db.json', JSON.stringify(dbnote), (err) => {
        if(err) throw err
    })
    res.json(dbnote)
})

app.delete('/api/notes/:id', (req,res) => { 
    const newNotes = []
    for (let i = 0; i < dbnote.length; i++) {
        if (dbnote[i].id != req.params.id){
            newNotes.push(dbnote[i])
        }
    }
    dbnote = newNotes;
    fs.writeFileSync('db/db.json', JSON.stringify(dbnote), (err) => {
        if(err) throw err
    })
    res.json(dbnote)
})

module.exports = app;