const express = require("express");
const router = express.Router();
const Chat = require("../models/chat")

router.post("/submit", async (req, res) => {
  const { query, response } = req.body;

  const newChat = new Chat({
    query,
    response,
  });

  try {
    await newChat.save();
    res.status(201).json({ message: "Chat saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save chat" });
  }
});

module.exports = router;
