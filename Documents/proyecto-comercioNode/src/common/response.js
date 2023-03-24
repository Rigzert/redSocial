const createError = require('http-errors')

module.exports.Response = {
    success : (res,status = 200,mensagem = 'OK',body = {}) =>{
        res.status(status).json({mensagem,body});
    },
    error : (res,error = null) => {
        const {statusCode,mensagem} =  error ? error : new createError.InternalServerError();
        res.status(statusCode).json(mensagem)
    }

}