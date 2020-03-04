const playerController = require('../controllers/player.controllers');

module.exports = app => {
    app.get('/api/players', playerController.getPlayers);
    app.post('/api/players/new', playerController.createPlayer);
    app.put('/api/players/:id', playerController.updatePlayer);
    app.delete('/api/players/:id', playerController.deletePlayer);
}