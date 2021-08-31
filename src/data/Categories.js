export default class Categories{
    constructor(){
        this.categories = [];
        this._subscribed = [];
    }

    addCategory(newCategory){
        this.categories.push(newCategory);
        this.notify();
    }

    subscribe(func){
        this._subscribed.push(func);
    }

    unsubscribe(func){
        this._subscribed.slice(func)
    }

    notify(){
        this._subscribed.forEach(func => {
            func(this.categories);
        } );
    }
}