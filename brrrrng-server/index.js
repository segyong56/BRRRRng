import mongoose from 'mongoose';
import express from "express";
import config from "./config/key";
const app = express();
const port = 80;

app.use(express.json());
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
}));

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("BRRRRng......");
});

app.listen(port, () => {
  console.log(`✅ Example app listening at http://localhost:${port} 😀`);
});
