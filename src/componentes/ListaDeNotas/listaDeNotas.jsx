import React, { Component } from 'react';
import CardNota from '../CardNota/cardNota';
import "./estilo.css"

class ListaDeNotas extends Component {
    render() {
        return ( 
        <ul className="lista-notas">
            {this.props.notes.map((nota, index) =>{
                return(
                    <li className="lista-notas_item" key ={index}>
                        <CardNota 
                        cardIndex = {index}
                        // passando a propriedade de excluir nota da lista para o filho, onde realmente vou usar o valor
                        //através do props
                        listExcludeNote={this.props.listExcludeNote}
                        title={nota.title} 
                        noteText={nota.note}/>
                    </li>
                );
            })}
        </ul>
        )
    }
}

export default ListaDeNotas;