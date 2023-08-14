const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

const connectToDatabase = async () => {
  try {
    // Replace 'mongodb://localhost:27017/mydatabase' with your MongoDB connection string
    await mongoose.connect('mongodb+srv://as3662119:Ayesha24@cluster0.ibvtcqd.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB database!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};
connectToDatabase()
app.use(UploadRoute);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
