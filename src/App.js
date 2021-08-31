import './assets/App.css';
import './assets/index.css';
import ListaDeNotas from './componentes/ListaDeNotas/';
import CategoriesList from './componentes/CategoriesList';
import FormularioCadastro from './componentes/FormularioCadastro/';
import SiteHeader from './componentes/SiteHeader';
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.notes = [];
        //atribuindo o estado natural
        this.state = {
            notes: [],
            categories:["Games","Music"]
        };

    }

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

    render() {
        return ( 
        <section>
            <SiteHeader/>
            <section className = "conteudo" >
                <FormularioCadastro
                categories = {this.state.categories}
                createNote = { this.createNote.bind(this)
                }/> 
                <main className="conteudo-principal">
                    <CategoriesList 
                    addCategory={this.addCategory.bind(this)} 
                    categories={this.state.categories}/>
                    <ListaDeNotas 
                    listExcludeNote={this.deleteNote.bind(this)}
                    notes = { this.state.notes }/>
                </main>
            </section>
        </section>
        );
    }
}

export default App;