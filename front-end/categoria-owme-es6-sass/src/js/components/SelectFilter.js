import SelectFilterView from './views/SelectFilterView'
import Filters from '../utils/filters'

class SelectFilter {
    constructor(state = {}) {
        this.appState = state;
        this.selectFilterView = new SelectFilterView('#select-filter-container');
        this.filtersList = new Filters();
    }
    
    addListeners() {
        const appState = this.appState;
        document.getElementById('select-filter').addEventListener('change', function() {
            appState.update({
                filter: this.value
            })   
        })
    }
    
    removeListeners() {
        document.getElementById('select-filter').removeEventListener('change', () => false );
    }
    
    update(data) {
        this.selectFilterView.update(data, [...this.filtersList.get()]);  
        this.removeListeners();
        this.addListeners();
    }
}

export default SelectFilter;