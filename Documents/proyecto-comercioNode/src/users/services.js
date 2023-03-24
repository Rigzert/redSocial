const {Database} = require('../database/index');

const {ObjectId}= require('mongodb')

const COLLECTION = 'users';



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



module.exports.UsersServices = {
    getAll,
    getById,
    create,
    

}