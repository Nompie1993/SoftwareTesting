 function deleteNote(notes, id) {

    return notes.filter(n => n.id !== id);
}

module.exports = deleteNote;
//This function deletes a note from the nots array based on the provided id.

//Test Script
//1. It should a not by id
//2. it should not delete anything if the id does not exist/not found
//3. it should return an empty array if all notes are deleted
//4. it should not mutate the original array
