const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const serveStatic = require("serve-static");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use("/api/todos", require("./routes/api/todos"));

app.use(serveStatic(__dirname));
const port = process.env.PORT || 5000;
app.listen(port);
