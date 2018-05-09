require('dotenv').config({path: './config/environments/' + process.argv[2] + '.env'});
const queries = require('./app/modules/queries');
const server = require('./config/initializers/server');

const test = async () => {
    await queries.dropTable('items');
    await queries.dropTable('promotions');
    console.log(await queries.insertOne('items',{code:'PANTS',name:'Pants',price:5}));
    console.log(await queries.insertOne('items',{code:'TSHIRT',name:'T-Shirt',price:20}));
    console.log(await queries.insertOne('items',{code:'HAT',name:'Hat',price:7.5}));

    console.log(await queries.insertOne('promotions',{id:'2-for-1',description:'Buy tow fo the same product, get one free', code:'PANTS'}));
    console.log(await queries.insertOne('promotions',{id:'bulk',description:'Buying x or more of a product, the price of that product is reduced', code:'TSHIRT'}));
};

test(); 
