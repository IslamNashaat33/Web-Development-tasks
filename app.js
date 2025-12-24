const express = require("express");
const mongoose = require("mongoose");

const courseRoutes = require("./routes/courses");

const app = express();

/* Middleware */
app.use(express.json());

/* MongoDB connection */
mongoose.connect(
  "mongodb://127.0.0.1:27017/lab9_courses"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

/* Routes */
app.use("/courses", courseRoutes);

/* Server */
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
