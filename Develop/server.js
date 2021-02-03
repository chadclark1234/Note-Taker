const express = require("express");
const path = require("path");
const app = express();
const importData = require("./db/db.json");
let port = 3001;

// SENDS USER TO FIRST AJAX PAGE \\
app.get("/", (req, res) => {
  res.send("Welcome to the Note Taker Page!");
  // res.sendFile(path.join(__dirname, "view.html"));
});

// DB.JSON PAGE \\
app.get("/notes", (req, res) => {
  res.send(importData);
  // res.sendFile(path.join(__dirname, "view.html"));
});

// STARTS SERVER AND BEGINS LISTENING \\
app.listen(port, function () {
  console.log(`App listening on port http://localhost:${port}`);
});
