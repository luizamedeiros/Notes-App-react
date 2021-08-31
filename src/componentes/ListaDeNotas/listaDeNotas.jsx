import React, { Component } from 'react';
import CardNota from '../CardNota/cardNota';
import "./estilo.css"

class ListaDeNotas extends Component {

    constructor(){
        super();
        this.state = {notes:[]}
    }

    componentDidMount(){
        this.props.notes.subscribe(this._newNotes.bind(this))
    }

    _newNotes(notes){
        this.setState({...this.state, notes})
    }

    render() {
        return ( 
        <ul className="lista-notas">
            {this.state.notes.map((note, index) =>{
                return(
                    <li className="lista-notas_item" key ={index}>
                        <CardNota 
                        cardIndex = {index}
                        // passando a propriedade de excluir nota da lista para o filho, onde realmente vou usar o valor
                        //através do props
                        listExcludeNote={this.props.listExcludeNote}
                        title={note.title} 
                        noteText={note.noteText}
                        category = {note.category}/>
                    </li>
                );
            })}
        </ul>
        )
    }
}

export default ListaDeNotas;