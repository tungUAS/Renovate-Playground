const express = require("express");
const port = process.env.PORT || 3000;

const app = express();
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
