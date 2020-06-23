const sort = (x, y) => (x < y ? -1 : x > y ? 1 : 0);

export default function(data, filter){
    if (filter === 'price_asc') return data.sort((a, b) => sort(a.price, b.price))

    else if (filter === 'price_dsc') return data.sort((a, b) => sort(b.price, a.price))

    else if (filter === 'name_asc') return data.sort((a, b) => sort(a.name, b.name))

    else if (filter === 'name_dsc') return data.sort((a, b) => sort(b.name, a.name))

    else if(filter === 'none' || filter === '' || filter === undefined) return data
}