const express = require('express');
const { notes } = require('./data/notes.json');


const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
//initiate the server 
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//filter results 
function filterByQuery(query, notesArray) {
    let filterResults = notesArray;
    if (query.title) {
        filterResults = filterResults.filter(notes => notes.title === query.title)
    }
    return filterResults;

}

//get notes
app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }

    res.json(results)

});

app.post('/api/notes', (req, res) => {
    //add new note to notes 
    req.body.id = notes.length.toString()
    const note = createNewNote(req.body, notes)
    res.json(note);

})

// function to create new note 
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './data/notes.json'),
        JSON.stringify({ animals: notesArray }, null, 2)
    );
    return note;
}



// posible to link html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

//use local or heroku server
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
//API routes 
// const apiRoutes = require('./routes/apiRoutes/notes')
// const htmlRoutes = require('./public')

// Middleware 
app.use(express.static('public'));