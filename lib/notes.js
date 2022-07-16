// const fs = require('fs');
// const path = require('path');

// //filter results
// function filterByQuery(query, notesArray) {
//     let filterResults = notesArray;
//     if (query.title) {
//         filterResults = filterResults.filter(notes => notes.title === query.title)
//     }
//     return filterResults;

// };

// // function to create new note
// function createNewNote(body, notesArray) {
//     const note = body;
//     notesArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, '../data/notes.json'),
//         JSON.stringify({ animals: notesArray }, null, 2)
//     );
//     return note;
// };

// module.exports = createNewNote;