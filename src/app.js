const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const app = express();

const { PORT, API_URL, MONGODB_USER, MONGODB_PASS } = process.env;

const connectToCluster = async () => {
  try {
    console.log("Connecting to MongoDB Atlas cluster...");
    console.log(`Username: ${MONGODB_USER}, Password: ${MONGODB_PASS}`);

    const uri = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@cluster0.uldeaga.mongodb.net`;
    mongoose.connect(uri);

    console.log("Connected to MongoDB Atlas");

    return mongoose.connection;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit(1);
  }
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello, world!");
});

app.use(userRouter);
app.use(bookRouter);

connectToCluster().then(() => {
  app.listen(PORT, () => {
    console.log(`server has started on ${API_URL}:${PORT}`);
  });
});