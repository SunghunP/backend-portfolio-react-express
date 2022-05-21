// Import dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create app object
const app = express();

// MiddleWare
app.use(cors());

// Home Route for testing
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/projects/", (req, res) => {
  // Send projects via JSON
  res.json(projects);
});

app.get("/about", (req, res) => {
  // Send about via JSON
  res.json(about); 
});

// Declare PORT var
const PORT = 4000;

// Listen route
app.listen(PORT, () => {
  console.log(`Success! App is now running on port: ${PORT}`);
});
