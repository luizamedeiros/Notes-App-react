import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.note = "";
    }

    _handleTitleChange(event){
        event.stopPropagation();
       this.titulo = event.target.value;
    }
    
    _handleNote(event){
        event.stopPropagation();
        this.note = event.target.value;
    }
    
    _createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.titulo, this.note);
    }

    render(){
        return (
            <form className="form-cadastro" 
            onSubmit={this._createNote.bind(this)}>

            <input type="text" 
            placeholder="Título"
            className="form-cadastro_input"
            onChange={this._handleTitleChange.bind(this)}
            />
            <textarea 
            rows={15}
            placeholder="Escreva sua nota"
            className="form-cadastro_input"
            onChange={this._handleNote.bind(this)}
            />
            <button className="form-cadastro_input form-cadastro_submit">
            Criar nota...
            </button>
          </form>

        );
    }
}

export default FormularioCadastro;