const fs = require('fs');
const path = require('path');

// let { notes } = require('../data/notes.json');
const router = require('express').Router();



//get notes - 
router.get('/notes', (req, res) => {
    let results = JSON.parse(fs.readFileSync('./data/notes.json'));
    res.send(results);

});

// function to create new note 
// function createNewNote(body, notesArray) {
//     notes = body;
//     notesArray.push(notes);

//     fs.writeFileSync(
//         path.join(__dirname, '../data/notes.json'),
//         JSON.stringify({ animals: notesArray }, null, 2)
//     );
//     return notes;
// };

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

module.exports = router;