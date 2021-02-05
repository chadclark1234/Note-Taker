const path = require("path");

module.exports = (app) => {
  // SENDS USER TO HOMEPAGE \\
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // DISPLAY ENTER NOTE PAGE WHEN CLICK \\
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
};
