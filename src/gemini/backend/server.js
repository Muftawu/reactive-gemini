const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(`mongodb+srv://mohammedyiwere:${process.env.PASSWORD}@cluster0.vlmfyzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
  
const ChatSchema = new mongoose.Schema({
  query: String,
  response: String,
  date: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", ChatSchema);

// express backend server listening on process.env.PORT || 5000
const PORT = process.env.PORT

// enpoints for chat submission
app.post("/submit", async (req, res) => {
      const { query, response } = req.body

      const newChat = new Chat({
            query, 
            response,
      })

       try {
         await newChat.save();
         res.status(201).json({ message: "Chat saved successfully" });
       } catch (error) {
         res.status(500).json({ error: "Failed to save chat" });
       }
})

// endpoint for server activity
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
})


