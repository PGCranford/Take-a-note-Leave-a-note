const fs = require('fs');
const path = require('path');

// let { notes } = require('../data/notes.json');
const router = require('express').Router();



//get notes - 
router.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./data/notes.json'));
    res.send(results);

});

//post user submitted notes to notes 
router.post('/notes', (req, res) => {
    //add new note to notes
    let notes = JSON.parse(fs.readFileSync('./data/notes.json'));
    notes.push({
        title: req.body.title,
        text: req.body.text,
        id: `${notes.length}`,

    });

    fs.writeFileSync(
        './data/notes.json', JSON.stringify(notes))
    res.json(notes);

});

// delete note function
router.delete('/notes/:id', (req, res) => {

    let notes = JSON.parse(fs.readFileSync('./data/notes.json'));
    const notesIndex = notes.findIndex((note) => note.id === req.params.id)
    if (notesIndex === -1) return res.status(404).json({})

    notes.splice(notesIndex, 1)
    fs.writeFileSync(
        './data/notes.json', JSON.stringify(notes))

    res.json(notes)

});



module.exports = router;