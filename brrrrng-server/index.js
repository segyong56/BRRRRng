const mongoose = require("mongoose");
const express = require("express");
const config = require("./config/key");
const app = express();
const port = 80;

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
