const express = require('express');
const bodyParser = require('body-parser');
const pjson = require('./../package.json');
const items = require('./routes/items');
const promotions = require('./routes/promotions');
const amount = require('./routes/amount');
const authenticate = require('./auth/auth');
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', (req, res) => res.json({API_name: pjson.name, API_version: pjson.version}));
app.route('/items').get(authenticate.auth, items.getAll);
app.route('/promotions').get(authenticate.auth, promotions.getAll);
app.route('/amount').post(authenticate.auth, amount.calculate);

let server = app.listen(process.env.APP_PORT);
console.log('API listen on port ' + process.env.APP_PORT);

// We export server to test using chai
module.exports = server;
