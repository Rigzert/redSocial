const express = require('express');

const debug = require('debug')('app:main');

const {Config} = require('./config/index');
const {ProductAPi} =require('./products/index');

const {UserAPi} = require('./users/index');

const {IndexApi , NotFoundApi}  = require('./src/index/index');


const app = express();

const PORT = 3003;




//modulos
IndexApi(app);
ProductAPi(app);
UserAPi(app);
NotFoundApi(app);

app.use(express.json);
app.listen(PORT, ()=> {
    console.log(Config);
    debug(`servidor escuchando en ${PORT}`)

});
