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
	let cards = [
		{
			title: '#1',
			desc: "Some....",
			btn: "Choice #1"
		},
		{
			title: '#2',
			desc: "Some....",
			btn: "Choice #2"
		},
		{
			title: '#3',
			desc: "Some....",
			btn: "Choice #3"
		},
		{
			title: '#4',
			desc: "Some....",
			btn: "Choice #4"
		},
		{
			title: '#5',
			desc: "Some....",
			btn: "Choice #5"
		},
		{
			title: '#6',
			desc: "Some....",
			btn: "Choice #6"
		},
		{
			title: '#7',
			desc: "Some....",
			btn: "Choice #7"
		},
		{
			title: '#8',
			desc: "Some....",
			btn: "Choice #8"
		},
		{
			title: '#1',
			desc: "Some....",
			btn: "Choice #1"
		},
		{
			title: '#9',
			desc: "Some....",
			btn: "Choice #9"
		},
		{
			title: '#10',
			desc: "Some....",
			btn: "Choice #10"
		},
		{
			title: '#11',
			desc: "Some....",
			btn: "Choice #11"
		},
		{
			title: '#12',
			desc: "Some....",
			btn: "Choice #12"
		},
		{
			title: '#13',
			desc: "Some....",
			btn: "Choice #13"
		},
		{
			title: '#14',
			desc: "Some....",
			btn: "Choice #14"
		},
		{
			title: '#15',
			desc: "Some....",
			btn: "Choice #15"
		}
	];
	res.render('card', {
		items: cards
	});
});

app.get('/devices', function (req, res) {
	let items =
	[
		{
		  "ten_sp": "Mercedes-Benz",
		  "gia_km": "2.10",
		  "gia": "6.37"
		}, {
		  "ten_sp": "Mercury",
		  "gia_km": "3.82",
		  "gia": "7.89"
		}, {
		  "ten_sp": "Mitsubishi",
		  "gia_km": "2.86",
		  "gia": "4.63"
		}, {
		  "ten_sp": "Smart",
		  "gia_km": "3.49",
		  "gia": "5.52"
		}, {
		  "ten_sp": "Chevrolet",
		  "gia_km": "6.04",
		  "gia": "0.22"
		}, {
		  "ten_sp": "Mercury",
		  "gia_km": "2.01",
		  "gia": "9.54"
		}, {
		  "ten_sp": "Nissan",
		  "gia_km": "1.79",
		  "gia": "6.81"
		}, {
		  "ten_sp": "Ford",
		  "gia_km": "1.93",
		  "gia": "6.74"
		}, {
		  "ten_sp": "BMW",
		  "gia_km": "9.76",
		  "gia": "1.68"
		}, {
		  "ten_sp": "Ford",
		  "gia_km": "9.13",
		  "gia": "0.79"
		}, {
		  "ten_sp": "Chevrolet",
		  "gia_km": "5.01",
		  "gia": "8.71"
		}, {
		  "ten_sp": "Infiniti",
		  "gia_km": "1.62",
		  "gia": "0.84"
		}, {
		  "ten_sp": "Lincoln",
		  "gia_km": "5.07",
		  "gia": "7.98"
		}, {
		  "ten_sp": "Geo",
		  "gia_km": "5.65",
		  "gia": "2.10"
		}, {
		  "ten_sp": "Pontiac",
		  "gia_km": "5.23",
		  "gia": "5.31"
		}, {
		  "ten_sp": "Land Rover",
		  "gia_km": "8.50",
		  "gia": "0.13"
		}, {
		  "ten_sp": "Ford",
		  "gia_km": "7.40",
		  "gia": "5.55"
		}, {
		  "ten_sp": "Rolls-Royce",
		  "gia_km": "0.93",
		  "gia": "8.87"
		}, {
		  "ten_sp": "Honda",
		  "gia_km": "7.09",
		  "gia": "9.08"
		}, {
		  "ten_sp": "Infiniti",
		  "gia_km": "6.96",
		  "gia": "7.25"
		}, {
		  "ten_sp": "Mazda",
		  "gia_km": "3.03",
		  "gia": "0.77"
		}, {
		  "ten_sp": "Mercury",
		  "gia_km": "6.42",
		  "gia": "2.33"
		}, {
		  "ten_sp": "Infiniti",
		  "gia_km": "3.80",
		  "gia": "0.81"
		}, {
		  "ten_sp": "Kia",
		  "gia_km": "9.61",
		  "gia": "6.34"
		}
	];
	res.render('devices', {jjjj: items});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

