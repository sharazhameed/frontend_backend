// Setup

const express = require("express");
const userRouter = require("./router/user");
const movierouter = require("./router/movies");
const connect = require("./model/mongooo");
const app = express();

connect();
app.use(express.json());
app.use("/", movierouter);
app.use("/", userRouter);

app.listen(3001, () => {
  console.log("Server started 1.");
});
