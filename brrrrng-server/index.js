const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/key');
const userRouter = require('./routers/userRouter');
const app = express();
const port = 80;

app.use(express.json());

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
