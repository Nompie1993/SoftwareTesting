const deleteNote = require('./deleteNote');
describe('deleteNote', () => {
    it('should delete a note by id', () => {
        const notes  = [ 
            { id: 1, content: 'Note 1' },
            { id: 2, content: 'Note 2' },
            { id: 3, content: 'Note 3' }
        ];
       const result = deleteNote(notes, 1);
        expect(result).toEqual([
            { id: 2, content: 'Note 2' },
            { id: 3, content: 'Note 3' }
        ]);
    });

        it('should not delete anything if the id does not exist', () => {
            const notes = [
                { id: 1, content: 'Note 1' },

            ];
            const result = deleteNote(notes, 99);
            expect(result).toEqual(notes);
        });

        it('should return an empty array if all notes are deleted', () => {
            const notes = [
                { id: 5, content: 'Note 5' },
            ]
            const result = deleteNote(notes, 5);
            expect(result).toEqual([]);
        }); 

        it('should not mutate the original array', () => {          
            const notes = [{ id: 6, content: 'Nompie' }];
            deleteNote(notes, 1);
            expect(notes.length).toBe(1);
        });
    });