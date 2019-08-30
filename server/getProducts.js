const products = require('../products.json')

const getProducts = (req, res) => {
    /* if (req.query.price){
        for (let i = 0; i < products.length; i++){
            if (Object.keys(products[i]).includes('price')){
                if (products[i]['price'] >= parseInt(req.query.price)){
                    let items = []
                    items = [...items, products[i]]
                    res.status(200).send(items)
                }
            }
        }
    } else {
        res.status(200).send(products)
    } */
    if (req.query.price){
        let items = products.filter(el => el['price'] >= parseInt(req.query.price))
        res.status(200).send(items)
    } else {
        res.status(200).send(products)
    }
}

module.exports = getProducts;

// they put in a price as a query, res.query.thing, returns all products greater then or equal. The query is received as a string.