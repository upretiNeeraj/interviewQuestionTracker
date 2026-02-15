const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// Add question
router.post("/", async (req, res) => {
    const question = await Question.create(req.body);
    res.json(question);
});

// Get all
router.get("/", async (req, res) => {
    const data = await Question.find();
    res.json(data);
});

// Update
router.put("/:id", async (req, res) => {
    const updated = await Question.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
});

// Delete
router.delete("/:id", async (req, res) => {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
});

module.exports = router;
