require('dotenv').config({path: './config/environments/' + process.argv[2] + '.env'});
const queries = require('./app/modules/queries');
const server = require('./config/initializers/server');

const test = async () => {
    await queries.dropTable('items');
    await queries.insertOne('items', {Code: 'PANTS', Name: 'Pants', Price: 5});
    await queries.insertOne('items', {Code: 'TSHIRT', Name: 'T-shirt', Price: 20});
    await queries.insertOne('items', {Code: 'HAT', Name: 'Hat', Price: 7.50});
};

test(); 
