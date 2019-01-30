var product = require('../models/products.model');

module.exports.index = async(req, res) => {
	let products = await product.find();
	res.render('../views/products/products',{
		data: products
	});
};

module.exports.search = async (req, res) => {
	let q = req.query.q;
	let products = await product.find();
	let dataSearched = products.filter(function(item){
		return item.productName.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('../views/products/products',{
		data: dataSearched,
		value : q
	});
};

module.exports.viewDetail = (req,res) => {
	var id = req.params.id;
	let data = product.findOne({_id: id}, function (err, data) {
		if(err){
			console.log(err)
		}else {
			res.render('../views/products/detail',{
				product : data
			});
		}
	});
}
