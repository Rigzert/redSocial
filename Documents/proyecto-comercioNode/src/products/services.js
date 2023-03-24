const {Database} = require('../database/index');

const {ObjectId}= require('mongodb')

const COLLECTION = 'products';

const {ProductsUtils} = require('./utils')

const getAll = async ()=>{
    const collection = await Database(COLLECTION);

    return await collection.find({}).toArray()
}

const getById = async ()=> {
    const collection = await Database(COLLECTION);

    return collection.findOne({_id: ObjectId(id)})

}

const create = async (product) => {
    const collection = await Database(COLLECTION);

    let result = await collection.insertOne(product)

    return result.insertedId
}

const generateReport = async (name ,res) => {
    let products = await getAll();
    ProductsUtils.excel_generator(res,name,products)
}

module.exports.ProductsServices = {
    getAll,
    getById,
    create,
    generateReport,

}