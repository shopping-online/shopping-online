// var connect = require('connect');
// var serveStatic = require('serve-static');

var express = require('express'); //import express
var app = express();
var path = require("path");


app.use(express.static(__dirname + '/src/assets'));
app.use(express.static('src'));

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');

// connect().use(serveStatic(__dirname + '/public'))

app.get('/', function(req, res) {
	res.render('index', {may_tinh:[{
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

app.listen(8080, function(){
    console.log('Server running on 8080...');
});
