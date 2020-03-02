const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is short for request
// res is short for response
app.get("/api/users", (req, res) => {
  const jsonData = [
    {
      firstName: "Quang",
      lastName: "Nguyen",
      age: 18
    },
    {
      firstName: "Gaku",
      lastName: "GIWEW",
      age: 15
    }
  ];

  return res.json(jsonData);
});

app.post("/api/users/new", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  return res.status(201).json({ newUser: newUser });
});

const server = app.listen(8000, () => console.log(`Server is locked and loaded on port ${server.address().port}!`));
