var path = require('path');
var express = require('express');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var mongoose = require('mongoose');
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/measures';
var Areas = require('./restaurant.js').Areas;

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

app.get('/api/measures', function (req, res) {
  Areas.find({}, function(error, data){
    if (error) throw error;
    else res.json({ 'measures': data });
  });
});

app.post('/api/measures/new', function (req, res) {
  console.log(req.body);
  var newAreas = new Areas({ 'temperature': req.body.measures.temperature, 'light': req.body.measures.light });
  newArea.save(function (err) {
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