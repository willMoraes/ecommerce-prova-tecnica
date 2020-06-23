class SelectFilterView {

    constructor(element) {
        this.element = document.querySelector(element)
    }

    createTemplate( data, filters ) {
        const options = filters.map((filter) => {
            const active = (data.filter === filter.query) ? 'selected' : ''
            return `<option ${active} value="${filter.query}">${filter.name}</option>`
        }).join('')
        
        return `
        <select name="select-filter" class="select-filter" id="select-filter">
            ${options}
        </select>`
    }

    render(data, filters) {
        this.element.innerHTML = this.createTemplate(data, filters)
    }

    update(data , filters) {        
        this.render(data, filters);
    }
}

export default SelectFilterView;