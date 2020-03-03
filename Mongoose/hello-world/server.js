const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
require('./server/routes/person.routes')(app);

app.listen(8000, () => console.log("Server is running!"));