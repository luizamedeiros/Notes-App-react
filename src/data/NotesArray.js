export default class NotesArray{
    constructor(){
        this.notes = [];
        this._subscribed = [];
    }

    createNote(title, noteText, category){
        const newNote = new Note(title, noteText, category);
        this.notes.push(newNote);
        this.notify();
    }
    
    deleteNote(cardIndex){
        this.notes.splice(cardIndex, 1);
        this.notify();
    }

    subscribe(func){
        this._subscribed.push(func);
    }

    unsubscribe(func){
        this._subscribed.slice(func)
    }

    notify(){
        this._subscribed.forEach(func => {
            func(this.notes);
        } );
    }
}

class Note{
    constructor(title, noteText, category){
        this.title = title;
        this.noteText = noteText;
        this.category = category;
        
    }
}