class Filters {

    constructor() {
        this.filters = [
            {name: 'Menor preço', query: 'price_asc'},
            { name: 'Maior preço', query: 'price_dsc'},
            { name: 'Nome A-Z', query: 'name_asc'},
            { name: 'Nome Z-A', query: 'name_dsc'},
        ]
    }

    get() {
        return this.filters;
    }

}

export default Filters;