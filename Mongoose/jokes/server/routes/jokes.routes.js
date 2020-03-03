const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    // GET
    app.get('/api/jokes', JokeController.getAllJokes);
    app.get('/api/jokes/:id', JokeController.getSingleJoke);
    // PUT
    app.put('/api/jokes/:id', JokeController.updateJoke);
    // POST
    app.post('/api/jokes/new', JokeController.createJoke);
    // DELETE
    app.delete('/api/jokes/:id', JokeController.deleteJoke);
};