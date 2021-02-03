const express = require("express");
const path = require("path");
const app = express();
const importData = require("./db/db.json");
let PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SENDS USER TO FIRST AJAX PAGE \\
app.get("/", (req, res) => {
  // res.send("Welcome to the Note Taker Page!");
  res.sendFile(__dirname + "public/index.html");
});

// DISPLAY NOTE PAGE WHEN CLICK \\
app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

// STARTS SERVER AND BEGINS LISTENING \\
app.listen(PORT, function () {
  console.log(`App listening on port http://localhost:${PORT}`);
});
