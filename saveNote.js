function saveNote(notes = [], title, content) {
    // Create a new array instead of mutating the original
    const newNotes = [...notes];
    
    if (!title || !content) {
        return newNotes; // Return unchanged array if validation fails
    }
    
    newNotes.push({
        id: Date.now(),
        title,
        content
    });
    
    return newNotes;
}

module.exports = saveNote; 

//should add a new note to the notes array
//should not add a note if title is missing
//should not add a note if content is missing
//should not mutate the original array
    


