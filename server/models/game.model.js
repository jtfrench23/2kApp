const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    gamertag: { type: String },
    win: {type:Boolean},
    points: {type: Number},
    assists: {type: Number},
    steals: {type: Number},
    rebounds: {type: Number},
    blocks: {type: Number},
    turnovers: {type: Number},
    fouls: {type: Number}
}, { timestamps: true });
module.exports = mongoose.model('Game', GameSchema);