const express = require("express");

require("./server/config/mongoose.config");

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));

require("./server/routes/user.routes")(app);

const port = 8000;
app.listen(port, () => console.log(`The server is all fired up on port ${port}`));
