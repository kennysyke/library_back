const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const app = express();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

mongoose.connect("mongodb://localhost:27017/TheCluster", (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

app.use(TheCluster);
app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello, world!");
});
app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST!");
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`server has started on ${API_URL}:${PORT}`);
});
