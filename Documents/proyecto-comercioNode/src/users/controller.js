const debug = require('debug')('app: module-users-controller');

const {UsersServices} = require('./services');

const {Response} = require('../common/response');
const createError = require('http-errors');


module.exports.UsersController = {
    getUsers: async (req,res) => {
        try {
            let users  = await UsersServices.getAll();

           Response.success(res,200,'Lista de Productos', users);
        } catch (error) {
            debug(error)
            Response.error(res);
        }

    },
    getUser: async(req,res)=> {
        try {
            const {param : {id}} = req;
        let users = await UsersServices.getById(id);
        if(!user){
            Response.error(res, new createError.NotFound())
        } else{
            Response.success(res,200,`user ${id}`, user);
        }
        
        } catch (error) {
            debug(error)
            Response.error(res);
        }
        
    },
    createUser: async (req,res)=> {
        try {
            const {body } = req;
            if(!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest())
            } else {
                const insertedId = await UsersServices.create(body);
                Response.success(res,  201 , 'Usuario Agregado',insertedId)
            }
            const insertedId = await UsersServices.create(body);
            res.json(insertedId);

        } catch (error) {
            debug(error)
            Response.error(res);
        }
    },
    generateReport: (req ,res) => {
        try {
            UsersServices.generateReport('inventario',res)
        } catch (error) {
            debug(error)
            Response.error(res);
        }
    }
};