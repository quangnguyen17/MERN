const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to database. Ready!'))
    .catch(error => console.log(`Failed to connect to database: ${error}`));