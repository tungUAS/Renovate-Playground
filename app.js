const express = require("express");
const port = process.env.PORT || 3000;
const router = require("./routes");
const app = express();

// test if renovate is being triggered!

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
app.use(router);
module.exports = app;
