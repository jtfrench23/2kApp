const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    gamertag: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);