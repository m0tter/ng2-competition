var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var competitions = require('./models/competition.model');

app.use(morgan('dev'));
mongoose.connect('mongodb://admin:m0tter@proximus.modulusmongo.net:27017/nebyd8uD');

app.use(express.static(__dirname + '/'));

app.get('/api/comps', function(req, res) {
    competitions.find({}, function(err, docs) {
        if(!err) {
            res.status(200).json(docs);
        } else res.status(400).json(err);
    });
});

app.get('api/schools', function(req, res) {
    res.json([
        {id: 1, name: 'Good Shepherd', short: 'GSLC'},
        {id: 2, name: 'St Andrews Anglican', short: 'SAAC'}
    ]);
});

app.get('api/teams', function(req, res) {
    return [
        {id: 1, name: 'Good Thing', school_id: 1},
        {id: 2, name: 'Crushers', school_id: 1},
        {id: 3, name: 'Winners', school_id: 2}
    ]
});

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

console.log('magic is on 3001');
app.listen(3001);