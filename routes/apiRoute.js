const path = require("path");
// const uuid = require("uuid");
const noteData = require("../db/db.json");

module.exports = (app) => {
  //CREATE NOTE AND ADD ID \\
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
    console.log();
    // res.json(tableData);
  });

  // RETRIEVE NOTE BY ID \\
  app.post("/api/notes", (req, res) => {
    console.log(req.body);
    // res.json(waitListData);
  });

  // DELETE NOTE BY ID \\
  app.delete("/api/notes", (req, res) => {
    console.log("delete note");
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
  });
};
