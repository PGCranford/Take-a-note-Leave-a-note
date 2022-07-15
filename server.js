const express = require('express');
const { notes } = require('./data/notes.json');


const fs = require('fs');
const path = require('path');

//initiate the server 
const app = express();


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
    res.json(req.body);

})



// posible to link html
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

//use local server
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
//API routes 
// const apiRoutes = require('./routes/apiRoutes/notes')
// const htmlRoutes = require('./public')

// Middleware 
app.use(express.static('public'));