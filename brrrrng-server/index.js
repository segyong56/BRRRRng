const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const app = express();
const port = 80;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);
app.use("/auth", authRouter);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
