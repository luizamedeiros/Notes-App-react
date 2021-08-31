import './assets/App.css';
import './assets/index.css';
import ListaDeNotas from './componentes/ListaDeNotas/';
import CategoriesList from './componentes/CategoriesList';
import FormularioCadastro from './componentes/FormularioCadastro/';
import SiteHeader from './componentes/SiteHeader';
import Categories from './data/Categories';
import React, { Component } from 'react';
import NotesArray from './data/NotesArray';

class App extends Component {
    constructor() {
        super();
        this.categories = new Categories();
        this.notes = new NotesArray();
    }

    render() {
        return ( 
        <section>
            <SiteHeader/>
            <section className = "conteudo" >
                <FormularioCadastro
                categories = {this.categories}
                createNote = { this.notes.createNote.bind(this.notes)}
                /> 
                <main className="conteudo-principal">
                    <CategoriesList 
                    addCategory={this.categories.addCategory.bind(this.categories)} 
                    categories={this.categories}/>
                    <ListaDeNotas 
                    listExcludeNote={this.notes.deleteNote}
                    notes = { this.notes }/>
                </main>
            </section>
        </section>
        );
    }
}

export default App;


/*    
    addCategory(CategoryName){
        //"..." opens up a list. Without it, words would start to group together
        const categoryList = [...this.state.categories, CategoryName]
        const newCategories = {
            categories: categoryList
        }
        this.setState(newCategories)
    }

    createNote(title, note, category) {
        // criar novo objeto
        const newNote = { title, note, category };
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
*/