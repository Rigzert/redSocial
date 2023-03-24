const express = requiere('express');

const createError = require('http-errors');


const {Response} = requiere('../common/response');


module.exports.IndexApi = (app) => {
    const router = express.Router();

    router.get("/", (req ,res) => {
        const menu = {
            products = `https://${req.header.host}/api/products`;
            users = `https://${req.header.host}/api/users`;
        }
        Response.success(res, 200 , 'API Inventario', menu)

    })

    app.use("/" , router)
}

module.exports.NotFoundApi = (app) => {
    const router = express.router();

    router.all("*"  , (req, res)=> {
        response.error(res, new createError.NotFound())
    })
    app.use("/", router)
}