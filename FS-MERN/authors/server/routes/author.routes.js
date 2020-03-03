const authorController = require('../controllers/author.controllers');

module.exports = app => {
    // GET
    app.get('/api/authors', authorController.getAuthors);
    app.get('/api/authors/:id', authorController.getAuthor);
    // POST
    app.post('/api/authors/new', authorController.createAuthor);
    // PUT
    app.put('/api/authors/edit/:id', authorController.updateAuthor);
    // DELETE
    app.delete('/api/authors/:id', authorController.deleteAuthor);
    app.delete('/api/authors', authorController.deleteAuthors);
}