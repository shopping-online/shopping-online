const express = require('express')
const app = express()
const port = 8080
var path = require("path");

app.use(express.static(__dirname + '/src/assets'));
app.use(express.static('src'));

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', {hello: ''}));
app.get('/hello', (req, res) => res.render('index', {hello: 'world'}));

app.get('/card', function (req, res) {
	let cards = [{
		"Title": 1,
		"desc": "Basile",
		"btn": "Crang"
	}, {
		"Title": 2,
		"desc": "Fred",
		"btn": "Seligson"
	}, {
		"Title": 3,
		"desc": "Rock",
		"btn": "Comber"
	}, {
		"Title": 4,
		"desc": "Portie",
		"btn": "Reuble"
	}, {
		"Title": 5,
		"desc": "Ginger",
		"btn": "Plumm"
	}, {
		"Title": 6,
		"desc": "Audrye",
		"btn": "Caulfield"
	}, {
		"Title": 7,
		"desc": "Matthias",
		"btn": "Lillgard"
	}, {
		"Title": 8,
		"desc": "Lars",
		"btn": "Fraschini"
	}, {
		"Title": 9,
		"desc": "Jocelyn",
		"btn": "Birkbeck"
	}, {
		"Title": 10,
		"desc": "Julianne",
		"btn": "Wederell"
	}]
	res.render('card', {
		items: cards
	});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

