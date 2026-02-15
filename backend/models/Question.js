const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    title: String,
    difficulty: String,
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Question", questionSchema);
