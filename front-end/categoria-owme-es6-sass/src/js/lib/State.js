import Subject from './Subject';
import ProductApi from '../api/api';

class State extends Subject {

    constructor() {
        super();
        this.state = {};
        this.ProductService = new ProductApi();
    }

    get() { return this.state }

    update( data ) { 

        let defaultQuery = { filter: 'price_asc', limit: 20, page: 1 }
        let query = defaultQuery;

        if ( data ) {   
            const oldQuery = { page: this.state.page, limit: this.state.limit, filter: this.state.filter }
            if (data.filter) (query = { ...oldQuery, page: 1, filter: data.filter }) 
            if (data.page) (query = { ...oldQuery, page: data.page }) 
        } 
        
        let products = this.ProductService.get({ ...query });

        products.then((result) => {
            this.state = { ...result, ...query }            
            this.notify(this.get())
        })
    }
}

export default State;