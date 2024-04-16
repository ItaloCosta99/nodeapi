const express = require("express");
const postRoutes = require("./routes/post");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"));

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
