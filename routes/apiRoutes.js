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
    const notes = JSON.parse(fs.readFileSync('./data/notes.json'));
    res.json(notes);
    notes.push({
        title: req.body.title,
        text: req.body.text,
        id: notes.length,

    });

    fs.writeFileSync(
        './data/notes.json', JSON.stringify(notes))

});

router.delete('/notes', (req, res) => {
    notes = JSON.parse(fs.readFileSync('./data/notes.json'));
    notes.delete({
        title: req.body.title,
        text: req.body.text,
        id: notes.length,

    });

    res.send(results)


});

module.exports = router;