require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const blogRouter = require('./routes/blogRouter');

const app = express();
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

if (!MONGODB_URI || !PORT) {
  throw new Error("MONGODB_URI and PORT must be set in the environment variables");
}

console.log("connecting to", MONGODB_URI);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on: http://localhost:${PORT}`);
    });

  })
  .catch((error) => {
    console.log("error connecting to MongoDB", error.message);
  });

app.use('/blogs', blogRouter);
