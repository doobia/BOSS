const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const port = 8800;

// MongoDB setup
dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("database is connected");
});

// Middlewares
app.use(express.json());
const UserRouter = require("./routes/users");
const TaskRouter = require("./routes/task");


app.use("/api/users", UserRouter);
app.use("/api/posts", TaskRouter);

// app.get("/", (req, res) => {
//   res.send("this is the home opage");
// });

// app.get("/login", (req, res) => {
//   res.send("this is the login opage");
// });

// Sample test
app.listen(port, () => {
  console.log(`This is running on port ${port}`);
});

// http://localhost:8800/api/users/signup
