const Person = require('../models/person.models');

// GET - index
module.exports.index = (req, res) => {
    return res.json({ message: "Hello, World!", status: 200 });
}

// CREATE - createPerson
module.exports.createPerson = (req, res) => {
    const { firstName, lastName } = req.body;
    Person.create({ firstName, lastName })
        .then(createdPerson => res.json(createdPerson))
        .catch(error => res.json(error));
}

// RETRIEVE - getPerson
module.exports.getPeople = (req, res) => {
    Person.find()
        .then(allPeople => res.json(allPeople))
        .catch(error => res.json(error));
}

// DESTROY - deletePerson
module.exports.deletePerson = (req, res) => {

    Person.deleteOne({ _id: req.params.id })
        .then(results => res.json(results))
        .catch(error => res.json(error));
}