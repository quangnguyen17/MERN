const express = require('express');
require('./server/config/mongoose.config');

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
require('./server/routes/jokes.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Server is starting and listening at port ${port}`));