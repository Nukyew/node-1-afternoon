const express = require('express')
const app = express()
const SERVER_PORT = 4001
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

/* app.get('/api/products', (req, res) => {
    res.status(200).send(products)
}) */