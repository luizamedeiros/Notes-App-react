import React, { Component } from 'react';
import "./estilo.css"

class CategoriesList extends Component {

    _handleInputEvent(event){
        if (event.key == "Enter") {
            let CategoryName = event.target.value;
            this.props.addCategory(CategoryName)
        }
    }
    render() { 
        return (
        <section className="categories">
            <ul>
                {/*Iterando sobre a lista e criando os objetos dinamicamente*/}
                {this.props.categories.map((category, index) =>{
                    return <li>{category}</li>
                })
                }
            </ul>
            <input 
            placeholder="Adicionar categoria..." 
            onKeyUp={this._handleInputEvent.bind(this)}
            type="text"/>
        </section>
        
        );
    }
}
 
export default CategoriesList;