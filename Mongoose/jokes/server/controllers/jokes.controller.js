const Joke = require('../models/jokes.model');

module.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(error => res.json({ message: 'Something went wrong. :(', error: error }));
};

module.exports.getSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json(joke))
        .catch(error => res.json({ message: 'Something went wrong. :(', error: error }));
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(createdJoke => res.json(createdJoke))
        .catch(error => res.json({ message: 'Something went wrong. :(', error: error }));
};

module.exports.updateJoke = (req, res) => {
    Joke.updateOne({ _id: req.body }, req.body, { new: true })
        .then(updatedJoke => res.json(updatedJoke))
        .catch(error => res.json({ message: 'Something went wrong. :(', error: error }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(error => res.json({ message: 'Something went wrong. :(', error: error }));
};