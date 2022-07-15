const router = require('express').Router();
const { notes } = require('./data/notes.json');


//get notes
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }

    res.json(results)

});

router.post('/api/notes', (req, res) => {
    //add new note to notes 
    req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note);

});

// function to create new note 
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../ data / notes.json"),
        JSON.stringify({ animals: notesArray }, null, 2)
    );
    return note;
};

module.exports = router;