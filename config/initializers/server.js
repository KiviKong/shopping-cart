const express = require('express');
const bodyParser = require('body-parser');
const pjson = require('./../../package.json');
const items = require('./../../app/routes/items');
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', (req, res) => res.json({API_name: pjson.name, API_version: pjson.version}));
app.route('/items').get(items.getAll);

let server = app.listen(process.env.APP_PORT);
console.log('API listen on port ' + process.env.APP_PORT);

// We export server to test using chai
module.exports = server;
