const Player = require('../models/player.models');

module.exports.getPlayers = (req, res) => {
    Player.find()
        .then(players => res.json(players))
        .catch(errors => res.json(errors));
}

module.exports.createPlayer = (req, res) => {
    const { teamName, preferredPosition } = req.body;
    Player.create({ teamName: teamName, preferredPosition: preferredPosition })
        .then(createdPlayer => res.json(createdPlayer))
        .catch(errors => res.json(errors));
}

module.exports.updatePlayer = (req, res) => {
    Player.updateOne({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(errors => res.json(errors));
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(results => res.json(results))
        .catch(errors => res.json(errors));
}