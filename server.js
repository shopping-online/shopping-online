const express = require('express')
const app = express()
const port = 3000
var data = require('./data');


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index',{
		data: data
	})
});
app.get('/search', (req, res) => {
	let q = req.query.q;
	let dataSearched = data.filter(function(item){
		return item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	console.log(req.query);
	res.render('index',{
		data: dataSearched,
		value : q
	})
});











app.listen(port, () => console.log(`Example app listening on port ${port}!`))