var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var competitions = require('./models/competition.model');
var bparser = require('body-parser');

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

app.put('/api/comps', bparser.json(), function(req, res) {
    competitions.findOne({ id: req.body.id}, function(err, comp) {
        if(!err) {
            console.log(req.body.name);
            comp.name = req.body.name;
            comp.schools = req.body.schools;
            comp.save(function(saveErr) {
                if(saveErr) res.status(400).json({error: saveErr});
                res.status(200).json(comp);
            });
        } else res.status(400).json({error: err});
    });
})

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});

console.log('magic is on 3001');
app.listen(3001);