const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/product.mongoose');
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
require('./server/routes/product.routes')(app);

const port = 8000;
app.listen(port, () => console.log(`Server is locked and loaded on port ${port}`));