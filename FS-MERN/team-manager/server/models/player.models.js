const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    teamName: { type: String, require: true, minlength: [2, 'Team Name must be at least 2 characters.'] },
    preferredPosition: { type: String },
    status: { type: String }
}, { timestamps: true });

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;