var express = require('express'); //import express
var app = express();
var path = require ("path");


app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');

app.use(express.static( __dirname + 'src/assets'));
app.use(express.static('src'));



app.get('/', function(req, res) {
  //res.send('Hello world');
  res.render('index', {hello: ''});
});

app.get('/Hello', function(req, res) {
  //res.send('Hello world');
  res.render('index', {hello: 'world'});
});
app.get('/card', function(req, res) {
  //res.send('Hello world');
  let cards = [
  	{title: '#1',
  	desc: "Some....",
  	bnt: "choice #1"
  },  	
  {title: '#2',
  	desc: "Some....",
  	bnt: "choice #2"
  },  	
  {title: '#3',
  	desc: "Some....",
  	bnt: "choice #3"
  },  
  	{title: '#4',
  	desc: "Some....",
  	bnt: "choice #4"
  },
   
  	{title: '#5',
  	desc: "Some....",
  	bnt: "choice #5"
  },
      
  	{title: '#6',
  	desc: "Some....",
  	bnt: "choice #6"
  },
     
  	{title: '#7',
  	desc: "Some....",
  	bnt: "choice #7"
  },
     
  	{title: '#8',
  	desc: "Some....",
  	bnt: "choice #8"
  },
   
  	{title: '#9',
  	desc: "Some....",
  	bnt: "choice #9"
  },
    
  	{title: '#10',
  	desc: "Some....",
  	bnt: "choice #10"
  },
    {title: '#11',
  	desc: "Some....",
  	bnt: "choice #11"
  },
    {title: '#12',
  	desc: "Some....",
  	bnt: "choice #12"
  },
    {title: '#13',
  	desc: "Some....",
  	bnt: "choice #13"
  },
    {title: '#14',
  	desc: "Some....",
  	bnt: "choice #14"
  },
    {title: '#15',
  	desc: "Some....",
  	bnt: "choice #15"
  },
  ];
  res.render('card', {items: cards});
});


app.listen(8080, function() {
  console.log('Listening on port ' + 8080 + '...');
});
