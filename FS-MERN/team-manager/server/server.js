const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose');
require('./routes/player.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Server is up and running at port ${port}`));