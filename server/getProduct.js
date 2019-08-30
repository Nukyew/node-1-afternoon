const products = require('../products.json')

const getProduct = (req, res) => {
    const item = products.find(product => product.id === parseInt(req.params.id))
    if (item === false) {
        return res.status(500).send("Item not in list")
    }
    res.status(200).send(item);
}

module.exports = getProduct