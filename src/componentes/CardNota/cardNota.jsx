import React, { Component } from 'react';
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "C:/Users/awkwa/Desktop/Codes/notes-app-react/src/assets/delete.svg";

class CardNota extends Component {
    del(){
        const cardIndex = this.props.cardIndex;
        //chamando a função propriedade do pai
        this.props.listExcludeNote(cardIndex);
    }

    render() { 
        return (  
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.title}</h3>
                     {/*nome tem que bater com o do pai*/}
                    <DeleteSVG onClick={this.del.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.noteText}</p>
            </section>

        );
    }
}
 
export default CardNota;