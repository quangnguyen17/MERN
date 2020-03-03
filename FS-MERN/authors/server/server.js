const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose');
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/author.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Server is lock and load on port ${port}`));