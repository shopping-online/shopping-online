module.exports.index = (req, res) => {
	res.render('../views/login');
};

module.exports.postLogin = (req, res) => {
	let value = req.body;
	console.log(value)
}