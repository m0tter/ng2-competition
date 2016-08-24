var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.use(express.static(__dirname + '/'));

app.get('/api/comps', function(req, res) {
    
    res.status(200).json([
        {id: 1, name: 'Sumo'},
        {id: 2, name: 'Rescue'}
    ]);
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