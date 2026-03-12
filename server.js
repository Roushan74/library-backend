const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Library API Running");
});

// connect database then start server
connectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});