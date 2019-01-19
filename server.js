const express = require('express')
const app = express()
const port = 8080
var path = require("path");

app.use(express.static(__dirname + '/src/assets'));
app.use(express.static('src'));

app.set('views', __dirname + '/src');
app.set('view engine', 'ejs');

app.get('/hello', (req, res) => res.render('index', {hello: 'world'}));

app.get('/card', function (req, res) {
	let cards = [
    {  "title": 1,
    "desc": "Trix",
    "btn": "Dring"
    }, {
      "title": 2,
      "desc": "Alfie",
      "btn": "O'Neal"
    }, {
      "title": 3,
      "desc": "Josefa",
      "btn": "Bulter"
    }, {
      "title": 4,
      "desc": "Jeralee",
      "btn": "Sporner"
    }, {
      "title": 5,
      "desc": "Regan",
      "btn": "Hanbidge"
    }, {
      "title": 6,
      "desc": "Kim",
      "btn": "Sorrill"
    }, {
      "title": 7,
      "desc": "Corabelle",
      "btn": "Banford"
    }, {
      "title": 8,
      "desc": "Vevay",
      "btn": "Tourner"
    }, {
      "title": 9,
      "desc": "Conney",
      "btn": "Whall"
    }, {
      "title": 10,
      "desc": "Pablo",
      "btn": "Klugel"
    }, {
      "title": 11,
      "desc": "Caria",
      "btn": "Parram"
    }, {
      "title": 12,
      "desc": "Drake",
      "btn": "Constantine"
    }, {
      "title": 13,
      "desc": "Jamaal",
      "btn": "Whodcoat"
    }, {
      "title": 14,
      "desc": "Nicolina",
      "btn": "Sprankling"
    }, {
      "title": 15,
      "desc": "Brook",
      "btn": "Paler"
    }, {
      "title": 16,
      "desc": "Shirline",
      "btn": "Rottenbury"
    }, {
      "title": 17,
      "desc": "Marcile",
      "btn": "Becerra"
    }, {
      "title": 18,
      "desc": "Gorden",
      "btn": "Craigmyle"
    }, {
      "title": 19,
      "desc": "Birgit",
      "btn": "Gossington"
    }, {
      "title": 20,
      "desc": "Tabbitha",
      "btn": "Harkness"
    }, {
      "title": 21,
      "desc": "Parker",
      "btn": "Drache"
    }, {
      "title": 22,
      "desc": "Marchelle",
      "btn": "Dinis"
    }, {
      "title": 23,
      "desc": "Cristin",
      "btn": "Wilkerson"
    }, {
      "title": 24,
      "desc": "Jania",
      "btn": "Casserly"
    }, {
      "title": 25,
      "desc": "Nonie",
      "btn": "Allflatt"
    }, {
      "title": 26,
      "desc": "Doe",
      "btn": "Vanlint"
    }, {
      "title": 27,
      "desc": "Debbi",
      "btn": "Garmons"
    }, {
      "title": 28,
      "desc": "Jewel",
      "btn": "Bazely"
    }, {
      "title": 29,
      "desc": "Judye",
      "btn": "Asprey"
    }, {
      "title": 30,
      "desc": "Curt",
      "btn": "Fevier"
    }, {
      "title": 31,
      "desc": "Donni",
      "btn": "Rydeard"
    }, {
      "title": 32,
      "desc": "Kayley",
      "btn": "Provis"
    }, {
      "title": 33,
      "desc": "Rosalind",
      "btn": "Backshaw"
    }, {
      "title": 34,
      "desc": "Stella",
      "btn": "Petrushka"
    }, {
      "title": 35,
      "desc": "Glen",
      "btn": "Timlin"
    }, {
      "title": 36,
      "desc": "Trudi",
      "btn": "Siuda"
    }, {
      "title": 37,
      "desc": "Jacynth",
      "btn": "McQuirter"
    }, {
      "title": 38,
      "desc": "Benita",
      "btn": "Peltz"
    }, {
      "title": 39,
      "desc": "Rutledge",
      "btn": "Zanicchelli"
    }, {
      "title": 40,
      "desc": "Lanny",
      "btn": "Dearsley"
    }, {
      "title": 41,
      "desc": "Nicolle",
      "btn": "Apthorpe"
    }, {
      "title": 42,
      "desc": "Cherey",
      "btn": "Swede"
    }, {
      "title": 43,
      "desc": "Gallard",
      "btn": "Moulsdale"
    }, {
      "title": 44,
      "desc": "Frederick",
      "btn": "Dubery"
    }, {
      "title": 45,
      "desc": "Twyla",
      "btn": "Crank"
    }, {
      "title": 46,
      "desc": "Barnard",
      "btn": "Tibalt"
    }, {
      "title": 47,
      "desc": "Grissel",
      "btn": "Juris"
    }, {
      "title": 48,
      "desc": "Asia",
      "btn": "Hawkins"
    }, {
      "title": 49,
      "desc": "Nigel",
      "btn": "Calderwood"
    }, {
      "title": 50,
      "desc": "Ignatius",
      "btn": "Valentelli"
    }, {
      "title": 51,
      "desc": "Hedy",
      "btn": "Wearn"
    }, {
      "title": 52,
      "desc": "Johnny",
      "btn": "Stoggles"
    }, {
      "title": 53,
      "desc": "Debbi",
      "btn": "O'Glassane"
    }, {
      "title": 54,
      "desc": "Ronda",
      "btn": "Knowller"
    }, {
      "title": 55,
      "desc": "Gustav",
      "btn": "Robiot"
    }, {
      "title": 56,
      "desc": "Bourke",
      "btn": "De Vaan"
    }, {
      "title": 57,
      "desc": "Padget",
      "btn": "Smees"
    }, {
      "title": 58,
      "desc": "Rasla",
      "btn": "Ekell"
    }, {
      "title": 59,
      "desc": "Dunstan",
      "btn": "Skillern"
    }, {
      "title": 60,
      "desc": "Dorise",
      "btn": "Richt"
    }, {
      "title": 61,
      "desc": "Luisa",
      "btn": "Andree"
    }, {
      "title": 62,
      "desc": "Mina",
      "btn": "Boshers"
    }, {
      "title": 63,
      "desc": "Kevina",
      "btn": "Cartmael"
    }, {
      "title": 64,
      "desc": "Irina",
      "btn": "Whyborn"
    }, {
      "title": 65,
      "desc": "Helsa",
      "btn": "Stammler"
    }, {
      "title": 66,
      "desc": "Mikol",
      "btn": "Falck"
    }, {
      "title": 67,
      "desc": "Melisse",
      "btn": "Gorst"
    }, {
      "title": 68,
      "desc": "Wynn",
      "btn": "Maghull"
    }, {
      "title": 69,
      "desc": "Bancroft",
      "btn": "Willcot"
    }, {
      "title": 70,
      "desc": "Marlin",
      "btn": "Hollingby"
    }, {
      "title": 71,
      "desc": "Joela",
      "btn": "Whylie"
    }, {
      "title": 72,
      "desc": "Trace",
      "btn": "Hastewell"
    }, {
      "title": 73,
      "desc": "Kellsie",
      "btn": "Mordacai"
    }, {
      "title": 74,
      "desc": "Fiann",
      "btn": "Raisbeck"
    }, {
      "title": 75,
      "desc": "Claude",
      "btn": "Beed"
    }, {
      "title": 76,
      "desc": "Stanwood",
      "btn": "Cossar"
    }, {
      "title": 77,
      "desc": "Louella",
      "btn": "Pietruszewicz"
    }, {
      "title": 78,
      "desc": "Zachary",
      "btn": "Beau"
    }, {
      "title": 79,
      "desc": "Valaree",
      "btn": "Benny"
    }, {
      "title": 80,
      "desc": "Grady",
      "btn": "Delahunty"
    }, {
      "title": 81,
      "desc": "Magdalene",
      "btn": "Parish"
    }, {
      "title": 82,
      "desc": "Shae",
      "btn": "Whitnall"
    }, {
      "title": 83,
      "desc": "Jamaal",
      "btn": "Coots"
    }, {
      "title": 84,
      "desc": "Felicity",
      "btn": "Charlick"
    }, {
      "title": 85,
      "desc": "Loni",
      "btn": "McCusker"
    }, {
      "title": 86,
      "desc": "Sidonnie",
      "btn": "Serchwell"
    }, {
      "title": 87,
      "desc": "Carlita",
      "btn": "Wandrich"
    }, {
      "title": 88,
      "desc": "Henry",
      "btn": "Redborn"
    }, {
      "title": 89,
      "desc": "Glenden",
      "btn": "Farnin"
    }, {
      "title": 90,
      "desc": "Lidia",
      "btn": "Mallabon"
    }, {
      "title": 91,
      "desc": "Zebulen",
      "btn": "Giottoi"
    }, {
      "title": 92,
      "desc": "Aura",
      "btn": "Mulran"
    }, {
      "title": 93,
      "desc": "Pepi",
      "btn": "Pehrsson"
    }, {
      "title": 94,
      "desc": "Silvanus",
      "btn": "Rimbault"
    }, {
      "title": 95,
      "desc": "Hyacinthia",
      "btn": "Breeton"
    }, {
      "title": 96,
      "desc": "Celina",
      "btn": "Philpotts"
    }, {
      "title": 97,
      "desc": "Bard",
      "btn": "Piperley"
    }, {
      "title": 98,
      "desc": "Marquita",
      "btn": "Wybourne"
    }, {
      "title": 99,
      "desc": "Audrey",
      "btn": "Joselson"
    }, {
      "title": 100,
      "desc": "Malinda",
      "btn": "Hawksworth" 
    }
  ]
	res.render('card', {
		items: cards
	});
})
//root path
app.get('/',function(req,res) {
  res.render('index',{
    may_in:[
      {
        img:'https://picsum.photos/240/112',
        productName:"DDR3_4GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      },{
        img:'https://picsum.photos/240/112',
        productName:"DDR3_4GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      },{
        img:'https://picsum.photos/240/112',
        productName:"DDR3_4GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      },{
        img:'https://picsum.photos/240/112',
        productName:"DDR3_4GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      }
    ],
    items:[
      {
        img:'https://picsum.photos/240/112',
        productName:"DDR3_4GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      },{
        img:'https://picsum.photos/240/112',
        productName:"DDR3_16GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      },{
        img:'https://picsum.photos/240/112',
        productName:"DDR3_32GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      },{
        img:'https://picsum.photos/240/112',
        productName:"DDR3_132GB Laptop Hynix",
        prices: {
          prices1:'650.000d',
          prices2:'690.000d',
        },
        desciption:'DDR3_4GB Laptop Hynix. Lorem Ipsum is simply dummy text of the printing and...'
      }
    ]});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

