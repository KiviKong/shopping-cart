require('dotenv').config({path: './config/environments/' + process.argv[2] + '.env'});
const queries = require('./app/modules/queries');
const server = require('./config/initializers/server');

const test = async () => {
};

test(); 
