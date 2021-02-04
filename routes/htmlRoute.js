const path = require("path");

module.exports = function (app) {
  // SENDS USER TO HOMEPAGE \\
  app.get("/", (req, res) => {
    // res.send("Welcome to the Note Taker Page!");
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // DISPLAY NOTE PAGE WHEN CLICK \\
  app.get("/notes", (req, res) => {
    // res.send("Welcome to the Note Taker Page!");
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
