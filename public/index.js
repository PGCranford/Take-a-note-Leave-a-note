const router = require('express').Router();
const { notes } = require('../data/notes.json');

let newNote = document.querySelector('.new-note');
let saveNote = document.querySelector('.save-note');
let titleNote = document.querySelector('.note-title');
let textNote = document.querySelector('.note-text');
let listNote = document.querySelector('.list-container .list-group');
let startNote = document.getElementById("getStarted");

// empty note array 
let currentNote = {};

//filter results 
// function filterByQuery(query, notesArray) {
//     let filterResults = notesArray;
//     if (query.title) {
//         filterResults = filterResults.filter(notes => notes.title === query.title)
//     }
//     return filterResults;

// }








const displayNotes = () => {
    fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'appliction/json'

        }
    })
}

module.exports = router;

