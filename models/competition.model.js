var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionSchema = new Schema({
    id: Number,
    name: String,
    schools: [{
        id: Number,
        name: String,
        teams: [{
            id: Number,
            name: String
        }]
    }]
});

//return the model
module.exports = mongoose.model('Competitions', CompetitionSchema);
