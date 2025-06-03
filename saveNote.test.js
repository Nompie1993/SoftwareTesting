const saveNote = require('./saveNote');

describe('saveNote', () => {
    it('should add a new note to the notes array', () => {
        const notes = [];
        const title = 'Test Title';
        const content = 'Test Content';
        
        const result = saveNote(notes, title, content);
        
        expect(result.length).toBe(1);
        expect(result[0].title).toBe(title);
        expect(result[0].content).toBe(content);
        expect(result[0].id).toBeDefined();
    });

    it('should not add a note if title is missing', () => {
        const notes = [];
        const title = '';
        const content = 'Valid content';
        
        const result = saveNote(notes, title, content);
        
        expect(result.length).toBe(0);
    });

    it('should not add a note if content is missing', () => {
        const notes = [];
        const title = 'Valid title';
        const content = '';
        
        const result = saveNote(notes, title, content);
        
        expect(result.length).toBe(0);
    });


    it('should not mutate the original array', () => {
        const originalNotes = [];
        const title = 'Test Title';
        const content = 'Test Content';
        
        saveNote(originalNotes, title, content);
        
        expect(originalNotes.length).toBe(0);
    });
});
