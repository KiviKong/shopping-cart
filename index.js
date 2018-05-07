require('dotenv').config({path: './config/environments/' + process.argv[2] + '.env'});
const queries = require('./app/modules/queries');

const test = async () => {
    await queries.dropTable('items');
    console.log(await queries.insertOne('items', {Code: 'PANTS', Name: 'Pants', Price: 5}));
}

test();