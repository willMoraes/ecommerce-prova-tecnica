import _sortBy from '../utils/sortBy';

class Api {
    constructor() {
        this.URL = 'https://raw.githubusercontent.com/ArezzoCo/ecommerce-prova-tecnica/master/front-end/categoria-owme-es6-sass/mock-products.json';
    }

    filterResult({ resp, filter, limit, page }) {
        return new Promise((resolve, reject) => {
            let totalProducts = resp.products.length;
            let sortedData = _sortBy(resp.products, filter);
            let offset = (page - 1) * limit; // -1 para corrigir o inicio do ofset no array
            let products = sortedData.map((prod) => prod).splice(offset, limit);

            if (products) resolve({ products, totalProducts });
            else reject(new Error("Erro ao buscar produtos!"));
        });
    }
        
    get( { filter, limit, page } ) {
        let getData = fetch(this.URL)
        .then((resp) => resp.json())
        .then((resp) => {
            return this.filterResult({ resp, filter, limit, page });
        })
        .catch(function (error) {
            return error
        });
        return getData
    }
}

export default Api;