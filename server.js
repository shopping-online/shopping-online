const express = require('express')
const app = express()
const port = 3000
var _ = require('lodash');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Shopping-Online');

var productsRoute = require('./routes/products.route'); 
var loginRoute = require('./routes/login.route');

// Set view engine
app.set('views', './views');
app.set('view engine', 'ejs');

// define static file
app.use(express.static('public'));
app.use('/account',loginRoute);
app.use('/products',productsRoute);

// Home Page
app.get('/', (req, res) => {
	res.render('index')
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))