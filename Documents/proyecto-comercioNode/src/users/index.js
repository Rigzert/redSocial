const express = require('express');

const router = express.Router();

const {UsersController} = require('./controller');



module.exports.UserAPi = (app) => {
    router.get('./', UsersController.getUsers); 
                   //http://localhost:3003/api/products
    router.get('/:id',UsersController.getUser);                     //http://localhost:3003/api/products/21

    router.post('/',UsersController.createUser);
    

    app.use('/api/users', router);
    
}