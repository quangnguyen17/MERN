const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/players_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => console.log("Successfully established a connection to database!"))
    .catch(err => console.log("Failed to establish a connection to database. Please try again!"));