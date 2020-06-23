// import Api from './api/api';
import Observer from '../lib/Observer'
import ProductListView from './views/ProductListView'

class ProductList extends Observer { 
    constructor() {
        super()
        this.productListView = new ProductListView('#products-list-ul');
    }
    
    update( state ) { 
        this.productListView.update( state.products )     
    }    
}

export default ProductList;