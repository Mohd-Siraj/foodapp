const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/fooddelivery")
  mongoose
    .connect(
      "mongodb+srv://sirajmohd889:5Vc2LOEgHrCJtEQy@cluster0.gi1xckx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
