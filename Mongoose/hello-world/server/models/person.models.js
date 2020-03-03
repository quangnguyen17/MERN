const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
}, { timestamps: true });

const Person = mongoose.model('Person', PersonSchema);
module.exports = Person;