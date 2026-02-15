const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/questionDB")
    .then(() => console.log("MongoDB connected"));

app.use("/api/questions", require("./routes/questionRoutes"));
app.use("/", (req, res) => {
    res.send("this page is homePage from backend")
});


app.listen(5001, () => console.log("Server running"));
