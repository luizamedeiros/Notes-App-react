import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.title = "";
        this.noteText="";
        this.category="N/A";
        this.state= {categories:[]}
    }

    componentDidMount(){
        this.props.categories.subscribe(this._newCategories.bind(this));
    }

    _newCategories(categories){
        {/* updating list state */}
        this.setState({...this.state, categories});
    }

    _handleTitleChange(event){
        event.stopPropagation();
       this.titulo = event.target.value;
    }
    
    _handleCategoryChange(event){
        event.stopPropagation();
        this.category=event.target.value;
    }
    _handleNote(event){
        event.stopPropagation();
        this.note = event.target.value;
    }
    
    _createNote(event){
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.titulo, this.note, this.category);
    }

    render(){
        return (
            <form className="form-cadastro" 
            onSubmit={this._createNote.bind(this)}>
            <select 
            onChange={this._handleCategoryChange.bind(this)}
            className="form-cadastro_dropbox">
                <option>N/A</option>
                {/*pegar o this.state para pegar o estado interno*/}
            {this.state.categories.map((category, index)=> {
                return <option key ={index}>{category}</option>
            })}
            </select>
            <input 
            type="text" 
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
            <button 
            className="form-cadastro_input form-cadastro_submit">
            Criar nota
            </button>
          </form>

        );
    }
}

export default FormularioCadastro;