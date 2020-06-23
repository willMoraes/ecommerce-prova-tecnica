import PaginationView from './views/PaginationView'

class Pagination {
    constructor( state ) {
        this.appState = state;
        this.paginationView = new PaginationView('#pagination-ul');
        this.bindEvent = false;
    }

    isFirstPage(appState) {
        return (appState.state.page > 1) ? false : true
    }

    isLastPage(appState) {
        console.log(this.numOfPages(appState));
        return(appState.state.page < this.numOfPages(appState)) ? false : true
    }

    numOfPages(appState) {
        return Math.ceil(appState.state.totalProducts / appState.state.limit)
    }

    pager(e) {
        let appState = this.appState;
        const dataAttribute = e.target.getAttribute('data-select');
        let nextPage;

        if (dataAttribute == appState.state.page) {
            return false
        }
        else if ( dataAttribute == 'prev' ) {
            (this.isFirstPage(appState)) ? 1 : nextPage = appState.state.page - 1
        } 
        else if (dataAttribute == 'next') {            
            (this.isLastPage(appState)) ? 1 : nextPage = appState.state.page + 1
        } 
        else {
            nextPage = parseInt(dataAttribute);
        }
        appState.update({ page: nextPage });
    }
    
    addListeners() {
        if(!this.bindEvent) {
            document.getElementById('pagination-ul').addEventListener('click', this.pager.bind(this))
            this.bindEvent = true;
        }
    }

    removeListeners() {
        document.getElementById('pagination-ul').removeEventListener('click', () => false );
    }
    
    update(data) {            
        this.removeListeners();
        this.addListeners();
        this.paginationView.update( data );  
    }
}

export default Pagination;