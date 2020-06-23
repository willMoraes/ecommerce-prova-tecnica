class ProductListView {

    constructor(element) {
        this.element = document.querySelector(element)
    }

    isArrowDisable(target, current) {
        return (target == current) ? 'disable' : '';
    }

    createTemplate({ totalProducts, limit, page } ) {
        let numPages = Math.ceil(totalProducts / limit);
        let template = ' ';
       
        for (let i = 1; i <= numPages; i++) {
            let active = ( page == i ) ? 'active' : '';
            template += `<li class='pagination__li ${active}' data-select='${i}'>${i}</li > `
        }

        return `
            <li class="pagination__li --prev ${this.isArrowDisable(1, page)}"  data-select='prev'></li>
            ${template}
            <li class="pagination__li --next ${this.isArrowDisable(numPages, page)}" data-select='next'></li>`
    }

    render(data) {
        this.element.innerHTML = this.createTemplate(data)
    }

    update(data) {
        this.render(data);
    }
}

export default ProductListView;