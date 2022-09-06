const express = require("express");

// Import custom middleware
const { clog } = require("../middleware/clog");

// Import our modular routers for /tips and /feedback
const noteRouter = require("./notes.js");

const app = express();
app.use("/notes", noteRouter);
// Initialize custom middleware
app.use(clog);

module.exports = app;
