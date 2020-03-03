const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully established connection to database'))
    .catch(error => console.log(`Failed to establish connection with your database, ${error}`));