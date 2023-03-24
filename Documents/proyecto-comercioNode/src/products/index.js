const express = require('express');

const router = express.Router();

const {ProductsController} = require('./controller')

module.exports.ProductAPi = (app) => {
    router.get('./', ProductsController.getProducts); 
    router.get('/report', ProductsController.generateReport);                   //http://localhost:3003/api/products
    router.get('/:id',ProductsController.getProduct);                     //http://localhost:3003/api/products/21

    router.post('/',ProductsController.createProduct);
    

    app.use('/api/products', router);
    
}