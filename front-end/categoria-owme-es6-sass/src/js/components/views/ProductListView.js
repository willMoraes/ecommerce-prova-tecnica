class ProductListView {

    constructor(element) {
        this.element = document.querySelector(element)
    }

    formatMoney(value) {
        return value = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
    }

    createTemplate(products) {
        return products.map((product) => {
            return `
            <li class="products-list__li"> 
                <div class="product-item">
                    
                    <a href="#"></a>
                    <div class="product-item__thumb">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-item__info">
                        <h3 class="product-item__title">${product.name}</h3>
                        <p class="product-item__price">${this.formatMoney(product.price)}</p>
                    </div>
                </div>
            </li>`;
        }).reduce((tmp, prod) => tmp + prod)
    }

    render(data) {
        this.element.innerHTML = this.createTemplate(data)
    }

    update(data) {
        this.render(data);
    }
}

export default ProductListView;