var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var mongoose = require('mongoose');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/restaurants';
var Restaurant = require('./restaurant.js').Restaurant;

mongoose.connect(mongoUri, function(err, res) {
  if (err) console.log('ERROR connecting to: ' + mongoUri + '. ' + err);
  else console.log ('Successfully connected to: ' + mongoUri);
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs'); // moteur template
app.set('views', path.join(__dirname, '/views')); //dossier pages
app.use(logger('dev'));
app.use(cors());
app.use(methodOverride());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/addinfo', function (req, res) {
  res.render('addinfo');
});

app.delete('/deleteinfo/:variable', function (req, res) {
  console.log(req.params);
  Restaurant.remove({_id: req.params.variable}, function(error){
    if (error) throw error;
    else res.sendStatus(200);
  });
});

app.get('/api/restaurants', function (req, res) {
  Restaurant.find({}, function(error, data){
    if (error) throw error;
    else res.json({ 'restaurants': data });
  });
});

app.post('/api/restaurants/new', function (req, res) {
  console.log(req.body);

  var newRestaurant = new Restaurant({ 
    'name': req.body.name, 
    'tags': req.body.tags, 
    'pictureURL': req.body.pictureURL, 
    'date': req.body.date, 
    'address': req.body.address, 
    'city': req.body.city, 
    'area': req.body.area, 
    'imgVignette': req.body.imgVignette
  });

  newRestaurant.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(port, function () {
  console.log('Example app listening on port!' + port);
});