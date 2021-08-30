import './assets/App.css';
import './assets/index.css';
import ListaDeNotas from './componentes/ListaDeNotas/';
import FormularioCadastro from './componentes/FormularioCadastro/';
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.notes = [];
        //atribuindo o estado natural
        this.state = {
            notes: []
        }

    }

    createNote(title, note) {
        // criar novo objeto
        const newNote = { title, note };
        // criar um novo array
        const newArrayNotes = [...this.state.notes, newNote]
            // criar um novo estado
        const newState = {
                notes: newArrayNotes
            }
            // atualize o estado desse componente para refletir
            // o estado desse componente
            // é feito assim para não chamarmos novamente o 
            // render
        this.setState(newState)
    }

    deleteNote(cardIndex){
        let arrayNotes = this.state.notes;
        arrayNotes.splice(cardIndex, 1);
        this.setState({ notes: arrayNotes })
    }

    render() {
        return ( 
        <section className = "conteudo" >
            <FormularioCadastro createNote = { this.createNote.bind(this) }/> 
            <ListaDeNotas 
            listExcludeNote={this.deleteNote.bind(this)}
            notes = { this.state.notes }/>
        </section>
        );
    }
}

export default App;