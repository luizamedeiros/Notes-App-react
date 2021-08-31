import React, { Component } from 'react';
import "./estilo.css"

class CategoriesList extends Component {
    constructor(){
        super();
        this.state = {categories: []}
    }

    componentDidMount(){
        this.props.categories.subscribe(this._newCategories.bind(this))
    }

    //review later to understand how categories is received/from where
    _newCategories(categories){
        this.setState({...this.state, categories});
    }

    _handleInputEvent(event){
        if (event.key == "Enter") {
            let CategoryName = event.target.value;
            this.props.addCategory(CategoryName)
        }
    }
    render() { 
        return (
        <section className="categories-list">
            <ul className="categories-list_list">
                {/*Iterando sobre a lista e criando os objetos dinamicamente*/}
                {this.props.categories.categories.map((category, index) =>{
                    return <li key={index} 
                    className="categories-list_item">
                        {category}</li>
                })
                }
            </ul>
            <input 
            className="categories-list_input"
            placeholder="Adicionar categoria..." 
            onKeyUp={this._handleInputEvent.bind(this)}
            type="text"/>
        </section>
        
        );
    }
}
 
export default CategoriesList;