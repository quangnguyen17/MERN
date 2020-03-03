const PersonController = require('../controllers/person.controller');

module.exports = app => {
    // GET
    app.get('/api', PersonController.index);
    app.get('/api/people', PersonController.getPeople);
    // POST
    app.post('/api/people', PersonController.createPerson);
    // DELETE
    app.delete('/api/people/:id', PersonController.deletePerson);
}