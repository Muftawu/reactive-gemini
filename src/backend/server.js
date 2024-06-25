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
  
// import routes
const chat_route = require("./routes/chat_route") 

// Use routes
app.use("/api/chats", chat_route);


const PORT = process.env.PORT
// endpoint for server activity
app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
})


