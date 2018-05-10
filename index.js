// const queries = require('./app/modules/queries');
// const crypt = require('./app/modules/crypt');
require('./app/server');

const test = async () => {
    // await queries.dropTable('items');
    // await queries.dropTable('promotions');
    // await queries.dropTable('items_promotions');
    // await queries.dropTable('users');
    // console.log(await queries.insertOne('users', {userName: 'fulanito', apiKey: await crypt.hashKey('bestapiever')}));
    // console.log(await queries.insertOne('items', {code: 'PANTS', name: 'Pants', price: 5}));
    // console.log(await queries.insertOne('items', {code: 'TSHIRT', name: 'T-Shirt', price: 20}));
    // console.log(await queries.insertOne('items', {code: 'HAT', name: 'Hat', price: 7.5}));
    // console.log(await queries.insertOne('promotions', {idPromotion: '2-for-1', description: 'Buy tow fo the same product, get one free'}));
    // console.log(await queries.insertOne('promotions', {idPromotion: 'bulk', description: 'Buying x or more of a product, the price of that product is reduced'}));
    // console.log(await queries.insertOne('items_promotions', {code: 'PANTS', idPromotion: '2-for-1'}));
    // console.log(await queries.insertOne('items_promotions', {code: 'TSHIRT', idPromotion: 'bulk'}));
};

test();
