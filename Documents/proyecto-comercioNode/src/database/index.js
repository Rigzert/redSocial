const { response, request } = require('express');
const {MongoClient} = require('mongodb');
const debug = require('debug')('app:module-database');

const {Config} = require('../config/index')

let connection = null;

module.exports.Database = (collection)=> new Promise (async(request,response) => {
    try {
        if(!connection){
          const cliente = new MongoClient(Config.mongoUri);
         connection = await client.connet();
         debug('Nueva Conection realizada con MongoDb Atlas')
        }
        debug('Reutilizando connection');
        const db = connection.db(Config.mongoDbName);
        resolve(db.collection(collection))
        
    } catch (error) {
        reject(error)
    }

})


