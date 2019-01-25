var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	productName : String,
	image : String,
	description: String,
	prices : Number 
});

var Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;