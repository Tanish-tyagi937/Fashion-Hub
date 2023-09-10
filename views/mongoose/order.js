const connection  = require('./connect'); 
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderId : String,
    orderPrice : String,
    orderDate:String 
})

const orders = mongoose.model('orders',orderSchema);

module.exports = orders;