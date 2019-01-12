var express = require('express'); //import express
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/src/assets'));
app.use(express.static('src'));

app.set('views', __dirname +'/src');
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('index', {hello:''});
});

app.get('/hello', function(req, res) {
  res.render('index',{hello: 'world'});
});

app.get('/card', function(req, res) {
  let cards = [
	  {
	  	title: '#1',
	  	desc:"Some....",
	  	btn:"Choice #1"
	  },
	  {
	  	title: '#2',
	  	desc:"Some....",
	  	btn:"Choice #2"
	  },
	  {
	  	title: '#3',
	  	desc:"Some....",
	  	btn:"Choice #3"
	  },
	  {
	  	title: '#4',
	  	desc:"Some....",
	  	btn:"Choice #4"
	  },
	  {
	  	title: '#5',
	  	desc:"Some....",
	  	btn:"Choice #5"
	  },
	  {
	  	title: '#6',
	  	desc:"Some....",
	  	btn:"Choice #6"
	  },
	  {
	  	title: '#7',
	  	desc:"Some....",
	  	btn:"Choice #7"
	  },
	  {
	  	title: '#8',
	  	desc:"Some....",
	  	btn:"Choice #8"
	  },
	  {
	  	title: '#9',
	  	desc:"Some....",
	  	btn:"Choice #9"
	  },
	  {
	  	title: '#10',
	  	desc:"Some....",
	  	btn:"Choice #10"
	  },
	  {
	  	title: '#11',
	  	desc:"Some....",
	  	btn:"Choice #11"
	  },
	  {
	  	title: '#12',
	  	desc:"Some....",
	  	btn:"Choice #12"
	  },
	  {
	  	title: '#13',
	  	desc:"Some....",
	  	btn:"Choice #13"
	  },
	  {
	  	title: '#14',
	  	desc:"Some....",
	  	btn:"Choice #14"
	  },
	  {
	  	title: '#15',
	  	desc:"Some....",
	  	btn:"Choice #15"
	  },
	  ];
	  res.render('card',{items:cards});
})

app.listen(8080, function() {
  console.log('Listening on port ' + 8080 + '...');
});
