// var connect = require('connect');
// var serveStatic = require('serve-static');

var express = require('express'); //import express
var app = express();
var path = require("path");


app.use(express.static(__dirname + '/src/assets'));
app.use(express.static('src'));

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');

app.get('/devices', function(req, res) {
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
		}
	];
	res.render('devices', {items: items});
})

// connect().use(serveStatic(__dirname + '/public'))

app.listen(8080, function(){
    console.log('Server running on 8080...');
});
