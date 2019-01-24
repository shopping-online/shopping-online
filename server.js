// var connect = require('connect');
// var serveStatic = require('serve-static');

var express = require('express'); //import express
var app = express();
var path = require("path");


app.use(express.static(__dirname + '/src/assets'));
app.use(express.static('src'));

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');

<<<<<<< HEAD
app.get('assets/pages/device', function(req, res) {
	let items = [
		{
			product_name: 'DDR3_4GB Laptop Hynix',
			price1: '650.000 đ',
			price2: '690.000 đ',
			description: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
		},
		{
			product_name: 'DDR3_4GB Laptop Hynix',
			price1: '650.000 đ',
			price2: '690.000 đ',
			description: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
		},
		{
			product_name: 'DDR3_4GB Laptop Hynix',
			price1: '650.000 đ',
			price2: '690.000 đ',
			description: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
		},
		{
			product_name: 'DDR3_4GB Laptop Hynix',
			price1: '650.000 đ',
			price2: '690.000 đ',
			description: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
		},
		{
			product_name: 'DDR3_4GB Laptop Hynix',
=======
// connect().use(serveStatic(__dirname + '/public'))

app.get('/', function(req, res) {
	res.render('index', {may_tinh:[{
		img: 'https://picsum.photos/240/112',
		productName: 'DDR3_4GB Laptop Hynix',
		prices: {
>>>>>>> c1b48a4929253e3748eab2fda7e5ea711dc6444b
			price1: '650.000 đ',
			price2: '690.000 đ'
		},
		desciption: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
	},
	{
		img: 'https://picsum.photos/240/112',
		productName: 'DDR3_4GB Laptop Hynix',
		prices: {
			price1: '650.000 đ',
			price2: '690.000 đ'
		},
		desciption: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
	}
	],
	may_in:[{
		img: 'https://picsum.photos/240/112',
		productName: 'DDR3_4GB Laptop Hynix',
		prices: {
			price1: '650.000 đ',
			price2: '690.000 đ'
		},
		desciption: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
	}
	]})
})

<<<<<<< HEAD
// connect().use(serveStatic(__dirname + '/public'))

app.get('/', function(req, res) {
	res.render('index', {items:[{
		img: 'https://picsum.photos/240/112',
		productName: 'DDR3_4GB Laptop Hynix',
		prices: {
			price1: '650.000 đ',
			price2: '690.000 đ'
		},
		desciption: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
	},
	{
		img: 'https://picsum.photos/240/112',
		productName: 'DDR3_4GB Laptop Hynix',
		prices: {
			price1: '650.000 đ',
			price2: '690.000 đ'
		},
		desciption: 'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
	}
	]})
})

=======
>>>>>>> c1b48a4929253e3748eab2fda7e5ea711dc6444b
app.listen(8080, function(){
    console.log('Server running on 8080...');
});
