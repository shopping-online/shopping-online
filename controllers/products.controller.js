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

module.exports.viewDetail = async(req,res) => {
	var id = req.params.id;
	// let products = await product.find({_id: id}, function (err, athletes) {
	// 	  if (err) return handleError(err);
	// 	  // 'athletes' chứa danh sách các vận động viên phù hợp với tiêu chí đã đề ra.
	// 	  console.log(athletes);
	// 	}));
	// for(let i of products){
	// 	// console.log(i);
	let products = await product.find();
	let data = products.find({'_id' : id});
	console.log(data)
	res.render('../views/products/detail',{
		product : data
	});
	}
// }