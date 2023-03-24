const debug = require('debug')('app: module-products-controller');

const {ProductsServices} = require('./services');

const {Response} = require('../common/response');
const createError = require('http-errors');


module.exports.ProductsController = {
    getProducts: async (req,res) => {
        try {
            let products  = await ProductsServices.getAll();

           Response.success(res,200,'Lista de Productos', products);
        } catch (error) {
            debug(error)
            Response.error(res);
        }

    },
    getProduct: async(req,res)=> {
        try {
            const {param : {id}} = req;
        let products = await ProductsServices.getById(id);
        if(!product){
            Response.error(res, new createError.NotFound())
        } else{
            Response.success(res,200,`producto ${id}`, product);
        }
        
        } catch (error) {
            debug(error)
            Response.error(res);
        }
        
    },
    createProduct: async (req,res)=> {
        try {
            const {body } = req;
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await ProductsServices.create(body);
                Response.success(res,  201 , 'Producto Agregado',insertedId)
            }
            const insertedId = await ProductsServices.create(body);
            res.json(insertedId);

        } catch (error) {
            debug(error)
            Response.error(res);
        }
    },
    generateReport: (req ,res) => {
        try {
            ProductsServices.generateReport('inventario',res)
        } catch (error) {
            debug(error)
            Response.error(res);
        }
    }
};