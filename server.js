const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

const bookRoutes = require("./routes/bookRoutes");

app.use("/books", bookRoutes);

app.get("/", (req,res)=>{
res.send("Library API Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`);
});