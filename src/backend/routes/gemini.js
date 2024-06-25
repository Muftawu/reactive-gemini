const express = require("express");
const router = express.Router();

router.post("/submit", async (req, res) => {
  const { query, response } = req.body;


      try {
            await newChat.save();
            res.status(201).json({ message: "Chat saved successfully" });
      } catch (error) {
            res.status(500).json({ error: "Failed to save chat" });
      }



});

module.exports = router;
